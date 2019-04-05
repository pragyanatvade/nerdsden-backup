import React from 'react'
import { Link } from 'gatsby'

import './SideDrawer.css';
const activeLinkStyle = {
  color: '#C0C0C0',
}
var buttonStyle = {
  background: '#FF6347',
  border: 'transparent',
  cursor: 'pointer',



};
const sideDrawer = props => {
let drawerClasses = 'side-drawer';
if(props.show){
  drawerClasses = 'side-drawer open';
}
  return (
    <nav className={drawerClasses}>
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
      </ul>
    </nav>);
};

export default sideDrawer
