'use client'

import Head from 'next/head'

interface SEOProps {
title: string
description: string
url?: string
image?: string
}

export default function SEO({
title,
description,
url = 'https://yourtomorrowfoundation.org',
image = '/images/og-image.jpg',
}: SEOProps) {
return ( <Head>
{/* Basic Meta */} <title>{title}</title> <meta name="description" content={description} />

```
  {/* Open Graph */}
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={url} />
  <meta property="og:image" content={image} />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={image} />
</Head>


)
}
