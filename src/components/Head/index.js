import React from "react";
import Helmet from "react-helmet";

import favicon from "../../../static/favicon.ico";
import { siteTitle, shortSiteTitle } from "../../../content/meta/config";

const Head = ({ post = {}, page = {} }) => {
  let title = siteTitle;
  if (post.title) title = `${post.title} - ${shortSiteTitle}`;
  if (page.title) title = `${page.title} - ${shortSiteTitle}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href={favicon} />
    </Helmet>
  );
};

export default Head;
