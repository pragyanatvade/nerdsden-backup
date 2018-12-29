import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

const Index = ({ data, pageContext }) => {
  const posts = data.posts.edges;
  const featuredPost = posts[0].node;
  const { currentPage } = pageContext;
  const isFirstPage = currentPage === 1;

  return <Layout />;
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
          fields {
            slug
            date(formatString: "MMMM DD, YYYY")
            tags
          }
          frontmatter {
            title
            tags
          }
        }
      }
    }
  }
`;

export default Index;
