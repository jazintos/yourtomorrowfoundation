'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Heart, GraduationCap, TrendingUp, HomeIcon, Users, Star,
  ArrowRight, Target, Leaf, BookOpen, HandHeart, Globe, Sparkles, Newspaper, FileSpreadsheet, Milestone
} from 'lucide-react'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

const sdgs = [
  {
    num: '01',
    title: 'No Poverty',
    image: '/images/E_SDG_PRINT-01.jpg',
    desc: 'Supporting vulnerable individuals and families through welfare initiatives and sustainable empowerment programmes.',
  },

  {
    num: '02',
    title: 'Zero Hunger',
    image: '/images/E_SDG_PRINT-02.jpg',
    desc: 'Ensuring nutritious meals reach vulnerable communities across Nigeria.',
  },

  {
    num: '03',
    title: 'Good Health & Well-Being',
    image: '/images/E_SDG_PRINT-03.jpg',
    desc: 'Improving access to healthcare through medical outreaches and community wellness initiatives.',
  },

  {
    num: '08',
    title: 'Decent Work & Economic Growth',
    image: '/images/E_SDG_PRINT-08.jpg',
    desc: 'Empowering youth and adults with vocational, entrepreneurial and employability skills.',
  },

  {
    num: '11',
    title: 'Sustainable Cities & Communities',
    image: '/images/E_SDG_PRINT-11.jpg',
    desc: 'Building resilient communities through inclusion, partnerships and sustainable development.',
  },
]

const pillars = [
  {
    title: 'Learn',
    desc: 'Expanding access to quality education, mentorship, scholarships, and learning opportunities that empower individuals to reach their full potential.',
    icon: BookOpen,
    color: 'bg-gradient-to-br from-ytm-blue to-blue-700',
    image: '/images/school_kids.jpg',
  },

  {
    title: 'Work',
    desc: 'Equipping youth and adults with vocational skills, entrepreneurship support, and economic opportunities that foster independence and growth.',
    icon: TrendingUp,
    color: 'bg-gradient-to-br from-ytm-green to-teal-500',
    image: '/images/medical_outreach.jpg',
  },

  {
    title: 'Thrive',
    desc: 'Providing nutrition, healthcare support, welfare programmes, and humanitarian interventions that improve quality of life.',
    icon: Heart,
    color: 'bg-gradient-to-br from-ytm-purple to-purple-600',
    image: '/images/sustainable.jpg',
  },

  {
    title: 'Belong',
    desc: 'Building sustainable communities where inclusion, dignity, resilience, and shared prosperity enable everyone to participate and succeed.',
    icon: Globe,
    color: 'bg-gradient-to-br from-ytm-blue to-ytm-green',
    image: '/images/IMG-20260226-WA0000.jpg',
  },
]

const values = [
  { title: 'Dignity', desc: 'Upholding the worth of every individual', icon: Sparkles },
  { title: 'Integrity', desc: 'Operating with transparency and honesty', icon: Star },
  { title: 'Compassion', desc: 'Leading with empathy and kindness', icon: Heart },
  { title: 'Impact', desc: 'Measuring and maximising positive change', icon: Target },
  { title: 'Excellence', desc: 'Striving for the highest standards', icon: TrendingUp },
]

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

const staggerItem = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
}

