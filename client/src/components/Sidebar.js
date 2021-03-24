import React from 'react';
import './stylesheets/_Sidebar.scss';

const Sidebar = props => {
  let SidebarClasses = 'sidebar-container';
  if (props.show) {
    SidebarClasses = 'sidebar-container open';
  }
  return (
    <nav className={SidebarClasses}>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/">Artwork</a></li>
        <li><a href="/">Exhibitions</a></li>
      </ul>
    </nav>
  )
};

export default Sidebar;
