'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Heart, GraduationCap, HomeIcon, Utensils, BookOpen,
  Wrench, Handshake, Target, ArrowRight, Star, Users, BarChart3
} from 'lucide-react'
import Link from 'next/link'
import SEO from '@/components/SEO'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

const coreAreas = [
  {
    title: 'Welfare & Nutrition',
    desc: 'Providing nutritious meals, food supplies, and essential welfare items to vulnerable populations including prison inmates, school children, and low-income families.',
    icon: Utensils,
    color: 'from-amber-400 to-orange-500',
    stats: '30,000+ meals served',
    image: '/images/1e0aebc4-f999-467b-af96-66bc180a6d83.jpg',
  },
  {
    title: 'Education',
    desc: 'Delivering scholarships, learning materials, school supplies, and mentorship programmes to underserved students across Nigeria.',
    icon: BookOpen,
    color: 'from-ytm-blue to-blue-600',
    stats: '2,500+ students supported',
    image: '/images/school_kids.jpg',
  },
  {
    title: 'Economic Empowerment',
    desc: 'Equipping youth and adults with vocational skills, entrepreneurial training, and micro-enterprise support for financial independence.',
    icon: Wrench,
    color: 'from-ytm-green to-teal-500',
    stats: 'Programme Launching Soon',
    image: '/images/forest_walk.jpg',
  },
  {
    title: 'Sustainable Communities',
    desc: 'Partnering with local communities to build resilient infrastructure, promote environmental sustainability, and foster inclusive development.',
    icon: HomeIcon,
    color: 'from-ytm-blue to-ytm-green',
    stats: '15+ communities engaged',
    image: '/images/medical_outreach.jpg',
  },
]

const programmes = [
  {
    title: 'Feeding Programmes',
    desc: 'Nutritious meals distributed to prisons, schools, and communities during Ramadan and throughout the year.',
    icon: Utensils,
    image: '/images/3abfe31b-3f8b-4fb8-8502-7292ff3fe233.jpg',
  },
  {
    title: 'Education Support',
    desc: 'Scholarships, school supplies, uniforms, and learning materials provided to students from low-income families.',
    icon: GraduationCap,
    image: '/images/7aee4146-5c29-49b4-8a7a-ad935123897c.jpg',
  },
  {
    title: 'Youth Skills Training',
    desc: 'Vocational training in tailoring, carpentry, ICT, and entrepreneurship for unemployed youth.',
    icon: Wrench,
    image: '/images/67704541-d6fb-49d6-9dc9-1cb5c626c567.jpg',
  },
  {
    title: 'Community Partnerships',
    desc: 'Collaborative projects with local organisations, government agencies, and international partners.',
    icon: Handshake,
    image: '/images/a798edd8-03e7-439a-90dd-eae2c96ca0ab.jpg',
  },
  {
    title: 'Medical Outreach',
    desc: 'Free health screenings, medication distribution, and health education in underserved communities.',
    icon: Heart,
    image: '/images/medical_outreach.jpg',
  },
  {
    title: 'Prison Outreach',
    desc: 'Regular visits to correctional facilities providing supplies, counselling, and reintegration support.',
    icon: Users,
    image: '/images/IMG-20260226-WA0000.jpg',
  },
]

