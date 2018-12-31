import React from 'react'

import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import Layout from '../components/Layout'

const Contact = ({ data }) => {
  const {
    data: { edges: posts },
  } = data
  const tags = {}
  posts.forEach(edge => {
    const {
      node: { id, excerpt, fields, frontmatter },
    } = edge
    const post = { id, ...fields, ...frontmatter, excerpt }
    const item = {
      id,
      title: post.title,
      slug: post.slug,
    }
    post.tags.forEach(tag => {
      const { title } = tag
      if (tags[id]) {
        tags[title].push(item)
      } else {
        tags[title] = [item]
      }
    })
  })

  return (
    <Layout>
      <Container>
        <PageTitle>Tags</PageTitle>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query {
    data: allMarkdownRemark(
      filter: { fields: { source: { eq: "posts" }, slug: { ne: null } } }
      sort: { fields: [fields___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
            date
            tags {
              id
              title
              slug
            }
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`

export default Contact
