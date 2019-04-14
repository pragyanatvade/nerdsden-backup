import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import SearchBox from '../SearchBox'
import './Toolbar.css'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton.js'
import SubscribeForm from '../SubscribeForm'
const activeLinkStyle = {
  color: '#C0C0C0',
}
var buttonStyle = {
  background: '#FF6347',
  border: 'transparent',
  cursor: 'pointer',

};
const Toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__toggle-button">
            <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
      <div className="toolbar_navigation-items">
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
        <SearchBox/>
        <div className = "subscribe">
          <SubscribeForm/></div>
        </ul>
      </div>
    </nav>
  </header>
);

export default Toolbar
