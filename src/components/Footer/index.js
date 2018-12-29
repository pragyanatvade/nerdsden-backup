import React from "react";
import styled from "styled-components";

const Wrapper = styled.footer`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxWidth};
`;

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  border-top: 1px solid ${props => props.theme.colors.secondary};
  padding: 1em 0 2em;
  margin: 0 1.5em;
`;

const Item = styled.li`
  display: inline-block;
  padding: 0.25em 0;
  width: 100%;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    width: auto;
  }
  a {
    font-weight: 600;
    transition: all 0.2s;
    color: ${props => props.theme.colors.base};
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
    &:visited {
      color: ${props => props.theme.colors.base};
    }
  }
`;

const Footer = () => (
  <Wrapper>
    <List>
      <Item>
        Copyright © 2019 -{" "}
        <a href="https://www.vadelabs.com/" rel="nofollow noopener noreferrer" target="_blank">
          Vadelabs
        </a>
        . All Rights Reserved
      </Item>
      <Item>
        <a href="https://nerds-den.com/privacy/" target="_blank" rel="noopener noreferrer">
          Privacy
        </a>{" "}
        <a href="https://nerds-den.com/terms-of-use/" target="_blank" rel="noopener noreferrer">
          Terms Of Use
        </a>{" "}
        <a href="https://nerds-den.com/contact/" target="_blank" rel="noopener noreferrer">
          Contact
        </a>
      </Item>
    </List>
  </Wrapper>
);
export default Footer;
