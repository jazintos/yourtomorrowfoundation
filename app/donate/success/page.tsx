'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  CheckCircle2,
  Heart,
  ArrowRight,
  Home,
  Mail,
} from 'lucide-react'

export default function DonationSuccessPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-ytm-blue/5 via-white to-ytm-green/5 flex items-center justify-center px-6 py-24">
      <div className="max-w-3xl w-full">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-card p-10 lg:p-14 text-center"
        >

          {/* Success Icon */}
          <div className="w-24 h-24 rounded-full bg-ytm-green/10 flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="w-14 h-14 text-ytm-green" />
          </div>

          {/* Heading */}
          <h1 className="text-4xl lg:text-5xl font-outfit font-black text-ytm-blue mb-4">
            Donation Successful
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            Thank you for supporting Your Tomorrow Foundation.
            Your generosity helps provide education, nourishment,
            skills development and community support to vulnerable
            individuals and families across Nigeria.
          </p>

          {/* What Happens Next */}
          <div className="bg-ytm-blue/5 rounded-3xl p-8 text-left mb-10">
            <h2 className="text-2xl font-bold text-ytm-blue mb-6">
              What Happens Next?
            </h2>

            <div className="space-y-5">

              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-ytm-green flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-ytm-blue">
                    Donation Received
                  </h3>
                  <p className="text-gray-600">
                    Your donation has been successfully received and recorded.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="w-6 h-6 text-ytm-green flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-ytm-blue">
                    Confirmation Email
                  </h3>
                  <p className="text-gray-600">
                    A donation confirmation will be sent to the email address
                    you provided.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Heart className="w-6 h-6 text-ytm-green flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-ytm-blue">
                    Real Community Impact
                  </h3>
                  <p className="text-gray-600">
                    Your contribution will directly support programmes focused
                    on education, nutrition, youth empowerment and sustainable
                    community development.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <Link
              href="/"
              className="pill-btn-outline"
            >
              <Home className="w-5 h-5 mr-2" />
              Return Home
            </Link>

            <Link
              href="/impact"
              className="pill-btn-primary"
            >
              See Our Impact
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>

          </div>

        </motion.div>

      </div>
    </main>
  )
}