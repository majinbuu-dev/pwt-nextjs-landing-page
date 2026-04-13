import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';

export async function POST(req: NextRequest) {
  const { sessionId, name, contact, device, region, timezone, referrer, language } = await req.json();
  const db = getDb();

  const existing = db.prepare(`SELECT id FROM conversations WHERE id = ?`).get(sessionId);
  if (existing) return NextResponse.json({ ok: true });

  db.prepare(`INSERT INTO conversations (id, name, contact) VALUES (?, ?, ?)`).run(sessionId, name, contact);

  if (process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID) {
    const now = new Date().toLocaleString('en-US', { timeZone: 'Asia/Ho_Chi_Minh', hour12: false });
    const infoText = [
      `🆕 New Chat Session`,
      `👤 ${name} — ${contact}`,
      `🕐 ${now} (GMT+7)`,
      `🌍 ${region || 'Unknown'} | ${timezone || ''}`,
      `📱 ${device || 'Unknown'}`,
      `🗣 Language: ${language || 'Unknown'}`,
      referrer ? `🔗 From: ${referrer}` : null,
    ].filter(Boolean).join('\n');

    const send = (chatId: string, text: string) =>
      fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text }),
      }).catch(() => {});

    // Customer info → TELEGRAM_CHAT_ID (for CRM)
    await send(process.env.TELEGRAM_CHAT_ID, infoText);
  }

  return NextResponse.json({ ok: true });
}
