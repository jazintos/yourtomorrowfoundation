'use client'

import { motion } from 'framer-motion'
import {
  Users, Target, Globe, Heart, Handshake, Shield,
  Star, ArrowRight, BookOpen, Lightbulb, Leaf
} from 'lucide-react'
import Link from 'next/link'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

const teamMembers = [
  { name: 'Founder & CEO', role: 'Executive Leadership', image: '/images/benji.jpg', bio: "Visionary leader driving the foundation's strategic direction." },
  { name: 'Programme Director', role: 'Operations', image: '/images/glasses_girl.jpg', bio: 'Overseeing the implementation of all foundation programmes.' },
  { name: 'Community Manager', role: 'Community Outreach', image: '/images/smile_girl.jpg', bio: 'Building bridges between the foundation and local communities.' },
  { name: 'Finance Officer', role: 'Finance & Admin', image: '/images/hero_seyi.jpg', bio: 'Ensuring transparent financial management and accountability.' },
]

const principles = [
  { title: 'Community-First', desc: "Every decision is made with the community's best interest at heart. We listen, learn, and lead from within.", icon: Users },
  { title: 'Equity', desc: 'We ensure fair access to resources and opportunities, regardless of background, gender, or circumstance.', icon: Heart },
  { title: 'Accountability', desc: 'Transparent operations, measurable outcomes, and responsible stewardship of every resource entrusted to us.', icon: Shield },
  { title: 'Sustainability', desc: 'We design programmes that create lasting change, building systems that outlive individual interventions.', icon: Leaf },
  { title: 'Collaboration', desc: 'We partner with government, other NGOs, and the private sector to amplify our collective impact.', icon: Handshake },
]

const objectives = [
  'Provide nutritious meals to vulnerable populations across Nigeria',
  'Deliver quality education support and scholarships to underserved students',
  'Equip youth and adults with vocational and entrepreneurial skills',
  'Build sustainable community infrastructure and partnerships',
  'Promote health and wellbeing through medical outreach programmes',
  'Advocate for inclusive policies that support marginalised groups',
]

export default function About() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative pt-32 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ytm-lavender via-white to-ytm-green/10 dark:from-ytm-dark dark:via-ytm-dark dark:to-ytm-blue/10" />
        <div className="relative z-10 section-padding">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ytm-blue/10 text-ytm-blue text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              About Your Tomorrow Foundation
            </div>
            <h1 className="text-5xl lg:text-7xl font-outfit font-black text-ytm-blue dark:text-white leading-tight mb-6">
              Building Tomorrow, <span className="text-gradient">Today.</span>
            </h1>
            <p className="text-xl text-ytm-dark/70 dark:text-white/70 max-w-2xl leading-relaxed">
              Established in 2024, Your Tomorrow Foundation is a non-profit organisation dedicated to unlocking human potential through education and nourishment while building sustainable communities across Nigeria.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== PURPOSE SECTION ===== */}
      <section className="py-20 lg:py-32 bg-white dark:bg-ytm-dark/50">
        <div className="section-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-4xl font-outfit font-bold text-ytm-blue dark:text-white mb-8">Our Purpose</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-ytm-blue/10 flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-ytm-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-outfit font-bold text-ytm-blue dark:text-white mb-2">Aim & Objectives</h3>
                    <ul className="space-y-2">
                      {objectives.slice(0, 3).map((obj, i) => (
                        <li key={i} className="flex items-start gap-2 text-ytm-dark/70 dark:text-white/60">
                          <ArrowRight className="w-4 h-4 text-ytm-green flex-shrink-0 mt-1" />
                          <span className="text-sm">{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-ytm-green/10 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-ytm-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-outfit font-bold text-ytm-blue dark:text-white mb-2">Mission</h3>
                    <p className="text-ytm-dark/70 dark:text-white/60 text-sm leading-relaxed">
                      To unlock human potential through education and nourishment while building sustainable communities that inspire growth and opportunity.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-ytm-purple/10 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-ytm-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-outfit font-bold text-ytm-blue dark:text-white mb-2">Vision</h3>
                    <p className="text-ytm-dark/70 dark:text-white/60 text-sm leading-relaxed">
                      To redefine Africa's future by creating inclusive systems of opportunity where communities are empowered and prosperity is sustained across generations.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-ytm-teal/10 flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-6 h-6 text-ytm-teal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-outfit font-bold text-ytm-blue dark:text-white mb-2">Our Approach</h3>
                    <p className="text-ytm-dark/70 dark:text-white/60 text-sm leading-relaxed">
                      We combine direct intervention with capacity building, working hand-in-hand with communities to identify needs, co-design solutions, and implement sustainable programmes.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img src="/images/yellow_dress.jpg" alt="Community empowerment" className="w-full h-[500px] object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-ytm-blue/40 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 glass-card p-6 shadow-xl max-w-xs">
                <div className="text-4xl font-outfit font-black text-ytm-blue mb-1">2024</div>
                <div className="text-sm text-ytm-dark/60 dark:text-white/60">Year Established</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== PRINCIPLES SECTION ===== */}
      <section className="py-20 lg:py-32 bg-ytm-lavender/30 dark:bg-ytm-dark">
        <div className="section-padding">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-outfit font-bold text-ytm-blue dark:text-white mb-4">Our Principles</h2>
            <p className="text-lg text-ytm-dark/70 dark:text-white/70">The core values that shape our culture, guide our decisions, and define our impact.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {principles.map((principle, i) => (
              <motion.div key={principle.title} {...fadeInUp} transition={{ delay: i * 0.1 }} whileHover={{ y: -8 }} className="glass-card p-8 hover:shadow-2xl transition-all duration-500 group">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-ytm-blue to-ytm-purple flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <principle.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-outfit font-bold text-ytm-blue dark:text-white mb-3">{principle.title}</h3>
                <p className="text-ytm-dark/70 dark:text-white/60 text-sm leading-relaxed">{principle.desc}</p>
              </motion.div>
            ))}
            <motion.div {...fadeInUp} transition={{ delay: 0.5 }} className="relative rounded-3xl overflow-hidden shadow-xl group md:col-span-2 lg:col-span-1">
              <img src="/images/forest_walk.jpg" alt="Community partnership" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-ytm-blue/80 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-xl font-outfit font-bold text-white mb-2">Community Partnership</h3>
                  <p className="text-white/80 text-sm">Working together for sustainable change.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== TEAM SECTION ===== */}
      <section className="py-20 lg:py-32 bg-white dark:bg-ytm-dark/50">
        <div className="section-padding">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-outfit font-bold text-ytm-blue dark:text-white mb-4">Our People</h2>
            <p className="text-lg text-ytm-dark/70 dark:text-white/70">A dedicated team of changemakers committed to transforming lives across Nigeria.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <motion.div key={member.name} {...fadeInUp} transition={{ delay: i * 0.1 }} whileHover={{ y: -8 }} className="group">
                <div className="relative rounded-3xl overflow-hidden shadow-xl mb-4">
                  <img src={member.image} alt={member.name} className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-outfit font-bold text-white">{member.name}</h3>
                    <p className="text-white/80 text-sm">{member.role}</p>
                  </div>
                </div>
                <p className="text-ytm-dark/60 dark:text-white/50 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-ytm-blue to-ytm-purple">
        <div className="section-padding">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-outfit font-bold text-white mb-6">Join Our Mission</h2>
            <p className="text-white/80 text-lg mb-8">Whether as a donor, volunteer, or partner, there's a place for you in building a brighter tomorrow.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/get-involved" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-ytm-blue rounded-full font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-105">
                Get Involved <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-ytm-blue transition-all duration-300">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}