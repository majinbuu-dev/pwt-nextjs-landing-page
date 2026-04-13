import { NextRequest, NextResponse } from 'next/server';

const ADMIN_USER = 'pwt_tech_admin';
const ADMIN_PASS = 'pwTtech#2026';

function basicAuth(req: NextRequest) {
  const auth = req.headers.get('authorization');
  if (!auth?.startsWith('Basic ')) return false;
  const [user, pass] = atob(auth.slice(6)).split(':');
  return user === ADMIN_USER && pass === ADMIN_PASS;
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith('/admin/chat') || pathname.startsWith('/api/admin')) {
    if (!basicAuth(req)) {
      return new NextResponse('Unauthorized', {
        status: 401,
        headers: { 'WWW-Authenticate': 'Basic realm="PwT Admin"' },
      });
    }
  }

  if (pathname.startsWith('/admin/editor')) {
    if (!req.cookies.get('admin_session')) {
      return NextResponse.redirect(new URL('/admin', req.url));
    }
  }

  return NextResponse.next();
}

export const config = { matcher: ['/admin/chat/:path*', '/api/admin/:path*', '/admin/editor/:path*'] };
