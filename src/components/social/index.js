import React from 'react'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import Link from 'gatsby-link'
import {
  ShareButtons,
  ShareCounts,
  generateShareIcon
} from 'react-share';

const {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  EmailShareButton,
} = ShareButtons;
const {
  FacebookShareCount,
  GooglePlusShareCount,
  LinkedinShareCount,

} = ShareCounts;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const GooglePlusIcon = generateShareIcon('google');
const LinkedinIcon = generateShareIcon('linkedin');

const EmailIcon = generateShareIcon('email');

export default function Template({
  data, location // this prop will be injected by the GraphQL query we'll write in a bit
}) {
  const { markdownRemark: post } = data;
  const shareUrl = location.pathname;
  const title = post.frontmatter.title;
  return (
    <div className="blog">
      <div className="content">
        <Helmet title={`Auto contrôle des Hexagones | Conseils - ${post.frontmatter.title}`} />
        <Img sizes={post.frontmatter.image.childImageSharp.sizes} />
        <div className="blog-post">
          <p> Publi&eacute; le {
            post.frontmatter.date
          } </p>
           <ul className="social-share">
            <li>
                <FacebookShareButton
                url={shareUrl}
                quote={title}
                className="button"
                >
                <FacebookIcon
                  size={32}
                  round={false} />
              </FacebookShareButton>

              <FacebookShareCount
                url={shareUrl}
                className="count">
                {count => count}
              </FacebookShareCount>
            </li>
            <li>
                <TwitterShareButton
                url={shareUrl}
                title={title}
                className="button">
                <TwitterIcon
                  size={32}
                  round={false} />
              </TwitterShareButton>
            </li>
            <li>
                <GooglePlusShareButton
                url={shareUrl}
                className="button">
                <GooglePlusIcon
                  size={32}
                  round={false} />
              </GooglePlusShareButton>

              <GooglePlusShareCount
                url={shareUrl}
                className="count">
                {count => count}
              </GooglePlusShareCount>
            </li>
            <li>
                <LinkedinShareButton
                url={shareUrl}
                title={title}
                windowWidth={750}
                windowHeight={600}
                className="button">
                <LinkedinIcon
                  size={32}
                  round={false} />
              </LinkedinShareButton>

              <LinkedinShareCount
                url={shareUrl}
                className="count">
                {count => count}
              </LinkedinShareCount>
            </li>
            <li>
              <EmailShareButton
              url={shareUrl}
              subject={title}
              body="body"
              className="button">
              <EmailIcon
                size={32}
                round={false} />
              </EmailShareButton>

            </li>
          </ul>
      </div>
      <Helmet
        bodyAttributes={{
          class: 'noBgImg'
        }}
      />
    </div>
  );
}
export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "DD MMMM YYYY", locale:"fr")
        path
        title
        image {
          childImageSharp {
            resize(width: 1500, height: 1500) {
              src
            }
            sizes(maxWidth: 786) {
              ...GatsbyImageSharpSizes
            }
          }
        }


      }
    }
  }
`;
