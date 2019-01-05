module.exports = {
  /* Website */
  siteTitle: `Nerd's Den | Memoirs Of A Skeptic Nerd`,
  shortSiteTitle: `Nerd's Den`,
  siteDescription: `Official blog for Vadelabs. It discusses in-depth about scalable, reliable, and flexible software design and software architecture practices. Check out our free articles, tutorials, courses, and toolkits for more ways to learn about software development.`,
  siteUrl: `https://nerds-den.com`,
  pathPrefix: `/`,
  siteImage: {
    '@type': 'ImageObject',
    url: `https://nerds-den.com/logos/nerds-den.png`,
    width: 820,
    height: 312
  },
  siteLanguage: `en`,

  /* Website Info */
  headerTitle: `Nerd's Den`,
  headerSubTitle: `Memoirs Of A Skeptic Nerd`,
  publisher: {
    '@type': 'Organization',
    name: `Vadelabs, Inc.`,
    url: 'https://vadelabs.com',
    logo: {
      '@type': 'ImageObject',
      url: `https://nerds-den.com/logos/nerds-den.png`
    }
  },

  /* Author */
  author: {
    '@type': 'Person',
    name: `Pragyan Tripathi`,
    url: `https://nerds-den.com/about/`
  },
  authorTwitterHandle: `pntripathi9417`,
  authorSocialLinks: [
    { name: 'github', url: 'https://github.com/pntripathi9417' },
    { name: 'twitter', url: 'https://twitter.com/pntripathi9417' },
    { name: 'facebook', url: 'https://facebook.com/pntripathi9417' },
  ],

  /* manifest.json */
  manifestName: `Nerd's Den - Memoirs Of A Skeptic Nerd`,
  manifestShortName: `Nerd's Den`,
  manifestStarUrl: `/`,
  manifestBackgroundColor: 'white',
  manifestThemeColor: '#666',
  manifestDisplay: 'standalone',

  /* Analytics */
  google: {
    trackingId: process.env.GOOGLE_ANALYTICS_ID || `UA-55436366-2`,
  },
  facebook: {
    appId: process.env.FB_APP_ID || `2232544823425455`,
  },

  /* Search */

  /* Feed */
  postsPerHomePage: 10,
  postsPerPage: 10,
}
