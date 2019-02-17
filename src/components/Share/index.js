import React, { Component } from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';
import { siteUrl, pathPrefix } from '../../../content/meta/config'
import { css } from 'emotion';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaReddit } from 'react-icons/fa';
import { FaHackerNews } from 'react-icons/fa';

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

const Wrapper = styled.div`
width: 1em;
position: fixed;
display: flex ;
  @media only screen and (max-width: 60em) {
    display: block;
margin-left: auto;
margin-right: auto;
  position: fixed;
  width: 100%;
  bottom: 0;
  background-color: white;
}
`;

const ShareComponent = props => {
  // create object with props for shareBlock
  const shareBlockProps = {
    url: siteUrl,
    button: ShareButtonIconOnly,
    buttons: [
      { network: 'Twitter', icon: FaTwitter },
      { network: 'Facebook', icon: FaFacebook },
      { network: 'Whatsapp', icon: FaWhatsapp, link: 'https://wa.me/whatsappphonenumber/?text=urlencodedtext' },
      { network: 'Reddit', icon: FaReddit, link: '//www.reddit.com/submit?url=https://nerds-den.com' },
      { network: 'HackerNews', icon: FaHackerNews, link: 'http://news.ycombinator.com/submit' },

    ],
    text: `Give it a try - https://nerds-den.com/`,
    longtext: 'conclusion',
  };
  return <Wrapper><ShareBlockStandard {...shareBlockProps} /></Wrapper>;
};
export default ShareComponent
