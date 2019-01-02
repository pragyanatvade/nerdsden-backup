import React from 'react'
import Helmet from 'react-helmet'

// import SEO from '../components/SEO'

import favicon from '../../../static/favicon.ico'
import {
  siteTitle,
  shortSiteTitle,
  siteLanguage,
  siteDescription,
  siteImage,
  siteUrl,
  author,
  publisher,
  authorTwitterHandle,
} from '../../../content/meta/config'

const Head = ({ post = {}, page = {} }) => {
  let title = siteTitle
  let description = siteDescription
  let image = siteImage
  let path = siteUrl

  const schemaOrgJSONLD = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      url: siteUrl,
      name: shortSiteTitle,
      alternateName: siteTitle,
    },
  ]

  if (Object.keys(post).length > 0) {
    const prefix = post.metaTitle || post.title
    title = `${prefix} | ${shortSiteTitle}`
    description = post.metaDescription || post.summary || post.excerpt
    path = `${siteUrl}${post.slug}/`

    // image = {
    //   url: '',
    //   width: '',
    //   height: '',
    // }
    schemaOrgJSONLD.push(
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: {
              '@id': siteUrl,
              name: siteTitle,
            },
          },
          {
            '@type': 'ListItem',
            position: 2,
            item: {
              '@id': path,
              name: title,
            },
          },
        ],
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        url: path,
        name: title,
        alternateName: siteTitle || '',
        headline: title,
        image,
        author,
        publisher,
        datePublished: post.date,
        dateModified: post.modified || post.date,
        mainEntityOfPage: path,
      }
    )
  }
  if (Object.keys(page).length > 0) {
    const prefix = page.metaTitle || page.title
    title = `${prefix} | ${shortSiteTitle}`
    description = page.metaDescription || page.summary || page.excerpt
    path = `${siteUrl}${page.slug}/`
    // image = {
    //   url: '',
    //   width: '',
    //   height: '',
    // }
    schemaOrgJSONLD.push({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      url: path,
      name: title,
    })
  }

  return (
    <Helmet
      htmlAttributes={{
        lang: siteLanguage,
        prefix: 'og: https://ogp.me/ns#',
      }}
    >
      {/* General Tags */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href={favicon} />
      <link rel="canonical" href={path} />

      <title>{title}</title>
      <meta name="image" content={image.src} />
      <meta name="description" content={description} />
      <link rel="preconnect" href="https://m.facebook.com" />
      <link rel="preconnect" href="https://staticxx.facebook.com" />
      <link rel="preconnect" href="https://connect.facebook.net" />

      {/* Schema.org tags */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      {/* OpenGraph tags */}
      <meta property="og:title" content={title} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={path} />
      <meta property="og:image" itemProp="image" content={image.url} />
      <meta property="og:image:width" content={image.width} />
      <meta property="og:image:height" content={image.height} />
      <meta property="og:description" content={description} />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={authorTwitterHandle || ''} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:image" content={image.url} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  )
}

export default Head
