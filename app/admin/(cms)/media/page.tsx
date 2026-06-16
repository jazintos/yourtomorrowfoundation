'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function MediaLibraryPage() {
  const [images, setImages] = useState<any[]>([])

  useEffect(() => {
    fetchImages()
  }, [])

  const fetchImages = async () => {
    const { data } =
      await supabase.storage
        .from('news-images')
        .list('', {
          limit: 100,
        })

    setImages(data || [])
  }

  const copyUrl = (fileName: string) => {
    const { data } =
      supabase.storage
        .from('news-images')
        .getPublicUrl(fileName)

    navigator.clipboard.writeText(
      data.publicUrl
    )

    alert('URL copied!')
  }

  return (
    <div className="p-8 pt-24">

      <h1 className="text-4xl font-bold text-ytm-blue mb-8">
        Media Library
      </h1>

      <div className="grid md:grid-cols-4 gap-6">

        {images.map((image) => {

          const { data } =
            supabase.storage
              .from('news-images')
              .getPublicUrl(image.name)

          return (

            <div
              key={image.id}
              className="glass-card p-4"
            >

              <img
                src={data.publicUrl}
                alt=""
                className="w-full h-48 object-cover rounded-xl mb-4"
              />

              <button
                onClick={() =>
                  copyUrl(image.name)
                }
                className="pill-btn-outline w-full"
              >
                Copy URL
              </button>

            </div>

          )
        })}

      </div>

    </div>
  )
}