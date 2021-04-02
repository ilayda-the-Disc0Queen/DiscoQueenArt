import React, { useState } from 'react';
import './stylesheets/_Sidebar.scss';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import AllArtwork from "../pages/AllArtwork";
import Drawings from "../pages/Drawings";
import Illustrations from "../pages/Illustrations";
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
          <li><Link to="/Drawings">Exhibitions</Link></li>
          <li><Link to="/page-3">Merchandise</Link></li>
        </ul>
      </div>
      <Switch>
        <Route path="/" exact component={FeaturedImagePage}/>
        <Route path="/AllArtwork" component={AllArtwork}/>
        <Route path="/Drawings" component={Drawings}/>
        <Route path="/Illustrations" component={Illustrations}/>
      </Switch>
    </BrowserRouter>
  )
};

export default Sidebar;
