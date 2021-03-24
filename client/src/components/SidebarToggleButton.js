import React from 'react';
import './stylesheets/_SidebarToggleButton.scss';

const SidebarToggleButton = props => (
  <button className="toggle-button" onClick={props.click}>
    <i className="fa fa-bars"></i>
  </button>

);

export default SidebarToggleButton;
