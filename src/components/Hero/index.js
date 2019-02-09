import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";

const Wrapper = styled.section`
  position: relative;
  min-height: 10em;
`;

const BgImg = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  min-height: 12em;
  height: auto;
  @media (min-width: ${props => props.theme.responsive.small}) {
    height: ${props => props.height || "auto"};
  }
  & > img {
    object-fit: ${props => props.fit || "cover"} !important;
    object-position: ${props => props.position || "50% 50%"} !important;
  }
  &::before {
    content: "";
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
  }
`;

const Title = styled.h1`
  font-size: 2.0em;
  padding-bottom:2.7em;
  text-transform: capitalize;
  font-weight: 700;
  position: absolute;
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
`;

const Hero = ({ title, image, height = "45vh" }) => {
  const {
    children: [{ fluid }]
  } = image;
  return (
    <Wrapper>
      <BgImg height={height} fluid={fluid} backgroundColor={"#eeeeee"} />
      <Title>{title}</Title>
    </Wrapper>
  );
};

export default Hero;
