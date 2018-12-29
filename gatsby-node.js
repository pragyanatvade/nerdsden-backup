const _ = require('lodash')
const path = require('path')
const config = require('./content/meta/config')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const fileNode = getNode(node.parent)
    const source = fileNode.sourceInstanceName
    const path = createFilePath({ node, getNode })
    const {
      frontmatter: { tags },
    } = node
    if (tags) {
      const tagsArray = _.split(tags, ',')
      createNodeField({
        node,
        name: `tags`,
        value: tagsArray,
      })
    }

    if (source === 'posts') {
      const [date, slug] = _.map(_.split(path, '_'), p => _.trim(p, '/'))
      createNodeField({
        node,
        name: `slug`,
        value: slug,
      })
      createNodeField({
        node,
        name: `date`,
        value: date,
      })
      createNodeField({
        node,
        name: `source`,
        value: source,
      })
    }

    if (source === 'pages') {
      let [number, slug] = _.map(_.split(path, '_'), p => _.trim(p, '/'))
      if (!slug) slug = number
      createNodeField({
        node,
        name: `slug`,
        value: slug,
      })
      createNodeField({
        node,
        name: `source`,
        value: source,
      })
    }
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const loadPosts = new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark(
          filter: { fields: { source: { eq: "posts" }, slug: { ne: null } } }
          sort: { fields: [fields___date], order: DESC }
          limit: 100
        ) {
          edges {
            node {
              id
              fields {
                slug
                source
                date
              }
              frontmatter {
                title
                published
                summary
                tags
              }
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) reject(result.errors)
      const posts = result.data.allMarkdownRemark.edges
      const { postsPerHomePage, postsPerPage } = config
      const numPages = Math.ceil(
        posts.slice(postsPerHomePage).length / postsPerPage
      )
      // Create main home page
      createPage({
        path: `/`,
        component: path.resolve(`./src/templates/index.js`),
        context: {
          limit: postsPerHomePage,
          skip: 0,
          numPages: numPages + 1,
          currentPage: 1,
        },
      })
      resolve()
    })
  })
  const loadTags = new Promise((resolve, reject) => {
    resolve()
  })

  const loadPages = new Promise((resolve, reject) => {
    resolve()
  })
  return Promise.all([loadPosts, loadTags, loadPages])
}
