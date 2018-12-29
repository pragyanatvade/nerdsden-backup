import React from 'react';
import Helmet from 'react-helmet';

import favicon from '../../../static/favicon.ico';
import config from '../../../content/meta/config';

const Head = () => (
  <Helmet>
    <title>{config.siteTitle}</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href={favicon} />
  </Helmet>
);

export default Head;
