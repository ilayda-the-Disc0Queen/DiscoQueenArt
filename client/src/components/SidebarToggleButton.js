import React from 'react';
import './stylesheets/_SidebarToggleButton.scss';
import logo from '../images/IB-logo_white_bg.png';

const SidebarToggleButton = props => (
  <button className="toggle-button" onClick={props.click}>
    <img className="logo" src={logo} alt="Ilayda Bakare's logo"/>
  </button>
);

export default SidebarToggleButton;
