import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";

import Layout from "../components/Layout";
import Container from "../components/Container";
import PageTitle from "../components/PageTitle";
import PageBody from "../components/PageBody";
import PostDate from "../components/PostDate";

import { shortSiteTitle } from "../../content/meta/config";

const PostTemplate = ({ data, pageContext }) => {
  const {
    post: { id, html, fields, frontmatter }
  } = data;
  const post = { id, html, ...fields, ...frontmatter };
  return (
    <Layout>
      <Helmet>
        <title>{`${post.title} - ${shortSiteTitle}`}</title>
      </Helmet>
      <Container>
        <PostDate date={post.date} />
        <PageBody html={post.html} />
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
        date
        tags
      }
      frontmatter {
        title
        author
        cover {
          childImageSharp {
            resize(width: 300) {
              src
            }
          }
        }
      }
    }
  }
`;

export default PostTemplate;
