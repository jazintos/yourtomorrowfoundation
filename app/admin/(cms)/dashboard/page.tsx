'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'
import {
  Newspaper,
  Star,
  FileText,
  PlusCircle,
} from 'lucide-react'

export default function DashboardPage() {
  const [articles, setArticles] = useState<any[]>([])

  useEffect(() => {
    fetchArticles()
  }, [])

  const fetchArticles = async () => {
    const { data } = await supabase
      .from('news')
      .select('*')
      .order('created_at', {
        ascending: false,
      })

    setArticles(data || [])
  }

  const totalArticles = articles.length

  const publishedArticles =
    articles.filter(
      (item) => item.published
    ).length

  const draftArticles =
    articles.filter(
      (item) => !item.published
    ).length

  const featuredArticles =
    articles.filter(
      (item) => item.featured
    ).length

  return (
    <div className="p-8 pt-24">

      <h1 className="text-4xl font-bold text-ytm-blue mb-8">
        Dashboard
      </h1>

      <div className="grid md:grid-cols-4 gap-6 mb-10">

        <div className="glass-card p-6">
          <Newspaper className="w-8 h-8 text-ytm-blue mb-3" />
          <div className="text-3xl font-bold">
            {totalArticles}
          </div>
          <p>Total Articles</p>
        </div>

        <div className="glass-card p-6">
          <FileText className="w-8 h-8 text-green-600 mb-3" />
          <div className="text-3xl font-bold">
            {publishedArticles}
          </div>
          <p>Published</p>
        </div>

        <div className="glass-card p-6">
          <FileText className="w-8 h-8 text-yellow-500 mb-3" />
          <div className="text-3xl font-bold">
            {draftArticles}
          </div>
          <p>Drafts</p>
        </div>

        <div className="glass-card p-6">
          <Star className="w-8 h-8 text-purple-600 mb-3" />
          <div className="text-3xl font-bold">
            {featuredArticles}
          </div>
          <p>Featured</p>
        </div>

      </div>

      <div className="glass-card p-6 mb-8">

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-2xl font-bold text-ytm-blue">
            Recent Articles
          </h2>

          <Link
            href="/admin/news/new"
            className="pill-btn-primary"
          >
            <PlusCircle className="w-5 h-5 mr-2" />
            New Article
          </Link>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>
              <tr className="border-b">
                <th className="text-left py-3">
                  Title
                </th>
                <th className="text-left py-3">
                  Category
                </th>
                <th className="text-left py-3">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>

              {articles
                .slice(0, 5)
                .map((article) => (

                  <tr
                    key={article.id}
                    className="border-b"
                  >
                    <td className="py-4">
                      {article.title}
                    </td>

                    <td>
                      {article.category}
                    </td>

                    <td>
                      {article.published
                        ? 'Published'
                        : 'Draft'}
                    </td>
                  </tr>

                ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  )
}