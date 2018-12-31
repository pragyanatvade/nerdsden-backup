import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Container from "../components/Container";
import PageTitle from "../components/PageTitle";

const Page = ({ data }) => {
  return (
    <Layout>
      <Container>
        <PageTitle>Page Test</PageTitle>
      </Container>
    </Layout>
  );
};

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
            tags
          }
          frontmatter {
            title
            author
            summary
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
`;
export default Page;
