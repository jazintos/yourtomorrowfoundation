'use client'

import Link from 'next/link'
import {
  LayoutDashboard,
  Newspaper,
  Image,
  Settings,
  LogOut,
} from 'lucide-react'

export default function AdminSidebar() {
  return (

    <aside className="w-64 bg-ytm-blue text-white min-h-screen p-6">

        <div className="flex justify-center mb-14">
        <img
            src=""
            alt=""
            className=""
        />
        </div>

      <nav className="space-y-2">

        <Link
          href="/admin/dashboard"
          className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10"
        >
          <LayoutDashboard className="w-5 h-5" />
          Dashboard
        </Link>

        <Link
          href="/admin/news"
          className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10"
        >
          <Newspaper className="w-5 h-5" />
          News Articles
        </Link>

        <Link
          href="/admin/media"
          className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10"
        >
          <Image className="w-5 h-5" />
          Media Library
        </Link>

        <Link
          href="/admin/settings"
          className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10"
        >
          <Settings className="w-5 h-5" />
          Settings
        </Link>

      </nav>

      <div className="mt-auto pt-10">
        <button className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 w-full">
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>

    </aside>
  )
}