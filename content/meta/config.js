module.exports = {
  /* Website */
  siteTitle: `Nerd's Den - Memoirs Of A Skeptic Nerd`,
  shortSiteTitle: `Nerd's Den`,
  siteDescription: `Design Reliable, Scalable, and Flexible Softwares The Right Way`,
  siteUrl: `https://nerds-den.com`,
  pathPrefix: ``,
  siteImage: ``,
  siteLanguage: `en`,

  /* Website Info */
  headerTitle: `Nerd's Den`,
  headerSubTitle: `Memoirs Of A Skeptic Nerd`,

  /* Author */
  authorName: `Pragyan Tripathi`,
  authorTwitterHandle: `pntripathi9417`,
  authorSocialLinks: [
    { name: 'github', url: 'https://github.com/pntripathi9417' },
    { name: 'twitter', url: 'https://twitter.com/pntripathi9417' },
    { name: 'facebook', url: 'http://facebook.com/pntripathi9417' },
  ],

  /* manifest.json */
  manifestName: `Nerd's Den - Memoirs Of A Skeptic Nerd`,
  manifestShortName: `Nerd's Den`,
  manifestStarUrl: `/index.html`,
  manifestBackgroundColor: 'white',
  manifestThemeColor: '#666',
  manifestDisplay: 'standalone',

  /* Analytics */
  google: {
    appId: process.env.GOOGLE_ANALYTICS_ID || ``,
  },
  facebook: {
    appId: process.env.FB_APP_ID || ``,
  },
}
