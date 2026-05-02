'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Newspaper, BookOpen, Calendar, Image, ArrowRight,
  Clock, User, Tag, X, ChevronLeft, ChevronRight
} from 'lucide-react'
import Link from 'next/link'
import SEO from '@/components/SEO'


const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

type TabType = 'news' | 'publications' | 'events' | 'gallery'

const tabs: { id: TabType; label: string; icon: typeof Newspaper }[] = [
  { id: 'news', label: 'News', icon: Newspaper },
  { id: 'publications', label: 'Publications', icon: BookOpen },
  { id: 'events', label: 'Events', icon: Calendar },
  { id: 'gallery', label: 'Gallery', icon: Image },
]

const newsItems = [
  {
    title: 'YTF Conducts Successful Prison Outreach at Kirikiri',
    excerpt: 'Our team visited Kirikiri Female Prison, distributing essential supplies including sanitary pads, toiletries, food items, and water to support the welfare of inmates.',
    date: 'February 2026',
    author: 'YTF Communications',
    category: 'Welfare',
    image: '/images/IMG-20260226-WA0000.jpg',
  },
  {
    title: 'Medical Outreach Programme Reaches 500+ Beneficiaries',
    excerpt: 'Our 2026 medical outreach provided free health screenings, medications, and health education to over 500 individuals in underserved communities.',
    date: 'January 2026',
    author: 'Programme Team',
    category: 'Health',
    image: '/images/medical_outreach.jpg',
  },
  {
    title: 'School Outreach 2026: Equipping Students for Success',
    excerpt: 'The annual school outreach programme delivered learning materials, uniforms, and scholarships to students across multiple schools in Lagos and Abuja.',
    date: 'January 2026',
    author: 'Education Team',
    category: 'Education',
    image: '/images/school_kids.jpg',
  },
  {
    title: 'Your Tomorrow Foundation Launches Ramadan Feeding Programme',
    excerpt: 'Our annual Ramadan outreach provided nutritious meals and food packages to thousands of fasting individuals and families across Nigeria.',
    date: 'March 2025',
    author: 'YTF Communications',
    category: 'Nutrition',
    image: '/images/7aee4146-5c29-49b4-8a7a-ad935123897c.jpg',
  },
]

const publications = [
  {
    title: 'Annual Impact Report 2025',
    desc: 'A comprehensive overview of our programmes, achievements, and financial stewardship throughout 2025.',
    type: 'Report',
    date: 'December 2025',
  },
  {
    title: 'Community Needs Assessment: Lagos State',
    desc: 'Research findings on the most pressing needs in Lagos communities and our targeted response strategy.',
    type: 'Research',
    date: 'November 2025',
  },
  {
    title: 'Youth Skills Training Impact Study',
    desc: 'An evaluation of the effectiveness of our vocational training programmes on youth employment outcomes.',
    type: 'Study',
    date: 'October 2025',
  },
  {
    title: 'Prison Welfare Policy Brief',
    desc: 'Recommendations for improving welfare standards in Nigerian correctional facilities based on our outreach experience.',
    type: 'Policy',
    date: 'September 2025',
  },
]

const events = [
  {
    title: 'Annual Fundraising Gala 2026',
    date: 'June 15, 2026',
    location: 'Abuja',
    desc: 'Our flagship fundraising event bringing together donors, partners, and community leaders.',
    status: 'upcoming',
  },
  {
    title: 'Youth Skills Graduation Ceremony',
    date: 'May 20, 2026',
    location: 'Lagos',
    desc: 'Celebrating the achievements of our latest cohort of vocational training graduates.',
    status: 'upcoming',
  },
  {
    title: 'Community Health Fair',
    date: 'April 10, 2026',
    location: 'Abuja',
    desc: 'Free health screenings, vaccinations, and health education for the community.',
    status: 'upcoming',
  },
  {
    title: 'Back-to-School Drive',
    date: 'August 2026',
    location: 'Multiple Locations',
    desc: 'Distribution of school supplies, uniforms, and learning materials to students.',
    status: 'upcoming',
  },
]

