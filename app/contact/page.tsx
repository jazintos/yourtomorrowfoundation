'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Mail, MapPin, Phone, Send, Clock, CheckCircle2, Star, ArrowRight,
  Heart, Globe, User, MessageSquare
} from 'lucide-react'
import Link from 'next/link'

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import SEO from '@/components/SEO'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

const offices = [
  {
    name: 'Abuja HQ',
    address: 'Central Business District, Abuja, Federal Capital Territory, Nigeria',
    phone: '+234 (0) XXX XXX XXXX',
    email: 'abuja@yourtomorrowfoundation.org',
    hours: 'Mon - Fri: 9:00 AM - 5:00 PM',
    type: 'Headquarters',
  },
  {
    name: 'Lagos Office',
    address: 'Victoria Island, Lagos State, Nigeria',
    phone: '+234 (0) XXX XXX XXXX',
    email: 'lagos@yourtomorrowfoundation.org',
    hours: 'Mon - Fri: 9:00 AM - 5:00 PM',
    type: 'Regional Office',
  },
]

const socialLinks = [
  { icon: FaFacebook, label: 'Facebook', handle: '@yourtomorrowfoundation', href: '#' },
  { icon: FaTwitter, label: 'Twitter', handle: '@yourtomorrowfoundation', href: '#' },
  { icon: FaInstagram, label: 'Instagram', handle: '@yourtomorrowfoundation', href: '#' },
  { icon: FaLinkedin, label: 'LinkedIn', handle: 'Your Tomorrow Foundation', href: '#' },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [isNewsletterSubscribed, setIsNewsletterSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsNewsletterSubscribed(true)
    setNewsletterEmail('')
    setTimeout(() => setIsNewsletterSubscribed(false), 5000)
  }

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with Your Tomorrow Foundation. Visit our Abuja HQ or Lagos Office, send us a message, or subscribe to our newsletter."
      />

      {/* ===== HERO ===== */}
      <section className="relative pt-32 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ytm-teal/10 via-white to-ytm-lavender dark:from-ytm-dark dark:via-ytm-dark dark:to-ytm-teal/10" />
        <div className="relative z-10 section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ytm-teal/10 text-ytm-teal text-sm font-medium mb-6">
              <MessageSquare className="w-4 h-4" />
              Get in Touch
            </div>

            <h1 className="text-5xl lg:text-7xl font-outfit font-black text-ytm-blue dark:text-white leading-tight mb-6">
              Let's <span className="text-gradient">Connect.</span>
            </h1>

            <p className="text-xl text-ytm-dark/70 dark:text-white/70 max-w-2xl leading-relaxed">
              Whether you have questions, want to partner, or simply want to learn more
              about our work — we'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== CONTACT FORM & INFO ===== */}
      <section className="py-20 lg:py-32 bg-white dark:bg-ytm-dark/50">
        <div className="section-padding">
        <div className="grid lg:grid-cols-5 gap-16 xl:gap-20">
            {/* Form */}
            <motion.div {...fadeInUp} className="lg:col-span-3">
              <div className="glass-card p-8">
                <h2 className="text-2xl font-outfit font-bold text-ytm-blue dark:text-white mb-2">
                  Send Us a Message
                </h2>

                <p className="text-ytm-dark/60 dark:text-white/50 mb-8">
                  Fill out the form below and we'll get back to you within 48 hours.
                </p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-ytm-green/20 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-ytm-green" />
                    </div>

                    <h3 className="text-xl font-outfit font-bold text-ytm-blue dark:text-white mb-2">
                      Message Sent!
                    </h3>

                    <p className="text-ytm-dark/60 dark:text-white/50">
                      Thank you for reaching out. We'll respond shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-ytm-dark dark:text-white mb-2">
                          Full Name
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-ytm-dark/40" />
                          <input
                            type="text"
                            id="name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-ytm-lavender dark:border-white/10 bg-white dark:bg-white/5 text-ytm-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-ytm-blue transition-all"
                            placeholder="Your name"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-ytm-dark dark:text-white mb-2">
                          Email Address
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-ytm-dark/40" />
                          <input
                            type="email"
                            id="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-ytm-lavender dark:border-white/10 bg-white dark:bg-white/5 text-ytm-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-ytm-blue transition-all"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-ytm-dark dark:text-white mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-ytm-lavender dark:border-white/10 bg-white dark:bg-white/5 text-ytm-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-ytm-blue transition-all"
                        placeholder="How can we help?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-ytm-dark dark:text-white mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-ytm-lavender dark:border-white/10 bg-white dark:bg-white/5 text-ytm-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-ytm-blue transition-all resize-none"
                        placeholder="Tell us more about your enquiry..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full pill-btn-primary justify-center"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ytm-blue/10 text-ytm-blue text-sm font-medium mb-4">
                  <MapPin className="w-4 h-4" />
                  Contact Information
                </div>

                <h2 className="text-3xl font-outfit font-bold text-ytm-blue dark:text-white mb-2">
                  Visit or Reach Us
                </h2>

                <p className="text-ytm-dark/60 dark:text-white/50">
                  We are available to answer questions, discuss partnerships, and support your involvement with the Foundation.
                </p>
              </div>
              {/* Offices */}
              {offices.map((office) => (
                <div key={office.name} className="glass-card p-8 hover:shadow-xl transition-all duration-300">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ytm-blue text-white text-xs font-medium mb-4">
                    <Star className="w-3 h-3" />
                    {office.type}
                  </div>

                  <h3 className="text-2xl font-outfit font-bold text-ytm-blue dark:text-white mb-5">
                    {office.name}
                  </h3>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-ytm-blue flex-shrink-0 mt-0.5" />
                      <span className="text-ytm-dark/70 dark:text-white/60 text-sm">{office.address}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-ytm-blue flex-shrink-0" />
                      <a href={`tel:${office.phone}`} className="text-ytm-dark/70 dark:text-white/60 text-sm hover:text-ytm-blue transition-colors">
                        {office.phone}
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-ytm-blue flex-shrink-0" />
                      <a href={`mailto:${office.email}`} className="text-ytm-dark/70 dark:text-white/60 text-sm hover:text-ytm-blue transition-colors">
                        {office.email}
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-ytm-blue flex-shrink-0" />
                      <span className="text-ytm-dark/70 dark:text-white/60 text-sm">{office.hours}</span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Social Media */}
              <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-5 h-5 text-ytm-blue" />
                <h3 className="text-xl font-outfit font-bold text-ytm-blue dark:text-white">
                  Follow Us
                </h3>
              </div>

                <div className="space-y-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-ytm-lavender/50 dark:hover:bg-white/5 transition-colors"
                    >
                      <social.icon className="w-5 h-5 text-ytm-blue" />
                      <div>
                        <div className="text-sm font-medium text-ytm-blue dark:text-white">{social.label}</div>
                        <div className="text-xs text-ytm-dark/50 dark:text-white/40">{social.handle}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== NEWSLETTER ===== */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-ytm-blue to-ytm-green">
        <div className="section-padding">
          <motion.div
            {...fadeInUp}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-white" />
            </div>

            <h2 className="text-4xl font-outfit font-bold text-white mb-4">
              Stay in the Know
            </h2>

            <p className="text-white/80 mb-8">
              Subscribe to our newsletter for the latest updates, impact stories,
              and opportunities to get involved.
            </p>

            {isNewsletterSubscribed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card p-8 inline-block"
              >
                <CheckCircle2 className="w-12 h-12 text-ytm-green mx-auto mb-3" />
                <p className="text-ytm-blue dark:text-white font-medium">You're subscribed!</p>
                <p className="text-ytm-dark/60 dark:text-white/50 text-sm">Welcome to the YTF community.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-grow px-6 py-4 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                />

                <button
                  type="submit"
                  className="px-8 py-4 bg-white text-ytm-blue rounded-full font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  Subscribe
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            )}

            <p className="text-white/60 text-sm mt-4 flex items-center justify-center gap-2">
              <Globe className="w-4 h-4" />
              Join 1,000+ subscribers receiving monthly updates
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== MAP PLACEHOLDER / CTA ===== */}
      <section className="py-20 lg:py-32 bg-white dark:bg-ytm-dark/50">
        <div className="section-padding">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-outfit font-bold text-ytm-blue dark:text-white mb-6">
              Ready to Make an Impact?
            </h2>

            <p className="text-ytm-dark/70 dark:text-white/60 mb-8">
              Your support, whether through donation, volunteering, or partnership,
              directly transforms lives across Nigeria.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/donate" className="pill-btn-primary">
                <Heart className="w-5 h-5 mr-2" />
                Donate Now
              </Link>

              <Link href="/get-involved" className="pill-btn-outline">
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