'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Heart, Handshake, Users, Megaphone, ArrowRight, CheckCircle2,
  Star, Zap, BookOpen, Clock, MapPin, Mail
} from 'lucide-react'
import Link from 'next/link'
import SEO from '@/components/SEO'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

const involvementOptions = [
 /* {
    title: 'Make a Donation',
    desc: 'Your financial contribution directly supports our programmes, from feeding initiatives to education scholarships. Every donation counts.',
    icon: Heart,
    color: 'from-ytm-green to-teal-500',
    bgColor: 'bg-ytm-blue/5',
    actions: ['One-time donation', 'Monthly giving', 'Corporate sponsorship'],
    cta: 'Donate Now',
    link: '/donate',
  }, **/
  {
    title: 'Partner With Us',
    desc: 'Collaborate with us as an organisation, government agency, or business. Together, we can amplify our impact and reach more communities.',
    icon: Handshake,
    color: 'from-ytm-green to-teal-500',
    bgColor: 'bg-ytm-green/5',
    actions: ['Corporate partnerships', 'Government collaboration', 'NGO networks'],
    cta: 'Become a Partner',
    link: '/contact',
  },
  {
    title: 'Volunteer',
    desc: 'Share your time, skills, and passion. Volunteers are the backbone of our operations, from field work to administrative support.',
    icon: Users,
    color: 'from-ytm-green to-teal-500',
    bgColor: 'bg-ytm-purple/5',
    actions: ['Field volunteers', 'Skill-based volunteering', 'Remote support'],
    cta: 'Join as Volunteer',
    link: '/contact',
  },
  {
    title: 'Advocate',
    desc: 'Use your voice to raise awareness about the issues we address. Share our stories, engage your network, and help us reach more people.',
    icon: Megaphone,
    color: 'from-ytm-green to-teal-500',
    bgColor: 'bg-orange-50',
    actions: ['Social media advocacy', 'Community mobilisation', 'Policy advocacy'],
    cta: 'Start Advocating',
    link: '/contact',
  },
]

const volunteerRoles = [
  {
    title: 'Field Volunteer',
    desc: 'Participate directly in our outreach programmes including prison visits, school distributions, and medical outreaches.',
    commitment: 'Flexible',
    location: 'Lagos / Abuja',
    icon: MapPin,
    image: '/images/field-volunteer.png',
  },
  {
    title: 'Skills Trainer',
    desc: 'Share your professional expertise by teaching vocational skills to youth and adults in our training programmes.',
    commitment: 'Part-time',
    location: 'Multiple locations',
    icon: Zap,
    image: '/images/skills-trainer.png',
  },
  {
    title: 'Education Mentor',
    desc: 'Mentor students through our education support programme, providing academic guidance and career advice.',
    commitment: '2-4 hours/week',
    location: 'Remote / In-person',
    icon: BookOpen,
    image: '/images/education-mentor.png',
  },
  {
    title: 'Communications Volunteer',
    desc: 'Help with content creation, social media management, and storytelling to amplify our impact.',
    commitment: 'Flexible',
    location: 'Remote',
    icon: Megaphone,
    image: '/images/communications-volunteer.png',
  },
]

