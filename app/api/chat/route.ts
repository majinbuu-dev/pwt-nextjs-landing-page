import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';

const SYSTEM_PROMPT = `You are a sales consultant for PwT Tech Solutions, helping customers with questions about our website services.

STRICT RULES:
- Always respond in American English only, regardless of what language the customer uses.
- Only answer questions related to PwT's services, pricing, timelines, and processes.
- If asked anything unrelated to our services or website, politely decline and redirect: "I'm here to help with questions about PwT's web services. Is there anything I can help you with regarding our services?"
- Never use markdown formatting. No asterisks, hashtags, bullet dashes, bold, or headers. Plain text only.

About PwT Tech Solutions — three core services:

1. E-commerce Website (Infrastructure Setup) — $1,299
Custom-built e-commerce website, mobile-responsive, SEO-optimized, product catalog, shopping cart, CMS, hosting setup, 30-day post-launch support.

2. Payment Gateway Integration — $699
Integration with Stripe, Airwallex, Adyen, Authorize.net. International currencies (USD, SGD, VND, AUD, CAD). PCI-compliant checkout, recurring billing, webhook setup.

3. Digital Marketing Support — $699
SEO strategy, Google Ads / Meta Ads setup, social media content, monthly reporting, email marketing.

Bundle Deal — All 3 Services: $2,499 (save ~$198)

Pricing Policy:
All prices in USD only. Services begin only after full invoice payment. Refunds case-by-case if work has not started. No refund once in progress.

Engagement: Free consultation available via the website. Typical project timeline: 2 to 4 weeks. Contact: contact@pwttech.com`;

async function sendTelegram(text: string, chatId?: string) {
  const id = chatId || process.env.TELEGRAM_CHAT_ID;
  if (!process.env.TELEGRAM_BOT_TOKEN || !id) return;
  await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: id, text }),
  }).catch(() => {});
}

export async function POST(req: NextRequest) {
  const { messages, sessionId } = await req.json();
  const db = getDb();

  // Upsert conversation
  db.prepare(`INSERT OR IGNORE INTO conversations (id) VALUES (?)`).run(sessionId);
  db.prepare(`UPDATE conversations SET updated_at = unixepoch() WHERE id = ?`).run(sessionId);

  const lastUser = messages[messages.length - 1]?.content || '';

  // Save user message
  db.prepare(`INSERT INTO messages (conversation_id, role, content) VALUES (?, 'user', ?)`).run(sessionId, lastUser);

  // Check if this is the first message — send Telegram once
  const msgCount = (db.prepare(`SELECT COUNT(*) as c FROM messages WHERE conversation_id = ?`).get(sessionId) as any).c;
  const conv = db.prepare(`SELECT takeover, name, contact FROM conversations WHERE id = ?`).get(sessionId) as { takeover: number; name: string; contact: string };
  if (msgCount === 1 && process.env.TELEGRAM_CHAT_ID_NEW_MESSAGE) {
    const now = new Date().toLocaleString('en-US', { timeZone: 'Asia/Ho_Chi_Minh', hour12: false });
    const text = [
      `💬 New Message`,
      `👤 ${conv?.name || 'Unknown'} — ${conv?.contact || ''}`,
      `🕐 ${now} (GMT+7)`,
      `📩 ${lastUser}`,
    ].join('\n');
    await sendTelegram(text, process.env.TELEGRAM_CHAT_ID_NEW_MESSAGE);
  }

  // Check takeover
  if (conv?.takeover) {
    return NextResponse.json({ reply: null });
  }

  // AI reply
  const res = await fetch('https://api.deepseek.com/chat/completions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${process.env.DEEPSEEK_API_KEY}` },
    body: JSON.stringify({
      model: 'deepseek-chat',
      messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...messages],
      max_tokens: 500,
    }),
  });

  if (!res.ok) return NextResponse.json({ error: 'AI unavailable' }, { status: 500 });

  const data = await res.json();
  const reply = data.choices[0].message.content;

  // Save AI reply
  db.prepare(`INSERT INTO messages (conversation_id, role, content) VALUES (?, 'assistant', ?)`).run(sessionId, reply);

  return NextResponse.json({ reply });
}