const galleryImages = [
  { src: '/images/IMG-20260226-WA0000.jpg', title: 'Prison Outreach 2026 - Kirikiri', category: 'Prison Outreach' },
  { src: '/images/IMG-20260226-WA0001.jpg', title: 'Team at Kirikiri Female Prison', category: 'Prison Outreach' },
  { src: '/images/IMG-20260226-WA0002.jpg', title: 'Prison Outreach Activities', category: 'Prison Outreach' },
  { src: '/images/1e0aebc4-f999-467b-af96-66bc180a6d83.jpg', title: 'Supplies Distribution', category: 'Prison Outreach' },
  { src: '/images/3abfe31b-3f8b-4fb8-8502-7292ff3fe233.jpg', title: 'Donations at Kirikiri', category: 'Prison Outreach' },
  { src: '/images/7aee4146-5c29-49b4-8a7a-ad935123897c.jpg', title: 'Community Support', category: 'Community' },
  { src: '/images/7cdc1347-0dd5-4c71-af78-8cd68fed219e.jpg', title: 'Welfare Distribution', category: 'Welfare' },
  { src: '/images/47760696-1e97-4339-8986-ba32825fe879.jpg', title: 'Team Activities', category: 'Team' },
  { src: '/images/67704541-d6fb-49d6-9dc9-1cb5c626c567.jpg', title: 'Field Work', category: 'Outreach' },
  { src: '/images/a798edd8-03e7-439a-90dd-eae2c96ca0ab.jpg', title: 'Community Engagement', category: 'Community' },
  { src: '/images/c35a2b64-9305-468d-9aff-b7158588ebac.jpg', title: 'Programme Delivery', category: 'Programmes' },
  { src: '/images/cb5191c4-68d0-4c28-8915-0cd52dd863b0.jpg', title: 'Impact in Action', category: 'Impact' },
]

