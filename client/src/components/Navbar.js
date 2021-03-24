import React from 'react';
import './stylesheets/_Navbar.scss';
import SidebarToggleButton from './SidebarToggleButton';

const navbar = props => (
  <header className="navbar">
    <nav className="navbar__navigation">
      <div>
        <SidebarToggleButton click={props.SidebarClickHandler} />
        {console.log('props =', props)}
      </div>
      <div className="navbar__logo"><a href="/">IB Logo</a></div>
      <div className="spacer"></div>
      <div className="navbar_navigation-items">
        <ul>
          <li><a href="/">Products</a></li>
          <li><a href="/">Some shit</a></li>
        </ul>
      </div>
    </nav>
  </header>
);

export default navbar;