function AnimatedCounter({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    let startTime: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [isInView, end, duration])

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

const impactMetrics = [
  { num: 35000, suffix: '+', label: 'Lives Impacted', icon: Users },
  { num: 30000, suffix: '+', label: 'Meals Served', icon: Utensils },
  { num: 2500, suffix: '+', label: 'Students Supported', icon: BookOpen },
  { num: 15, suffix: '+', label: 'Communities Served', icon: HomeIcon },
  { num: 50, suffix: '+', label: 'Volunteers', icon: Heart },
]

const successFactors = [
  'Strong community engagement and participation',
  'Transparent financial management and reporting',
  'Strategic partnerships with government and NGOs',
  'Data-driven programme design and evaluation',
  'Sustainable funding and resource diversification',
  'Continuous learning and programme adaptation',
]

export default function Impact() {
  return (
    <>
      <SEO
        title="Impact"
        description="See how Your Tomorrow Foundation is making a measurable difference across Nigeria through feeding programmes, education support, youth skills training, and community partnerships."
      />

      {/* ===== HERO ===== */}
      <section className="relative pt-32 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ytm-green/10 via-white to-ytm-blue/10 dark:from-ytm-dark dark:via-ytm-dark dark:to-ytm-green/10" />
        <div className="relative z-10 section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ytm-green/10 text-ytm-green text-sm font-medium mb-6">
              <BarChart3 className="w-4 h-4" />
              Our Impact
            </div>

            <h1 className="text-5xl lg:text-7xl font-outfit font-black text-ytm-blue dark:text-white leading-tight mb-6">
              Creating <span className="text-gradient">Measurable</span> Change.
            </h1>

            <p className="text-xl text-ytm-dark/70 dark:text-white/70 max-w-2xl leading-relaxed">
              Through targeted programmes and community partnerships, we're building a
              Nigeria where every person has the opportunity to thrive.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== CORE AREAS ===== */}
      <section className="py-20 lg:py-32 bg-white dark:bg-ytm-dark/50">
        <div className="section-padding">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-outfit font-bold text-ytm-blue dark:text-white mb-4">
              What We Do
            </h2>
            <p className="text-lg text-ytm-dark/70 dark:text-white/70">
              Four core areas of intervention designed to create holistic, lasting impact
              in the communities we serve.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {coreAreas.map((area, i) => (
              <motion.div
                key={area.title}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="group relative rounded-3xl overflow-hidden shadow-xl"
              >
                <div className="relative h-64">
                  <img
                    src={area.image}
                    alt={area.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${area.color} text-white text-xs font-medium mb-3`}>
                    <area.icon className="w-3 h-3" />
                    {area.stats}
                  </div>
                  <h3 className="text-2xl font-outfit font-bold text-white mb-2">{area.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{area.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROGRAMMES ===== */}
      <section className="py-20 lg:py-32 bg-ytm-lavender/30 dark:bg-ytm-dark">
        <div className="section-padding">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-outfit font-bold text-ytm-blue dark:text-white mb-4">
              Our Programmes
            </h2>
            <p className="text-lg text-ytm-dark/70 dark:text-white/70">
              From feeding initiatives to skills training, each programme is designed
              to address specific community needs.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {programmes.map((prog, i) => (
              <motion.div
                key={prog.title}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass-card overflow-hidden hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <prog.icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-outfit font-bold text-ytm-blue dark:text-white mb-2">{prog.title}</h3>
                  <p className="text-ytm-dark/60 dark:text-white/50 text-sm leading-relaxed">{prog.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== IMPACT METRICS ===== */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-ytm-blue to-ytm-green">
        <div className="section-padding">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-outfit font-bold text-white mb-4">
              Impact at a Glance
            </h2>
            <p className="text-lg text-white/80">
              Numbers that reflect the lives we've touched and the communities we've transformed.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            {impactMetrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <metric.icon className="w-8 h-8 text-ytm-green mx-auto mb-3" />
                <div className="text-4xl lg:text-5xl font-outfit font-black text-white mb-2">
                  <AnimatedCounter end={metric.num} suffix={metric.suffix} />
                </div>
                <div className="text-white/80">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SUCCESS FACTORS ===== */}
      <section className="py-20 lg:py-32 bg-white dark:bg-ytm-dark/50">
        <div className="section-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-4xl font-outfit font-bold text-ytm-blue dark:text-white mb-8">
                Goals & Critical Success Factors
              </h2>

              <div className="space-y-4">
                {successFactors.map((factor, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-ytm-lavender/30 dark:bg-white/5 hover:bg-ytm-lavender/50 dark:hover:bg-white/10 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-ytm-green/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Star className="w-4 h-4 text-ytm-green" />
                    </div>
                    <p className="text-ytm-dark/80 dark:text-white/70">{factor}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/c35a2b64-9305-468d-9aff-b7158588ebac.jpg"
                  alt="Community impact"
                  className="w-full h-[500px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ytm-blue/40 to-transparent" />
              </div>

              <div className="absolute -bottom-6 -right-6 glass-card p-6 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-ytm-green flex items-center justify-center">
                    <Target className="w-6 h-6 text-ytm-dark" />
                  </div>
                  <div>
                  <div className="text-sm font-medium text-ytm-dark dark:text-white">People Supported by 2027</div>
                    <div className="text-2xl font-outfit font-bold text-ytm-blue dark:text-ytm-green">100,000+</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 lg:py-32 bg-ytm-lavender/30 dark:bg-ytm-dark">
        <div className="section-padding">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-outfit font-bold text-ytm-blue dark:text-white mb-6">
              Help Us Do More
            </h2>
            <p className="text-lg text-ytm-dark/70 dark:text-white/70 mb-10">
              Your support enables us to expand our programmes and reach more communities
              across Nigeria.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/donate" className="pill-btn-primary text-lg">
                <Heart className="w-5 h-5 mr-2" />
                Donate Now
              </Link>
              <Link href="/get-involved" className="pill-btn-outline text-lg">
                Get Involved
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}