import React, { Component } from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';
import { siteUrl, pathPrefix, siteDescription, siteTitle, siteImage } from '../../../content/meta/config'
import { css } from 'emotion';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaHackerNews } from 'react-icons/fa';

import {ShareBlockStandard,} from 'react-custom-share';

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
  z-index: 1;
}
`;

const CustomReactShare = props => {
  const customStyles = css`
    margin: 0.5em 0.5em;
    flex-basis: 1.5em;
    background:transparent;
    color: #43464b;
    border-color: transparent;
    font-size: 1.3em;
  `;

  const shareBlockProps = {
    url: siteUrl,
    buttons: [
      { network: "Twitter", icon: FaTwitter },
      { network: "Facebook", icon: FaFacebook },
      { network: 'Whatsapp', icon: FaWhatsapp, link: 'https://wa.me/?text='+siteUrl+' '+siteTitle+siteImage},
      { network: 'HackerNews', icon: FaHackerNews, link: 'https://news.ycombinator.com/submitlink?u='+siteUrl+'&t='+siteTitle },
     ],
    text:  siteTitle,
    longtext: siteDescription,
    buttonClassName: customStyles
  };

  return <Wrapper><ShareBlockStandard {...shareBlockProps}/></Wrapper>;
};

CustomReactShare.PropTypes = {};

export default CustomReactShare;
