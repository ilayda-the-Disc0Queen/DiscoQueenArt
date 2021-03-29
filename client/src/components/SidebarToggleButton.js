import React from 'react';
import './stylesheets/_SidebarToggleButton.scss';

const SidebarToggleButton = props => (
  <button className="toggle-button" onClick={props.click}>
    <img className="logo" src="https://res.cloudinary.com/dv59x91lc/image/upload/v1616425554/IB-logo_wxotos.png" alt="Ilayda Bakare's logo"/>
  </button>
);

export default SidebarToggleButton;
