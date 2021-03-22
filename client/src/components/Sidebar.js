import React from 'react';
import './stylesheets/_Sidebar.scss';

const Sidebar = props => (
  <nav className="sidebar-container">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/">Artwork</a></li>
      <li><a href="/">Exhibitions</a></li>
    </ul>
  </nav>
);

export default Sidebar;
