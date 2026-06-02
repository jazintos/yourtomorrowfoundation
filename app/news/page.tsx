'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Newspaper, ArrowRight } from 'lucide-react'
import SEO from '@/components/SEO'
import { supabase } from '@/lib/supabase'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

type NewsItem = {
  id?: string
  title: string
  slug: string
  excerpt: string
  content: string
  date: string
  author: string
  category: string
  image: string
  featured?: boolean
  published?: boolean
}

const staticNews: NewsItem[] = [
  {
    title: 'YTF Conducts Successful Prison Outreach at Kirikiri',
    slug: 'prison-outreach-kirikiri',
    excerpt:
      'Our team visited Kirikiri Female Prison, distributing essential supplies and emotional support.',
    content:
      'Your Tomorrow Foundation conducted a meaningful outreach programme at Kirikiri Female Prison where essential supplies including sanitary products, food items, toiletries, and emotional support materials were distributed to inmates. The initiative focused on restoring dignity, hope, and human connection.',
    date: 'February 2026',
    author: 'YTF Communications',
    category: 'Welfare',
    image: '/images/IMG-20260226-WA0000.jpg',
  },

  {
    title: 'Medical Outreach Programme Reaches 500+ Beneficiaries',
    slug: 'medical-outreach-programme',
    excerpt:
      'Our medical outreach programme provided screenings and treatment support.',
    content:
      'The 2026 medical outreach programme provided free health screenings, consultations, medications, and awareness education to underserved communities across Lagos. Over 500 beneficiaries were attended to by volunteer doctors and healthcare professionals.',
    date: 'January 2026',
    author: 'Programme Team',
    category: 'Health',
    image: '/images/medical_outreach.jpg',
  },

  {
    title: 'School Outreach 2026: Equipping Students for Success',
    slug: 'school-outreach-2026',
    excerpt:
      'Educational materials and mentorship were provided to students.',
    content:
      'Through our school outreach initiative, students received educational supplies, mentorship sessions, and inspirational talks designed to improve confidence and academic performance.',
    date: 'January 2026',
    author: 'Education Team',
    category: 'Education',
    image: '/images/school_kids.jpg',
  },

  {
    title: 'Ramadan Feeding Programme Launches Across Communities',
    slug: 'ramadan-feeding-programme',
    excerpt:
      'Hundreds of meals distributed during Ramadan support initiative.',
    content:
      'The Ramadan Feeding Programme was launched to support vulnerable families during the fasting season. Meals, food packs, and essential household items were distributed across multiple communities.',
    date: 'March 2026',
    author: 'Community Support Team',
    category: 'Community',
    image: '/images/forest_walk.jpg',
  },
]

export default function NewsPage() {
  const [dbNews, setDbNews] = useState<NewsItem[]>([])

  useEffect(() => {
    const fetchNews = async () => {
      const { data, error } = await supabase
        .from('news')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false })

      if (!error && data) {
        setDbNews(data as NewsItem[])
      }
    }

    fetchNews()
  }, [])

  const allNews: NewsItem[] = [
    ...dbNews.filter(
      (item) => item.published !== false
    ),
    ...staticNews,
  ]

  return (
    <>
      <SEO
        title="News & Stories"
        description="Latest news and stories from Your Tomorrow Foundation."
      />

      <section className="pt-32 pb-20">
        <div className="section-padding">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ytm-purple/10 text-ytm-purple text-sm font-medium mb-6">
            <Newspaper className="w-4 h-4" />
            News & Stories
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            Stories of Impact
          </h1>

          <p className="text-lg text-gray-500 max-w-2xl">
            Discover the latest updates, inspiring stories, and behind-the-scenes impact from Your Tomorrow Foundation.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="section-padding">
          <div className="grid md:grid-cols-2 gap-8">
            {allNews.map((item, i) => (
              <motion.article
                key={item.id || item.slug}
                {...fadeInUp}
                transition={{ delay: i * 0.08 }}
                className="glass-card overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
              <div className="relative h-64 overflow-hidden">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-slate-100 text-gray-500 font-medium">
                    No Image Available
                  </div>
                )}
              </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span>{item.date}</span>
                    <span>{item.author}</span>
                  </div>

                  <div className="mb-3 inline-block px-3 py-1 rounded-full bg-ytm-blue/10 text-ytm-blue text-xs font-medium">
                    {item.category}
                  </div>

                  <h2 className="text-2xl font-bold mb-3">
                    {item.title}
                  </h2>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {item.excerpt}
                  </p>

                  <Link
                    href={`/news/${item.slug}`}
                    className="inline-flex items-center gap-2 text-ytm-blue font-semibold hover:gap-3 transition-all"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}