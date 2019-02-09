import { css } from "emotion";
import PropTypes from "prop-types";
import React from "react";
import { FaTwitter } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaGooglePlus } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

import { ShareButtonIconOnly, ShareBlockStandard } from "react-custom-share";

const CustomReactShare = props => {
  const { url, title, excerpt } = props;

  const customStyles = css`
    border-radius: 100% 0 50% 0;
    margin: 0 10px;
    flex-basis: 60px;
    height: 60px;
    flex-grow: 0;
  `;

  const shareBlockProps = {
    url: url,
    button: ShareButtonIconOnly,
    buttons: [
      { network: "Twitter", icon: FaTwitter },
      { network: "Facebook", icon: FaFacebook },
      { network: "GooglePlus", icon: FaGooglePlus },
			{ network: "Linkedin", icon: FaLinkedin},
    ],
    text: title,
    longtext: excerpt,
    buttonCustomClassName: customStyles
  };

  return <ShareBlockStandard {...shareBlockProps} />;
};

CustomReactShare.PropTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  excerpt: PropTypes.string
};

CustomReactShare.defaultProps = {
  url: "https://nerds-den.com/",
  title: "Default value of title",
  excerpt: "Default value of excerpt"
};

export default CustomReactShare;