export default function Home() {
const [featuredNews, setFeaturedNews] = useState<any[]>([])

useEffect(() => {
  const fetchFeaturedNews = async () => {
    const { data } = await supabase
      .from('news')
      .select('*')
      .eq('featured', true)
      .eq('published', true)
      .order('created_at', {
        ascending: false,
      })
      .limit(3)

    if (data) {
      setFeaturedNews(data)
    }
  }

  fetchFeaturedNews()
}, [])

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ytm-lavender via-white to-ytm-cyan/10 dark:from-ytm-dark dark:via-ytm-dark dark:to-ytm-blue/20" />
        <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
          <img
            src="/images/hero_seyi.jpg"
            alt="A child looking toward a brighter future"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ytm-lavender dark:from-ytm-dark via-transparent to-transparent" />
        </div>

        <div className="relative z-10 w-full section-padding pt-32 pb-16 lg:pt-40 lg:pb-24">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ytm-blue/10 dark:bg-ytm-green/10 text-ytm-blue dark:text-ytm-green text-sm font-medium mb-6">
                <Star className="w-4 h-4" />
                Established 2024 — Nigeria
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-outfit font-black text-ytm-blue dark:text-white leading-[0.95] mb-6">
                Learn.<br />
                <span className="text-gradient">Work.</span><br />
                Thrive.<br />
                <span className="text-ytm-green">Belong.</span>
              </h1>

              <p className="text-lg lg:text-xl text-ytm-dark/70 dark:text-white/70 max-w-xl mb-8 leading-relaxed">
                Your Tomorrow Foundation unlocks human potential through education
                and nourishment while building sustainable communities that inspire
                growth and opportunity across Nigeria.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/donate"
                  className="pill-btn-primary text-lg font-bold"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Support Our Cause
                </Link>

                <Link
                  href="/about"
                  className="pill-btn-outline text-lg font-bold"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-20 right-20 hidden xl:block"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-24 h-24 rounded-2xl bg-ytm-green/20 backdrop-blur-sm flex items-center justify-center">
            <Leaf className="w-10 h-10 text-ytm-green" />
          </div>
        </motion.div>
      </section>

      {/* ===== MISSION SECTION ===== */}
      <section className="py-20 lg:py-32 bg-white dark:bg-ytm-dark/50">
        <div className="section-padding">
          <motion.div {...fadeInUp} className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-outfit font-bold text-ytm-blue dark:text-white mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-ytm-dark/70 dark:text-white/70 leading-relaxed">
              To unlock human potential through education and nourishment while building
              sustainable communities that inspire growth and opportunity. We believe every
              person deserves the chance to learn, work, thrive, and belong.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div {...fadeInUp} className="glass-card relative overflow-hidden p-8 hover:shadow-2xl transition-all duration-500 group">
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                  <Target className="absolute -right-8 -bottom-8 w-40 h-40 text-ytm-blue" />
                </div>
              <div className="w-14 h-14 rounded-2xl bg-ytm-blue/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-7 h-7 text-ytm-blue" />
              </div>
              <h3 className="text-2xl font-outfit font-bold text-ytm-blue dark:text-white mb-3">Mission</h3>
              <p className="text-ytm-dark/70 dark:text-white/60 leading-relaxed">
                To unlock human potential through education and nourishment while building
                sustainable communities that inspire growth and opportunity.
              </p>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="glass-card relative overflow-hidden p-8 hover:shadow-2xl transition-all duration-500 group">
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <Globe className="absolute -right-8 -bottom-8 w-40 h-40 text-ytm-green" />
              </div>
              
              <div className="w-14 h-14 rounded-2xl bg-ytm-green/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe className="w-7 h-7 text-ytm-green" />
              </div>
              <h3 className="text-2xl font-outfit font-bold text-ytm-blue dark:text-white mb-3">Vision</h3>
              <p className="text-ytm-dark/70 dark:text-white/60 leading-relaxed">
                To redefine Africa's future by creating inclusive systems of opportunity
                where communities are empowered and prosperity is sustained across generations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== VALUES SECTION ===== */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-ytm-blue/5 to-ytm-green/5 dark:from-ytm-blue/10 dark:to-ytm-green/10">
        <div className="section-padding">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-outfit font-bold text-ytm-blue dark:text-white mb-4">
              Our Values
            </h2>
            <p className="text-lg text-ytm-dark/70 dark:text-white/70">
              The principles that guide every decision we make and every action we take.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                {...staggerItem}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="text-center glass-card p-6 hover:shadow-2xl transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-ytm-blue to-ytm-green flex items-center justify-center mx-auto mb-4">
                  <val.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-outfit font-bold text-ytm-blue dark:text-white mb-2">{val.title}</h3>
                <p className="text-sm text-ytm-dark/60 dark:text-white/50">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SDGs SECTION ===== */}
      <section className="py-20 lg:py-32 bg-ytm-lavender/30 dark:bg-ytm-dark">
        <div className="section-padding">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ytm-green/10 text-ytm-green text-sm font-medium mb-4">
              <Globe className="w-4 h-4" />
              Aligned with Global Goals
            </div>
            <h2 className="text-4xl lg:text-5xl font-outfit font-bold text-ytm-blue dark:text-white mb-4">
              Our Priorities
            </h2>
            <p className="text-lg text-ytm-dark/70 dark:text-white/70 max-w-none whitespace-nowrap">
              We are committed to advancing the United Nations Sustainable Development Goals
              through targeted, measurable programmes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sdgs.map((sdg, i) => (
              <motion.div
                key={sdg.num}
                {...staggerItem}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass-card p-6 hover:shadow-2xl transition-all duration-500 group cursor-pointer"
              >
              <div className="rounded-2xl overflow-hidden mb-5 shadow-lg bg-white p-2">
                <img
                  src={sdg.image}
                  alt={sdg.title}
                  className="w-full object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-outfit font-bold text-ytm-blue dark:text-white mb-3">
                SDG {sdg.num} — {sdg.title}
              </h3>
                <p className="text-sm text-ytm-dark/60 dark:text-white/50 leading-relaxed">{sdg.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FOUR PILLARS SECTION ===== */}
      <section className="py-20 lg:py-32 bg-white dark:bg-ytm-dark/50">
        <div className="section-padding">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ytm-blue/10 text-ytm-blue text-sm font-medium mb-6">
            <Milestone className="w-4 h-4" />
            Pillars
          </div>

            <h2 className="text-4xl lg:text-5xl font-outfit font-bold text-ytm-blue dark:text-white mb-4">
              Four Core Pillars
            </h2>
            <p className="text-lg text-ytm-dark/70 dark:text-white/70">
              Our work is built on three foundational pillars that guide every programme
              and initiative we undertake.
            </p>
          </motion.div>

          <div className="space-y-8">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
              >
                <div className="lg:w-1/2">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${pillar.color} text-white text-sm font-medium mb-4`}>
                    <pillar.icon className="w-4 h-4" />
                    Pillar {i + 1}
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-outfit font-bold text-ytm-blue dark:text-white mb-4">
                    {pillar.title}
                  </h3>
                  <p className="text-ytm-dark/70 dark:text-white/60 text-lg leading-relaxed mb-6">
                    {pillar.desc}
                  </p>
                  <Link href="/impact" className="inline-flex items-center gap-2 text-ytm-blue dark:text-ytm-green font-medium hover:gap-4 transition-all duration-300">
                    Learn More <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* ===== FEATURED PROGRAMMES SECTION ===== */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-ytm-blue/5 to-ytm-green/5 dark:from-ytm-blue/10 dark:to-ytm-green/10">
        <div className="section-padding">

          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ytm-blue/10 text-ytm-blue text-sm font-medium mb-6">
            <FileSpreadsheet className="w-4 h-4" />
            Programmes
          </div>

            <h2 className="text-4xl lg:text-5xl font-outfit font-bold text-ytm-blue dark:text-white mb-4">
              Featured Programmes
            </h2>
            <p className="text-lg text-ytm-dark/70 dark:text-white/70">
              See the impact we're making across Nigeria through our flagship initiatives.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Prison Outreach', desc: 'Supporting inmates in correctional facilities through welfare support, counselling initiatives, rehabilitation efforts, and pathways to reintegration.', image: '/images/IMG-20260226-WA0000.jpg', link: '/impact' },
              { title: 'Medical Outreach', desc: 'Providing free healthcare services to underserved communities across Nigeria.', image: '/images/medical_outreach.jpg', link: '/impact' },
              { title: 'School Outreach', desc: 'Delivering educational materials, scholarships, and mentorship to students.', image: '/images/school_kids.jpg', link: '/impact' },
            ].map((prog, i) => (
              <motion.div key={prog.title} {...fadeInUp} transition={{ delay: i * 0.15 }} className="group cursor-pointer">
                <Link href={prog.link}>
                  <div className="relative rounded-3xl overflow-hidden shadow-xl mb-4">
                    <img src={prog.image} alt={prog.title} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-outfit font-bold text-white">{prog.title}</h3>
                    </div>
                  </div>
                  <p className="text-ytm-dark/70 dark:text-white/60 text-sm leading-relaxed">{prog.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeInUp} className="text-center mt-12">
            <Link href="/impact" className="pill-btn-outline">
              View All Programmes
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== DYNAMIC NEWS SECTION - NEW===== */}

      <section className="py-20 lg:py-32 bg-slate-50 dark:bg-ytm-dark">

      <div className="section-padding">

        <div className="text-center max-w-3xl mx-auto mb-16">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ytm-blue/10 text-ytm-blue text-sm font-medium mb-6">
            <Newspaper className="w-4 h-4" />
            Latest Stories
          </div>

          <h2 className="text-4xl lg:text-5xl font-outfit font-bold text-ytm-blue dark:text-white mb-4">
            Featured News & Updates
          </h2>

          <p className="text-lg text-ytm-dark/70 dark:text-white/70">
            Follow our latest outreach programmes, community impact stories and foundation updates.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {featuredNews.map((article) => (

            <Link
              key={article.id}
              href={`/news/${article.slug}`}
              className="glass-card overflow-hidden hover:shadow-2xl transition-all duration-300"
            >

              {article.image && (
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-56 object-cover"
                />
              )}

              <div className="p-6">

                <div className="text-xs text-ytm-blue font-semibold mb-3">
                  {article.category}
                </div>

                <h3 className="text-xl font-bold text-ytm-blue mb-3">
                  {article.title}
                </h3>

                <p className="text-sm text-gray-600 line-clamp-3">
                  {article.excerpt}
                </p>

              </div>

            </Link>

          ))}

        </div>

        <div className="text-center mt-12">

          <Link
            href="/news"
            className="pill-btn-outline"
          >
            View All Stories
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>

        </div>

      </div>

      </section>

      {/* ===== IMPACT STATS SECTION ===== */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-ytm-blue to-ytm-green">
        <div className="section-padding">
        <motion.div
          {...fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-outfit font-bold text-white mb-4">
            Impact At A Glance
          </h2>

          <p className="text-white/80 text-lg">
            As at June 2026
          </p>
        </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: '35,000+', label: 'Lives Impacted', icon: Users },
              { num: '15+', label: 'Communities Served', icon: HomeIcon },
              { num: '8', label: 'Active Programmes', icon: Target },
              { num: '50+', label: 'Volunteers', icon: Heart },
            ].map((stat, i) => (
              <motion.div key={stat.label} {...staggerItem} transition={{ duration: 0.5, delay: i * 0.1 }} className="text-center">
                <stat.icon className="w-8 h-8 text-ytm-green mx-auto mb-3" />
                <div className="text-4xl lg:text-5xl font-outfit font-black text-white mb-2">{stat.num}</div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-20 lg:py-32 bg-ytm-lavender/30 dark:bg-ytm-dark">
        <div className="section-padding">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-6xl font-outfit font-bold text-ytm-blue dark:text-white mb-6">
              Ready to Make a <span className="text-gradient">Difference?</span>
            </h2>
            <p className="text-lg text-ytm-dark/70 dark:text-white/70 mb-10 max-w-2xl mx-auto">
              Your contribution creates ripples of positive change across Nigerian communities. 
              Want to know more about how to donate, volunteer, or partner with us? 
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/donate" className="pill-btn-primary text-lg">
                <HandHeart className="w-5 h-5 mr-2" />
                Contact Us
              </Link>
            {/*   <Link href="/get-involved" className="pill-btn-green text-lg">
                Get Involved
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link> */}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}