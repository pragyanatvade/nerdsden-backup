import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import CardList from '../components/CardList'
import Card from '../components/Card'

const Tag = ({ data, pageContext }) => {
  const {
    data: { totalCount, edges: posts },
  } = data
  const { tag } = pageContext
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with "${tag}"`

  return (
    <Layout>
      <Container>
        <PageTitle small>{tagHeader}</PageTitle>
        <CardList>
          {posts.map(edge => {
            const {
              node: { id, fields, frontmatter, excerpt },
            } = edge
            const post = { id, ...fields, ...frontmatter, excerpt }
            return <Card {...post} key={post.id} />
          })}
        </CardList>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($tag: String) {
    data: allMarkdownRemark(filter: { fields: { _tags: { in: [$tag] } } }) {
      totalCount
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

// export const query = graphql`
//   query {
//     data: allMarkdownRemark(
//       filter: { fields: { source: { eq: "posts" }, slug: { ne: null } } }
//       sort: { fields: [fields___date], order: DESC }
//     ) {
//       group(field: fields____tags) {
//         fieldValue
//         totalCount
//       }
//     }
//   }
// `

export default Tag
