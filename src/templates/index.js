import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Container from '../components/Container'
import CardList from '../components/CardList'
import Card from '../components/Card'

const Index = ({ data, pageContext }) => {
  console.log('posts', data)
  const posts = data.posts.edges
  const {
    node: { id, excerpt, fields, frontmatter },
  } = posts[0]
  const featuredPost = { id, ...fields, ...frontmatter, excerpt }

  return (
    <Layout>
      <Container>
        <CardList>
          <Card {...featuredPost} featured />
        </CardList>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    posts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//posts/[0-9]+.*_/" } }
      sort: { fields: [fields___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
            date(formatString: "MMMM DD, YYYY")
          }
          frontmatter {
            title
            author
            summary
            published
            modified
            cover {
              children {
                ... on ImageSharp {
                  fluid(maxWidth: 800, maxHeight: 360) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export default Index
