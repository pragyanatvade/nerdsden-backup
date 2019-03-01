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
    site {
      siteMetadata {
        siteUrl
        facebook {
          appId
        }
      }
    }
    page: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      fields {
        slug
        date(formatString: "MMMM DD, YYYY")
      }
      frontmatter {
        title
        author
        summary
        metaDescription
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
`

export default Page
