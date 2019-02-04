import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { siteUrl, pathPrefix } from '../../../content/meta/config'
import { css } from 'emotion';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaGooglePlus } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import {
  // base components (unstyled)
  ShareButton,
  ShareBlock,

  // styled button components
  ShareButtonRoundSquare,
  ShareButtonRectangle,
  ShareButtonCircle,
  ShareButtonIconOnly,
  ShareButtonOutline,

  // styled block components
  ShareBlockStandard,
} from 'react-custom-share';

const ShareComponent = props => {
  // create object with props for shareBlock
  const shareBlockProps = {
    url: {siteUrl},
    button: ShareButtonIconOnly,
    buttons: [
      { network: 'Twitter', icon: FaTwitter },
      { network: 'Facebook', icon: FaFacebook },
      { network: 'GooglePlus', icon: FaGooglePlus },
      { network: 'Linkedin', icon: FaLinkedin },
    ],
    text: `Give it a try - https://nerds-den.com/`,
    longtext: `Take a look at this super website I have just found.`,
  };
  return <ShareBlockStandard {...shareBlockProps} />;
};
export default ShareComponent
