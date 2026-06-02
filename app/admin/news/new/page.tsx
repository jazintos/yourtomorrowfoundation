'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import RichTextEditor from '@/components/admin/RichTextEditor'
import { ArrowLeft, Save } from 'lucide-react'
import Link from 'next/link'

export default function NewArticlePage() {
  const router = useRouter()

  const [loading, setLoading] = useState(false)

  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('Education')
  const [author, setAuthor] = useState('YTF Communications')
  const [excerpt, setExcerpt] = useState('')
  const [content, setContent] = useState('')
  const [featured, setFeatured] = useState(false)
  const [published, setPublished] = useState(true)
  const [imageFile, setImageFile] = useState<File | null>(null)

  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
  }

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault()

    try {
      setLoading(true)

      let imageUrl = ''

      // Upload Image
      if (imageFile) {
        const fileName = `${Date.now()}-${imageFile.name}`

        const { error } = await supabase.storage
          .from('news-images')
          .upload(fileName, imageFile)

        if (error) throw error

        const { data } = supabase.storage
          .from('news-images')
          .getPublicUrl(fileName)

        imageUrl = data.publicUrl
      }

      const slug = generateSlug(title)

      const { error } = await supabase
        .from('news')
        .insert([
          {
            title,
            slug,
            excerpt,
            content,
            image: imageUrl,
            category,
            author,
            featured,
            published,
            date: new Date().toLocaleDateString(
              'en-US',
              {
                month: 'long',
                year: 'numeric',
              }
            ),
          },
        ])

      if (error) throw error

      alert('Article created successfully!')

      router.push('/admin/news')
    } catch (err: any) {
        console.error('FULL ERROR:', err)
      
        alert(
          JSON.stringify(err, null, 2)
        )
      } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-5xl">

      <div className="mb-8">

        <Link
          href="/admin/news"
          className="inline-flex items-center text-ytm-blue"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Articles
        </Link>

      </div>

      <h1 className="text-4xl font-bold text-ytm-blue mb-8">
        Create New Article
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-8"
      >

        <div className="glass-card p-8">

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="block mb-2 font-medium">
                Title
              </label>

              <input
                type="text"
                required
                value={title}
                onChange={(e) =>
                  setTitle(e.target.value)
                }
                className="w-full border rounded-xl p-3"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Category
              </label>

              <select
                value={category}
                onChange={(e) =>
                  setCategory(e.target.value)
                }
                className="w-full border rounded-xl p-3"
              >
                <option>Education</option>
                <option>Health</option>
                <option>Welfare</option>
                <option>Prison Outreach</option>
                <option>Ramadan Outreach</option>
                <option>Partnerships</option>
                <option>Events</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Author
              </label>

              <input
                type="text"
                value={author}
                onChange={(e) =>
                  setAuthor(e.target.value)
                }
                className="w-full border rounded-xl p-3"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Featured Image
              </label>

              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setImageFile(
                    e.target.files?.[0] || null
                  )
                }
                className="w-full border rounded-xl p-3"
              />
            </div>

          </div>

          <div className="mt-6">
            <label className="block mb-2 font-medium">
              Excerpt
            </label>

            <textarea
              rows={4}
              value={excerpt}
              onChange={(e) =>
                setExcerpt(e.target.value)
              }
              className="w-full border rounded-xl p-3"
            />
          </div>

        </div>

        <div className="glass-card p-8">

          <label className="block mb-4 font-medium">
            Article Content
          </label>

          <RichTextEditor
            value={content}
            onChange={setContent}
          />

        </div>

        <div className="glass-card p-8">

          <div className="space-y-4">

            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={featured}
                onChange={(e) =>
                  setFeatured(e.target.checked)
                }
              />

              Featured Article
            </label>

            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={published}
                onChange={(e) =>
                  setPublished(e.target.checked)
                }
              />

              Publish Immediately
            </label>

          </div>

        </div>

        <button
          type="submit"
          disabled={loading}
          className="pill-btn-primary"
        >
          <Save className="w-5 h-5 mr-2" />

          {loading
            ? 'Saving...'
            : 'Save Article'}
        </button>

      </form>

    </div>
  )
}