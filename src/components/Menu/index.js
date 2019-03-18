import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import SubscribeForm from '../SubscribeForm'
const Header = styled.header`
  background: ${props => props.theme.colors.base};
  width: 100%;
  height:2.5em;

`

const Nav = styled.nav`
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0.6em 0;
  padding-right:1.5em;

  ul {
    display: flex;
    justify-content: space-between;
  }

  li {
    display: inline-block;
    margin-left: 0.8em;
    &:first-child {
      position: relative;
      margin: 0;
      flex-basis: 50%;
    }
  }

  a {
    text-decoration: none;
    color: White;
    font-weight: 600;
    transition: all 0.2s;
    border-bottom: 2px solid ${props => props.theme.colors.base};
    &:hover {
      color: #C0C0C0	;
    }
  }
`

const activeLinkStyle = {
  color: '#C0C0C0',
}
var buttonStyle = {
  background: '#FF6347',
  border: 'transparent',
  cursor: 'pointer',



};

const Menu = () => (
  <Header>
    <Nav>
      <ul>
        <li>
          <Link to="/" activeStyle={activeLinkStyle}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/tags/" activeStyle={activeLinkStyle}>
            Tags
          </Link>
        </li>
        <li>
          <Link to="/about/" activeStyle={activeLinkStyle}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact/" activeStyle={activeLinkStyle}>
            Contact
          </Link>
        </li>
        <li>
          <SubscribeForm/>
        </li>

      </ul>
    </Nav>
  </Header>
)

export default Menu
