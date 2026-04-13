import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const sessionId = searchParams.get('sessionId');
  const after = parseInt(searchParams.get('after') || '0');
  if (!sessionId) return NextResponse.json([]);
  const db = getDb();
  const messages = db.prepare(`SELECT id, role, content FROM messages WHERE conversation_id = ? AND id > ? ORDER BY id ASC`).all(sessionId, after);
  return NextResponse.json(messages);
}
