'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Heart, ArrowRight, CheckCircle2, Star, Users, Utensils,
  BookOpen, Wrench, HomeIcon, Shield, Lock
} from 'lucide-react'
import Link from 'next/link'
import SEO from '@/components/SEO'


const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

const donationAmounts = [
  { amount: '₦5,000', label: 'Feed a family', desc: 'Provides nutritious meals for a family for one week', impact: '7 meals' },
  { amount: '₦15,000', label: 'School supplies', desc: 'School uniform, books, and supplies for one student', impact: '1 student' },
  { amount: '₦50,000', label: 'Skills training', desc: 'Complete vocational training module for one youth', impact: '1 youth' },
  { amount: '₦100,000', label: 'Community impact', desc: 'Funds a community medical outreach session', impact: '50 people' },
  { amount: '₦250,000', label: 'Prison outreach', desc: 'Comprehensive welfare package for prison inmates', impact: '100 inmates' },
  { amount: 'Custom', label: 'Your choice', desc: 'Choose your own amount and specify how you want it used', impact: 'Custom' },
]

const impactBreakdown = [
  { icon: Utensils, label: 'Feeding', desc: '₦5,000 feeds a family for a week', color: 'text-amber-500' },
  { icon: BookOpen, label: 'Education', desc: '₦15,000 supports one student', color: 'text-ytm-blue' },
  { icon: Wrench, label: 'Skills', desc: '₦50,000 trains one youth', color: 'text-ytm-green' },
  { icon: HomeIcon, label: 'Community', desc: '₦100,000 funds outreach', color: 'text-ytm-purple' },
]

const transparencyFeatures = [
  'Quarterly impact reports published on our website',
  'Annual audited financial statements',
  'Real-time programme updates via newsletter',
  'Donor recognition and appreciation programme',
  'Tax-deductible receipts for all donations',
]

