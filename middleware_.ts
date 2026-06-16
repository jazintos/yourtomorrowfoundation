import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  const accessToken = request.cookies.get(
    'sb-jymievgdccammhflnbmv-auth-token'
  )

  const isLoggedIn = !!accessToken

  // Handle /admin
  if (path === '/admin') {
    if (isLoggedIn) {
      return NextResponse.redirect(
        new URL('/admin/dashboard', request.url)
      )
    }

    return NextResponse.redirect(
      new URL('/admin/login', request.url)
    )
  }

  // Protect all admin routes except login
  if (
    path.startsWith('/admin') &&
    path !== '/admin/login'
  ) {
    if (!isLoggedIn) {
      return NextResponse.redirect(
        new URL('/admin/login', request.url)
      )
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}