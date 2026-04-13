import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';

export async function GET() {
  const db = getDb();
  const convs = db.prepare(`
    SELECT c.id, c.name, c.contact, c.takeover, c.updated_at,
      (SELECT content FROM messages WHERE conversation_id = c.id ORDER BY id DESC LIMIT 1) as last_message,
      (SELECT COUNT(*) FROM messages WHERE conversation_id = c.id) as message_count
    FROM conversations c ORDER BY c.updated_at DESC
  `).all();
  return NextResponse.json(convs);
}
