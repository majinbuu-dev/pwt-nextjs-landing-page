import { NextRequest } from 'next/server';
import { getDb } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  const convId = req.nextUrl.searchParams.get('conv');
  const db = getDb();

  let lastConvTime: number = (db.prepare(`SELECT MAX(updated_at) as t FROM conversations`).get() as any)?.t || 0;
  let lastMsgId: number = convId
    ? (db.prepare(`SELECT MAX(id) as id FROM messages WHERE conversation_id = ?`).get(convId) as any)?.id || 0
    : 0;

  const stream = new ReadableStream({
    start(controller) {
      const interval = setInterval(() => {
        if (convId) {
          const msgs = db.prepare(`SELECT id FROM messages WHERE conversation_id = ? AND id > ? ORDER BY id DESC LIMIT 1`).get(convId, lastMsgId) as any;
          if (msgs) { lastMsgId = msgs.id; controller.enqueue(`data: update\n\n`); }
        } else {
          const latest = (db.prepare(`SELECT MAX(updated_at) as t FROM conversations`).get() as any)?.t || 0;
          if (latest > lastConvTime) { lastConvTime = latest; controller.enqueue(`data: update\n\n`); }
        }
      }, 1000);

      req.signal.addEventListener('abort', () => { clearInterval(interval); controller.close(); });
    },
  });

  return new Response(stream, {
    headers: { 'Content-Type': 'text/event-stream', 'Cache-Control': 'no-cache', 'Connection': 'keep-alive' },
  });
}
