import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/Layout'
import Container from '../../components/Container'
import PageTitle from '../../components/PageTitle'
import CardList from '../../components/CardList'
import Card from '../../components/Card'

const Tag = ({ data, pageContext }) => {
  const {
    data: { totalCount, edges: posts },
  } = data
  const { tag } = pageContext
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with "${tag}"`

  return <div>AMP TAGS</div>
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

export default Tag
