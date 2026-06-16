'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import Link from 'next/link'
import { ArrowLeft, Save } from 'lucide-react'
import RichTextEditor from '@/components/admin/RichTextEditor'

export default function EditArticlePage() {
  const params = useParams()
  const router = useRouter()

  const [loading, setLoading] = useState(false)

  const [title, setTitle] = useState('')
  const [excerpt, setExcerpt] = useState('')
  const [content, setContent] = useState('')
  const [category, setCategory] = useState('')
  const [author, setAuthor] = useState('')
  const [featured, setFeatured] = useState(false)
  const [published, setPublished] = useState(true)

  const [image, setImage] = useState('')
  const [imageFile, setImageFile] = useState<File | null>(null)

  useEffect(() => {
    fetchArticle()
  }, [])

  const fetchArticle = async () => {
    const { data, error } = await supabase
      .from('news')
      .select('*')
      .eq('id', params.id)
      .single()

    if (error) {
      console.error(error)
      return
    }

    setTitle(data.title || '')
    setExcerpt(data.excerpt || '')
    setContent(data.content || '')
    setCategory(data.category || '')
    setAuthor(data.author || '')
    setFeatured(data.featured || false)
    setPublished(data.published ?? true)
    setImage(data.image || '')
  }

  const handleUpdate = async (
    e: React.FormEvent
  ) => {
    e.preventDefault()

    try {
      setLoading(true)

      let imageUrl = image

      if (imageFile) {
      
        const fileName =
          `${Date.now()}-${imageFile.name}`
      
        const { error: uploadError } =
          await supabase.storage
            .from('news-images')
            .upload(fileName, imageFile)
      
        if (uploadError)
          throw uploadError
      
        const { data } =
          supabase.storage
            .from('news-images')
            .getPublicUrl(fileName)
      
        imageUrl = data.publicUrl
      }

      const { error } = await supabase
        .from('news')
        .update({
          title,
          excerpt,
          content,
          category,
          author,
          featured,
          published,
          image: imageUrl,
        })
        .eq('id', params.id)

      if (error) throw error

      alert('Article updated successfully')

      router.push('/admin/news')
    } catch (err) {
      console.error(err)
      alert('Failed to update article')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-5xl p-8 pt-24">

      <Link
        href="/admin/news"
        className="inline-flex items-center text-ytm-blue mb-6"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Articles
      </Link>

      <h1 className="text-4xl font-bold text-ytm-blue mb-8">
        Edit Article
      </h1>

      <form
        onSubmit={handleUpdate}
        className="space-y-8"
      >

        <div className="glass-card p-8">

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="block mb-2">
                Title
              </label>

              <input
                value={title}
                onChange={(e) =>
                  setTitle(e.target.value)
                }
                className="w-full border rounded-xl p-3"
              />
            </div>

            <div>
              <label className="block mb-2">
                Category
              </label>

              <input
                value={category}
                onChange={(e) =>
                  setCategory(e.target.value)
                }
                className="w-full border rounded-xl p-3"
              />
            </div>

          </div>

          <div className="mt-6">

            <label className="block mb-2">
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

          <div className="mt-6">

            <label className="block mb-3 font-medium">
                Current Image
            </label>

            {image ? (
                <img
                src={image}
                alt={title}
                className="w-64 rounded-xl border"
                />
            ) : (
                <div className="w-64 h-40 border rounded-xl flex items-center justify-center text-gray-500">
                No Image Uploaded
                </div>
            )}

            </div>

            <div className="mt-6">

            <label className="block mb-2 font-medium">
                Replace Image
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

        <div className="glass-card p-8">

          <label className="block mb-4">
            Article Content
          </label>

          <RichTextEditor
            value={content}
            onChange={setContent}
          />

        </div>

        <div className="glass-card p-8 space-y-4">

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

            Published
          </label>

        </div>

        <button
          type="submit"
          disabled={loading}
          className="pill-btn-primary"
        >
          <Save className="w-5 h-5 mr-2" />

          {loading
            ? 'Updating...'
            : 'Update Article'}
        </button>

      </form>

    </div>
  )
}