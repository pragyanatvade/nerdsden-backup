import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Container from "../components/Container";
import CardList from "../components/CardList";
import Card from "../components/Card";

const Index = ({ data, pageContext }) => {
  const posts = data.posts.edges;
  const featuredPost = posts[0].node;
  // const { currentPage } = pageContext;
  // const isFirstPage = currentPage === 1;

  console.log("posts", featuredPost);

  return (
    <Layout>
      <Container>
        <CardList>
          <Card {...featuredPost} featured />
        </CardList>
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
