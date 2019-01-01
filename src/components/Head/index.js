import React from 'react'
import Helmet from 'react-helmet'

import SEO from '../components/SEO'

import favicon from '../../../static/favicon.ico'
import {
  siteTitle,
  shortSiteTitle,
  siteLanguage,
  siteDescription,
  siteImage,
  siteUrl,
} from '../../../content/meta/config'

const Head = ({ post = {}, page = {} }) => {
  let title = siteTitle
  let description = siteDescription
  let image = siteImage
  let path = siteUrl

  if (post) {
    const prefix = post.metaTitle || post.title
    title = `${prefix} - ${shortSiteTitle}`
    description = post.metaDescription || post.summary || post.excerpt
  }
  if (page) {
    const prefix = page.metaTitle || page.title
    title = `${prefix} - ${shortSiteTitle}`
    description = page.metaDescription || page.summary || page.excerpt
  }

  return (
    <Helmet
      htmlAttributes={{
        lang: siteLanguage,
        prefix: 'og: http://ogp.me/ns#',
      }}
    >
      {/* General Tags */}
      <title>{title}</title>

      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href={favicon} />

      <SEO post={post} page={page} />
    </Helmet>
  )
}

export default Head
