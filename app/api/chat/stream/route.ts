import { NextRequest } from 'next/server';
import { getDb } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  const sessionId = req.nextUrl.searchParams.get('sessionId');
  if (!sessionId) return new Response('Missing sessionId', { status: 400 });

  const db = getDb();
  let lastId: number = (db.prepare(`SELECT COALESCE(MAX(id),0) as id FROM messages WHERE conversation_id = ?`).get(sessionId) as any).id;

  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    start(controller) {
      const interval = setInterval(() => {
        const msgs = db.prepare(
          `SELECT id, role, content FROM messages WHERE conversation_id = ? AND id > ? AND role = 'assistant' ORDER BY id ASC`
        ).all(sessionId, lastId) as { id: number; role: string; content: string }[];

        if (msgs.length) {
          lastId = msgs[msgs.length - 1].id;
          controller.enqueue(encoder.encode(`data: ${JSON.stringify(msgs)}\n\n`));
        }
      }, 1000);

      req.signal.addEventListener('abort', () => {
        clearInterval(interval);
        try { controller.close(); } catch {}
      });
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    },
  });
}
