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
      // HACK FOR AGGREGATE
      createNodeField({
        node,
        name: `_tags`,
        value: _.map(_.split(tags, ','), tag => _.trim(tag)),
      })

      const tagsArray = _.map(_.split(tags, ','), tag => {
        const title = _.trim(tag)
        const id = _.kebabCase(title)
        return {
          id,
          slug: id,
          title,
        }
      })
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

      // Create Each Individual Post
      _.forEach(posts, (edge, i) => {
        const {
          node: {
            fields: { slug },
          },
        } = edge
        createPage({
          path: slug,
          component: path.resolve(`./src/templates/post.js`),
          context: {
            slug,
          },
        })
      })

      resolve()
    })
  })
  const loadTags = new Promise((resolve, reject) => {
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
      let tagsArray = []
      _.forEach(posts, edge => {
        const {
          node: {
            frontmatter: { tags },
          },
        } = edge
        tagsArray = _.concat(tagsArray, _.split(tags, ','))
      })
      tagsArray = _.map(_.uniq(tagsArray), tag => _.trim(tag))
      _.forEach(tagsArray, tag => {
        createPage({
          path: `/tags/${_.kebabCase(tag)}/`,
          component: path.resolve(`./src/templates/tag.js`),
          context: {
            tag,
          },
        })
      })
      resolve()
    })
  })

  const loadPages = new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark(
          filter: { fields: { source: { eq: "pages" }, slug: { ne: null } } }
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
      const pages = result.data.allMarkdownRemark.edges
      _.forEach(pages, (edge, i) => {
        const {
          node: {
            fields: { slug },
          },
        } = edge

        createPage({
          path: slug,
          component: path.resolve(`./src/templates/page.js`),
          context: {
            slug,
          },
        })
      })
      resolve()
    })
  })
  return Promise.all([loadPosts, loadTags, loadPages])
}
