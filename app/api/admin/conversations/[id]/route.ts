import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';

export async function GET(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const db = getDb();
  const messages = db.prepare(`SELECT role, content, created_at FROM messages WHERE conversation_id = ? ORDER BY id ASC`).all(id);
  const conv = db.prepare(`SELECT takeover FROM conversations WHERE id = ?`).get(id);
  return NextResponse.json({ messages, conv });
}

export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { action, content } = await req.json();
  const db = getDb();

  if (action === 'takeover') {
    db.prepare(`UPDATE conversations SET takeover = 1 WHERE id = ?`).run(id);
    return NextResponse.json({ ok: true });
  }

  if (action === 'release') {
    db.prepare(`UPDATE conversations SET takeover = 0 WHERE id = ?`).run(id);
    return NextResponse.json({ ok: true });
  }

  if (action === 'reply' && content) {
    db.prepare(`INSERT INTO messages (conversation_id, role, content) VALUES (?, 'assistant', ?)`).run(id, content);
    db.prepare(`UPDATE conversations SET updated_at = unixepoch() WHERE id = ?`).run(id);
    return NextResponse.json({ ok: true });
  }

  return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
}
