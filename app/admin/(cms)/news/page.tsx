'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'
import {
  Plus,
  Pencil,
  Trash2,
  Newspaper,
} from 'lucide-react'

type NewsItem = {
  id: string
  title: string
  category: string
  image: string
  published: boolean
  created_at: string
}

export default function AdminNewsPage() {
  const [articles, setArticles] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)

  const fetchArticles = async () => {
    const { data, error } = await supabase
      .from('news')
      .select('*')
      .order('created_at', { ascending: false })

    if (!error && data) {
      setArticles(data)
    }

    setLoading(false)
  }

  useEffect(() => {
    fetchArticles()
  }, [])

  const deleteArticle = async (id: string) => {
    const confirmed = window.confirm(
      'Delete this article permanently?'
    )

    if (!confirmed) return

    await supabase
      .from('news')
      .delete()
      .eq('id', id)

    fetchArticles()
  }

  return (
    <div>
                <div className="p-8 lg:pt-28">
      <div className="flex justify-between items-center mb-8">

        <div>
          <h1 className="text-4xl font-bold text-ytm-blue">
            News Articles
          </h1>

          <p className="text-gray-500 mt-2">
            Manage all website news and stories
          </p>
        </div>

        <Link
          href="/admin/news/new"
          className="pill-btn-primary"
        >
          <Plus className="w-5 h-5 mr-2" />
          New Article
        </Link>

      </div> </div>

      <div className="glass-card overflow-hidden">

        {loading ? (
          <div className="p-10 text-center">
            Loading...
          </div>
        ) : articles.length === 0 ? (
          <div className="p-16 text-center">

            <Newspaper className="w-16 h-16 mx-auto mb-4 text-gray-400" />

            <h2 className="text-2xl font-bold mb-2">
              No Articles Yet
            </h2>

            <p className="text-gray-500">
              Create your first story.
            </p>

          </div>
        ) : (
          <table className="w-full">

            <thead className="bg-slate-100">

              <tr>
                <th className="p-4 text-left">Image</th>
                <th className="p-4 text-left">Title</th>
                <th className="p-4 text-left">Category</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-left">Actions</th>
              </tr>

            </thead>

            <tbody>

              {articles.map((article) => (

                <tr
                  key={article.id}
                  className="border-t"
                >

                  <td className="p-4">
                  {article.image ? (
                    <img
                        src={article.image}
                        alt={article.title}
                        className="w-20 h-14 object-cover rounded-lg"
                    />
                    ) : (
                    <div className="w-20 h-14 rounded-lg bg-ytm-blue/5 border border-ytm-blue/10 flex items-center justify-center text-xs font-medium text-ytm-blue text-center px-2">
                        No Image
                    </div>
                    )}
                  </td>

                  <td className="p-4 font-medium">
                    {article.title}
                  </td>

                  <td className="p-4">
                    {article.category}
                  </td>

                  <td className="p-4">
                    {article.published ? (
                      <span className="text-green-600">
                        Published
                      </span>
                    ) : (
                      <span className="text-orange-600">
                        Draft
                      </span>
                    )}
                  </td>

                  <td className="p-4">

                    <div className="flex gap-2">

                      <Link
                        href={`/admin/news/edit/${article.id}`}
                        className="p-2 rounded-lg bg-blue-100"
                      >
                        <Pencil className="w-4 h-4" />
                      </Link>

                      <button
                        onClick={() =>
                          deleteArticle(article.id)
                        }
                        className="p-2 rounded-lg bg-red-100"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>
        )}

      </div>

    </div>
  )
}