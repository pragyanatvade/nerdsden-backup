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
} from '../../../content/meta/config'

const Head = ({ post = {}, page = {} }) => {
  let title = siteTitle
  let description = siteDescription
  let image = siteImage
  let path = siteUrl

  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: siteUrl,
      name: shortSiteTitle,
      alternateName: siteTitle,
    },
  ]

  if (Object.keys(post).length > 0) {
    const prefix = post.metaTitle || post.title
    title = `${prefix} - ${shortSiteTitle}`
    description = post.metaDescription || post.summary || post.excerpt
    path = `${siteUrl}/${post.slug}`
    // image = {
    //   url: '',
    //   width: '',
    //   height: '',
    // }
    schemaOrgJSONLD.push(
      {
        '@context': 'http://schema.org',
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
        '@context': 'http://schema.org',
        '@type': 'BlogPosting',
        url: path,
        name: title,
        alternateName: siteTitle || '',
        headline: title,
        image: {
          '@type': 'ImageObject',
          ...image,
        },
        author: {
          '@type': 'Person',
          ...author,
        },
        publisher: {
          '@type': 'Organization',
          ...publisher,
        },
        datePublished: post.date,
        dateModified: post.modified || post.date,
        mainEntityOfPage: path,
      }
    )
  }
  if (Object.keys(page).length > 0) {
    const prefix = page.metaTitle || page.title
    title = `${prefix} - ${shortSiteTitle}`
    description = page.metaDescription || page.summary || page.excerpt
    path = `${siteUrl}/${post.slug}`
    // image = {
    //   url: '',
    //   width: '',
    //   height: '',
    // }
    schemaOrgJSONLD.push({
      '@context': 'http://schema.org',
      '@type': 'WebPage',
      url: path,
      name: title,
    })
  }

  return (
    <Helmet
      htmlAttributes={{
        lang: siteLanguage,
        prefix: 'og: http://ogp.me/ns#',
      }}
    >
      {/* General Tags */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href={favicon} />
      <title>{title}</title>
      <meta name="image" content={image.src} />
      <meta name="description" content={description} />

      {/* Schema.org tags */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      {/* OpenGraph tags */}
    </Helmet>
  )
}

export default Head
