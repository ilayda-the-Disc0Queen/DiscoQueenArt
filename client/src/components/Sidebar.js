import React, { useState } from 'react';
import './stylesheets/_Sidebar.scss';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import AllArtwork from "../pages/AllArtwork";
import Page2 from "../pages/Page-2";
import Page3 from "../pages/Page-3";
import FeaturedImagePage from './FeaturedImagePage';

const Sidebar = props => {
  const [open, setOpen] = useState(false);

  let SidebarClasses = 'sidebar-container';
  if (props.show) {
    SidebarClasses = 'sidebar-container open';
  }

  return (
    <BrowserRouter>
      <div className={SidebarClasses}>
        <ul>
          <li><Link to="/" >Home</Link></li>
          <li><Link to="/AllArtwork">Artwork</Link></li>
          <li><Link to="/page-2">Exhibitions</Link></li>
          <li><Link to="/page-3">Merchandise</Link></li>
        </ul>
      </div>
      <Switch>
        <Route path="/" exact component={FeaturedImagePage}/>
        <Route path="/AllArtwork" component={AllArtwork}/>
        <Route path="/page-2" component={Page2}/>
        <Route path="/page-3" component={Page3}/>
      </Switch>
    </BrowserRouter>
  )
};

export default Sidebar;