export default function Donate() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(1)
  const [customAmount, setCustomAmount] = useState('')

  return (
    <>
      <SEO
        title="Donate"
        description="Support Your Tomorrow Foundation's mission. Your donation provides meals, education, skills training, and community support across Nigeria."
      />

      {/* ===== HERO ===== */}
      <section className="relative pt-32 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ytm-blue/10 via-white to-ytm-lavender dark:from-ytm-dark dark:via-ytm-dark dark:to-ytm-blue/10" />
        <div className="relative z-10 section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ytm-blue/10 text-ytm-blue text-sm font-medium mb-6">
                <Heart className="w-4 h-4" />
                Support Our Cause
              </div>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-outfit font-black text-ytm-dark dark:text-white leading-tight mb-6">
                Your Gift,<br />
                Their <span className="text-gradient">Tomorrow.</span>
              </h1>
              <p className="text-lg text-ytm-dark/70 dark:text-white/70 leading-relaxed mb-8">
                Every donation to Your Tomorrow Foundation directly transforms lives. 
                From providing nutritious meals to empowering youth with skills, your 
                generosity creates ripples of positive change across Nigerian communities.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-ytm-green/10 text-ytm-green text-sm">
                  <Shield className="w-4 h-4" /> Secure Payment
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-ytm-blue/10 text-ytm-blue text-sm">
                  <CheckCircle2 className="w-4 h-4" /> Tax Deductible
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-ytm-purple/10 text-ytm-purple text-sm">
                  <Star className="w-4 h-4" /> 100% to Programmes
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/hero_seyi.jpg"
                  alt="A hopeful child"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ytm-blue/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white text-lg font-medium mb-2">
                    "Because of donors like you, I can go to school and dream of a better future."
                  </p>
                  <p className="text-white/80 text-sm">— Beneficiary, School Outreach Programme</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== DONATION AMOUNTS ===== */}
      <section className="py-20 lg:py-32 bg-white dark:bg-ytm-dark/50">
        <div className="section-padding">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-outfit font-bold text-ytm-dark dark:text-white mb-4">
              Choose Your Impact
            </h2>
            <p className="text-lg text-ytm-dark/70 dark:text-white/70">
              Select an amount below to see exactly how your donation will be used.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {donationAmounts.map((option, i) => (
              <motion.button
                key={option.amount}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                onClick={() => setSelectedAmount(i)}
                className={`relative text-left p-6 rounded-3xl border-2 transition-all duration-300 hover:shadow-xl ${
                  selectedAmount === i
                    ? 'border-ytm-blue bg-ytm-blue/5 dark:bg-ytm-blue/10 shadow-xl'
                    : 'border-ytm-lavender dark:border-white/10 hover:border-ytm-blue/50'
                }`}
              >
                {selectedAmount === i && (
                  <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-ytm-blue flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                )}
                <div className="text-3xl font-outfit font-black text-ytm-blue dark:text-ytm-green mb-2">
                  {option.amount === 'Custom' ? (
                    <input
                      type="text"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      placeholder="₦..."
                      className="w-32 bg-transparent border-b-2 border-ytm-blue dark:border-ytm-green focus:outline-none text-3xl font-outfit font-black placeholder:text-ytm-blue/40"
                      onClick={(e) => e.stopPropagation()}
                    />
                  ) : (
                    option.amount
                  )}
                </div>
                <div className="text-lg font-outfit font-semibold text-ytm-dark dark:text-white mb-1">{option.label}</div>
                <p className="text-sm text-ytm-dark/60 dark:text-white/50 mb-3">{option.desc}</p>
                <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-ytm-green/10 text-ytm-green text-xs font-medium">
                  <Users className="w-3 h-3" />
                  Impacts {option.impact}
                </div>
              </motion.button>
            ))}
          </div>

          <motion.div {...fadeInUp} className="text-center mt-12">
            <button className="pill-btn-primary text-lg">
              <Lock className="w-5 h-5 mr-2" />
              Proceed to Secure Payment
            </button>
            <p className="text-sm text-ytm-dark/50 dark:text-white/40 mt-4 flex items-center justify-center gap-2">
              <Shield className="w-4 h-4" />
              Your payment information is encrypted and secure
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== IMPACT BREAKDOWN ===== */}
      <section className="py-20 lg:py-32 bg-ytm-lavender/30 dark:bg-ytm-dark">
        <div className="section-padding">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-outfit font-bold text-ytm-dark dark:text-white mb-4">
              Where Your Money Goes
            </h2>
            <p className="text-lg text-ytm-dark/70 dark:text-white/70">
              We are committed to transparency. Here's how every Naira is allocated.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactBreakdown.map((item, i) => (
              <motion.div
                key={item.label}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-white dark:bg-white/5 shadow-lg flex items-center justify-center mx-auto mb-4">
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                </div>
                <h3 className="text-lg font-outfit font-bold text-ytm-dark dark:text-white mb-2">{item.label}</h3>
                <p className="text-sm text-ytm-dark/60 dark:text-white/50">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Allocation Chart */}
          <motion.div
            {...fadeInUp}
            className="mt-16 max-w-3xl mx-auto"
          >
            <h3 className="text-xl font-outfit font-bold text-ytm-dark dark:text-white text-center mb-6">
              Fund Allocation
            </h3>
            <div className="space-y-4">
              {[
                { label: 'Direct Programme Delivery', percent: 85, color: 'bg-ytm-blue' },
                { label: 'Administrative Costs', percent: 10, color: 'bg-ytm-green' },
                { label: 'Fundraising', percent: 5, color: 'bg-ytm-purple' },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-ytm-dark/70 dark:text-white/70">{item.label}</span>
                    <span className="font-medium text-ytm-dark dark:text-white">{item.percent}%</span>
                  </div>
                  <div className="h-3 bg-ytm-lavender dark:bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 }}
                      className={`h-full ${item.color} rounded-full`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== TRANSPARENCY ===== */}
      <section className="py-20 lg:py-32 bg-white dark:bg-ytm-dark/50">
        <div className="section-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-4xl font-outfit font-bold text-ytm-dark dark:text-white mb-6">
                Our Commitment to Transparency
              </h2>
              <p className="text-ytm-dark/70 dark:text-white/60 mb-8 leading-relaxed">
                We believe donors deserve complete transparency. That's why we publish 
                detailed reports, maintain audited financials, and keep you updated on 
                exactly how your donation is making an impact.
              </p>
              <div className="space-y-4">
                {transparencyFeatures.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-ytm-green flex-shrink-0" />
                    <span className="text-ytm-dark/80 dark:text-white/70">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src="/images/school_kids.jpg"
                alt="Education impact"
                className="w-full h-[400px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ytm-blue/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 glass-card p-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-ytm-green flex items-center justify-center">
                    <Heart className="w-7 h-7 text-ytm-dark" />
                  </div>
                  <div>
                    <div className="text-2xl font-outfit font-bold text-ytm-dark dark:text-white">85%</div>
                    <div className="text-sm text-ytm-dark/60 dark:text-white/60">of funds go directly to programmes</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== OTHER WAYS ===== */}
      <section className="py-20 lg:py-32 bg-ytm-lavender/30 dark:bg-ytm-dark">
        <div className="section-padding">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-outfit font-bold text-ytm-dark dark:text-white mb-4">
              Other Ways to Give
            </h2>
            <p className="text-lg text-ytm-dark/70 dark:text-white/70">
              Beyond financial donations, there are many ways to support our mission.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Volunteer Your Time', desc: 'Join our team of dedicated volunteers making direct impact in the field.', icon: Users, link: '/get-involved' },
              { title: 'Corporate Partnership', desc: 'Partner with us as an organisation to amplify your CSR impact.', icon: Heart, link: '/get-involved' },
              { title: 'Spread the Word', desc: 'Share our mission with your network and help us reach more supporters.', icon: Star, link: '/contact' },
            ].map((way, i) => (
              <motion.div
                key={way.title}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-ytm-blue to-ytm-purple flex items-center justify-center mx-auto mb-4">
                  <way.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-outfit font-bold text-ytm-dark dark:text-white mb-2">{way.title}</h3>
                <p className="text-ytm-dark/60 dark:text-white/50 text-sm mb-4">{way.desc}</p>
                <Link href={way.link} className="text-ytm-blue dark:text-ytm-green font-medium text-sm hover:underline inline-flex items-center gap-1">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