export default function GetInvolved() {
  const [selectedRole, setSelectedRole] = useState<number | null>(null)

  return (
    <>
      <SEO
        title="Get Involved"
        description="Join Your Tomorrow Foundation as a donor, partner, volunteer, or advocate. There are many ways to contribute to our mission."
      />

      {/* ===== HERO ===== */}
      <section className="relative pt-32 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ytm-green/10 via-white to-ytm-lavender dark:from-ytm-dark dark:via-ytm-dark dark:to-ytm-green/10" />
        <div className="relative z-10 section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ytm-green/10 text-ytm-green text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              Get Involved
            </div>

            <h1 className="text-5xl lg:text-7xl font-outfit font-black text-ytm-blue dark:text-white leading-tight mb-6">
              Be the <span className="text-gradient">Change.</span>
            </h1>

            <p className="text-xl text-ytm-dark/70 dark:text-white/70 max-w-2xl leading-relaxed">
              There are many ways to contribute to our mission. Whether you donate,
              volunteer, partner, or advocate — your involvement creates real impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== INVOLVEMENT OPTIONS ===== */}
      <section className="py-20 lg:py-32 bg-white dark:bg-ytm-dark/50">
        <div className="section-padding">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-outfit font-bold text-ytm-blue dark:text-white mb-4">
              How You Can Help
            </h2>
            <p className="text-lg text-ytm-dark/70 dark:text-white/70">
              Choose the path that best fits your capacity and passion.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {involvementOptions.map((option, i) => (
              <motion.div
                key={option.title}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className={`${option.bgColor} dark:bg-white/5 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 group`}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${option.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <option.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-2xl font-outfit font-bold text-ytm-blue dark:text-white mb-3">{option.title}</h3>

                <p className="text-ytm-dark/70 dark:text-white/60 mb-6 leading-relaxed">{option.desc}</p>

                <ul className="space-y-2 mb-6">
                  {option.actions.map((action) => (
                    <li key={action} className="flex items-center gap-2 text-sm text-ytm-dark/60 dark:text-white/50">
                      <CheckCircle2 className="w-4 h-4 text-ytm-green" />
                      {action}
                    </li>
                  ))}
                </ul>

                <Link
                  href={option.link}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ytm-dark dark:bg-white text-white dark:text-ytm-dark font-medium hover:opacity-90 transition-all duration-300 hover:scale-105"
                >
                  {option.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== VOLUNTEER ROLES ===== */}
      <section className="py-20 lg:py-32 bg-ytm-lavender/30 dark:bg-ytm-dark">
        <div className="section-padding">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-outfit font-bold text-ytm-blue dark:text-white mb-4">
              Volunteer Opportunities
            </h2>
            <p className="text-lg text-ytm-dark/70 dark:text-white/70">
              Explore specific roles where your skills and time can make the biggest difference.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {volunteerRoles.map((role, i) => (
              <motion.div
                key={role.title}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                onClick={() => setSelectedRole(selectedRole === i ? null : i)}
                className={`glass-card p-6 cursor-pointer hover:shadow-xl transition-all duration-300 ${
                  selectedRole === i ? 'ring-2 ring-ytm-blue' : ''
                }`}
              >
<>
  <div className="relative h-48 -m-6 mb-6 overflow-hidden rounded-t-3xl">
    <img
      src={role.image}
      alt={role.title}
      className="w-full h-full object-cover"
      loading="lazy"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
  </div>

  <div className="flex items-start gap-4">

    <div className="w-12 h-12 rounded-xl bg-ytm-blue/10 flex items-center justify-center flex-shrink-0">
      <role.icon className="w-6 h-6 text-ytm-blue" />
    </div>

    <div className="flex-grow">

      <h3 className="text-lg font-outfit font-bold text-ytm-blue dark:text-white mb-1">
        {role.title}
      </h3>

      <p className="text-ytm-dark/60 dark:text-white/50 text-sm mb-3">
        {role.desc}
      </p>

      <div className="flex items-center gap-4 text-xs text-ytm-dark/50 dark:text-white/40">
        <span className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {role.commitment}
        </span>

        <span className="flex items-center gap-1">
          <MapPin className="w-3 h-3" />
          {role.location}
        </span>
      </div>

    </div>

  </div>
</>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PARTNERSHIP SECTION ===== */}
      <section className="py-20 lg:py-32 bg-white dark:bg-ytm-dark/50">
        <div className="section-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-4xl font-outfit font-bold text-ytm-blue dark:text-white mb-6">
                Partnership Opportunities
              </h2>

              <p className="text-ytm-dark/70 dark:text-white/60 mb-8 leading-relaxed">
                We believe in the power of collaboration. By partnering with Your Tomorrow Foundation,
                organisations can fulfil their CSR objectives while making a tangible difference
                in Nigerian communities.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  'Co-branded community programmes',
                  'Employee volunteering opportunities',
                  'Matched giving programmes',
                  'Strategic capacity building support',
                  'Joint fundraising initiatives',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-ytm-green flex-shrink-0" />
                    <span className="text-ytm-dark/80 dark:text-white/70">{item}</span>
                  </div>
                ))}
              </div>

              <Link href="/contact" className="pill-btn-primary">
                Discuss Partnership
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/partnership-opportunities.png"
                  alt="Partnership"
                  className="w-full h-[400px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ytm-blue/50 to-transparent" />
              </div>

              <div className="absolute -bottom-6 -left-6 glass-card p-6 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-ytm-green flex items-center justify-center">
                    <Handshake className="w-7 h-7 text-ytm-dark" />
                  </div>

                  <div>
                    <div className="text-sm text-ytm-dark/60 dark:text-white/60">Partnership enquiries</div>
                    <a href="mailto:partnerships@yourtomorrowfoundation.org" className="text-ytm-blue dark:text-ytm-green font-medium hover:underline">
                      partnerships@yourtomorrowfoundation.org
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
     {/*   <section className="py-20 lg:py-32 bg-gradient-to-r from-ytm-blue to-ytm-purple">
        <div className="section-padding">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-outfit font-bold text-white mb-6">
              Ready to Take Action?
            </h2>

            <p className="text-white/80 text-lg mb-10">
              Whether you choose to donate, volunteer, partner, or advocate —
              your contribution matters.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/donate" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-ytm-blue rounded-full font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-105">
                <Heart className="w-5 h-5" />
                Donate Now
              </Link>

              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-ytm-blue transition-all duration-300">
                <Mail className="w-5 h-5" />
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>*/}
    </>
  )
}