export default function News() {
  const [activeTab, setActiveTab] = useState<TabType>('news')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  return (
    <>
      <SEO
        title="News & Stories"
        description="Stay updated with the latest news, publications, events, and gallery from Your Tomorrow Foundation."
      />

      {/* ===== HERO ===== */}
      <section className="relative pt-32 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ytm-purple/10 via-white to-ytm-lavender dark:from-ytm-dark dark:via-ytm-dark dark:to-ytm-purple/10" />
        <div className="relative z-10 section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ytm-purple/10 text-ytm-purple text-sm font-medium mb-6">
              <Newspaper className="w-4 h-4" />
              News & Stories
            </div>
            <h1 className="text-5xl lg:text-7xl font-outfit font-black text-ytm-dark dark:text-white leading-tight mb-6">
              Stories of <span className="text-gradient">Impact.</span>
            </h1>
            <p className="text-xl text-ytm-dark/70 dark:text-white/70 max-w-2xl leading-relaxed">
              Discover the latest updates, inspiring stories, and behind-the-scenes 
              glimpses of our work across Nigeria.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== TABS NAVIGATION ===== */}
      <div className="sticky top-20 z-30 bg-white/90 dark:bg-ytm-dark/90 backdrop-blur-xl border-b border-ytm-lavender dark:border-white/10">
        <div className="section-padding">
          <div className="flex gap-2 overflow-x-auto py-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-ytm-blue text-white shadow-lg'
                    : 'bg-ytm-lavender/50 text-ytm-dark/70 dark:text-white/70 hover:bg-ytm-lavender dark:hover:bg-white/10'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ===== TAB CONTENT ===== */}
      <section className="py-12 lg:py-20 bg-white dark:bg-ytm-dark/50 min-h-[500px]">
        <div className="section-padding">
          <AnimatePresence mode="wait">
            {/* NEWS TAB */}
            {activeTab === 'news' && (
              <motion.div
                key="news"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid md:grid-cols-2 gap-8"
              >
                {newsItems.map((item, i) => (
                  <motion.article
                    key={item.title}
                    {...fadeInUp}
                    transition={{ delay: i * 0.1 }}
                    className="glass-card overflow-hidden hover:shadow-2xl transition-all duration-500 group"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-ytm-blue text-white text-xs font-medium">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-ytm-dark/50 dark:text-white/50 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> {item.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <User className="w-3 h-3" /> {item.author}
                        </span>
                      </div>
                      <h3 className="text-xl font-outfit font-bold text-ytm-dark dark:text-white mb-3 group-hover:text-ytm-blue dark:group-hover:text-ytm-green transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-ytm-dark/60 dark:text-white/50 text-sm leading-relaxed mb-4">
                        {item.excerpt}
                      </p>
                      <button className="inline-flex items-center gap-2 text-ytm-blue dark:text-ytm-green text-sm font-medium hover:gap-3 transition-all">
                        Read More <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            )}

            {/* PUBLICATIONS TAB */}
            {activeTab === 'publications' && (
              <motion.div
                key="publications"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid md:grid-cols-2 gap-6"
              >
                {publications.map((pub, i) => (
                  <motion.div
                    key={pub.title}
                    {...fadeInUp}
                    transition={{ delay: i * 0.1 }}
                    className="glass-card p-6 hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ytm-green/10 text-ytm-green text-xs font-medium">
                        <BookOpen className="w-3 h-3" />
                        {pub.type}
                      </div>
                      <span className="text-sm text-ytm-dark/50 dark:text-white/50">{pub.date}</span>
                    </div>
                    <h3 className="text-lg font-outfit font-bold text-ytm-dark dark:text-white mb-2 group-hover:text-ytm-blue dark:group-hover:text-ytm-green transition-colors">
                      {pub.title}
                    </h3>
                    <p className="text-ytm-dark/60 dark:text-white/50 text-sm mb-4">{pub.desc}</p>
                    <button className="inline-flex items-center gap-2 text-ytm-blue dark:text-ytm-green text-sm font-medium hover:gap-3 transition-all">
                      Download PDF <ArrowRight className="w-4 h-4" />
                    </button>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* EVENTS TAB */}
            {activeTab === 'events' && (
              <motion.div
                key="events"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-6"
              >
                {events.map((event, i) => (
                  <motion.div
                    key={event.title}
                    {...fadeInUp}
                    transition={{ delay: i * 0.1 }}
                    className="glass-card p-6 hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row md:items-center gap-6"
                  >
                    <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-ytm-blue to-ytm-purple flex flex-col items-center justify-center text-white">
                      <span className="text-2xl font-outfit font-bold">
                        {new Date(event.date).getDate()}
                      </span>
                      <span className="text-xs uppercase">
                        {new Date(event.date).toLocaleString('default', { month: 'short' })}
                      </span>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-outfit font-bold text-ytm-dark dark:text-white">
                          {event.title}
                        </h3>
                        <span className="px-3 py-1 rounded-full bg-ytm-green/10 text-ytm-green text-xs font-medium capitalize">
                          {event.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-ytm-dark/50 dark:text-white/50 mb-2">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {event.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Tag className="w-3 h-3" /> {event.location}
                        </span>
                      </div>
                      <p className="text-ytm-dark/60 dark:text-white/50 text-sm">{event.desc}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <Link href="/contact" className="pill-btn-outline text-sm">
                        Register
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* GALLERY TAB */}
            {activeTab === 'gallery' && (
              <motion.div
                key="gallery"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {galleryImages.map((img, i) => (
                    <motion.div
                      key={img.src}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                      whileHover={{ scale: 1.03 }}
                      className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group shadow-lg"
                      onClick={() => setLightboxIndex(i)}
                    >
                      <img
                        src={img.src}
                        alt={img.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-white text-xs font-medium">{img.title}</p>
                        <p className="text-white/70 text-xs">{img.category}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
              onClick={() => setLightboxIndex(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <button
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                setLightboxIndex(lightboxIndex > 0 ? lightboxIndex - 1 : galleryImages.length - 1)
              }}
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
            <button
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                setLightboxIndex(lightboxIndex < galleryImages.length - 1 ? lightboxIndex + 1 : 0)
              }}
            >
              <ChevronRight className="w-10 h-10" />
            </button>
            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              src={galleryImages[lightboxIndex].src}
              alt={galleryImages[lightboxIndex].title}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
              <p className="text-white font-medium">{galleryImages[lightboxIndex].title}</p>
              <p className="text-white/60 text-sm">{lightboxIndex + 1} / {galleryImages.length}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== CTA ===== */}
      <section className="py-20 bg-gradient-to-r from-ytm-blue to-ytm-purple">
        <div className="section-padding">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-outfit font-bold text-white mb-6">
              Want to Stay Updated?
            </h2>
            <p className="text-white/80 mb-8">
              Subscribe to our newsletter for the latest news, stories, and event updates.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-ytm-blue rounded-full font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-105">
              Subscribe to Newsletter
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
