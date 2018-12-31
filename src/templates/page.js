import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import PageBody from '../components/PageBody'

const Page = ({ data, pageContext }) => {
  const {
    page: { id, html, fields, frontmatter },
  } = data
  const page = { id, html, ...fields, ...frontmatter }

  return (
    <Layout page={page}>
      <Container>
        <PageTitle>{page.title}</PageTitle>
        <PageBody html={page.html} />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    page: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
        date
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
`

export default Page
