'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { Lock, Mail, LogIn } from 'lucide-react'

export default function AdminLoginPage() {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()

    setLoading(true)
    setError('')

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setError(error.message)
      setLoading(false)
      return
    }

    router.push('/admin/dashboard')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-ytm-blue/10 via-white to-ytm-green/10 px-4">
      <div className="glass-card w-full max-w-md p-8">

        <div className="text-center mb-8">
          <img
            src="/images/YTM_MAIN_LOGO_FULL_COLOR.png"
            alt="YTF"
            className="h-20 mx-auto mb-4"
          />

          <h1 className="text-3xl font-bold text-ytm-blue">
            Admin Login
          </h1>

          <p className="text-gray-500 mt-2">
            News & Content Management
          </p>
        </div>

        {error && (
          <div className="mb-4 rounded-xl bg-red-100 text-red-600 p-3 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">

          <div>
            <label className="block text-sm mb-2">
              Email Address
            </label>

            <div className="relative">
              <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />

              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl border"
                placeholder="admin@ytf.org"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-2">
              Password
            </label>

            <div className="relative">
              <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />

              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl border"
                placeholder="********"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full pill-btn-primary justify-center"
          >
            <LogIn className="w-5 h-5 mr-2" />

            {loading ? 'Signing In...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  )
}