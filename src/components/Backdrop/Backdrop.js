import React from 'react';

import './Backdrop.css';
const backdrop = props => (
  <div className="backdrop" onclick={props.click}/>

);
export default backdrop
