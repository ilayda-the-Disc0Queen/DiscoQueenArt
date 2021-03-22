import React, {Component} from 'react';
import './stylesheets/_Banner.scss';
// import Navbar from './Navbar';
import SidebarToggleButton from './SidebarToggleButton'
import Sidebar from './Sidebar';
import Backdrop from './Backdrop';

class Banner extends Component {
  state = {
    sidebarOpen: false
  };

  SidebarToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sidebarOpen: !prevState.sidebarOpen};
    });
  };

  render() {
    let Sidebar;
    let Backdrop;
    if(this.state.sidebarOpen) {
      Sidebar = <Sidebar/>
      Backdrop = <Backdrop/>
    }
    return (
      <div className="image-banner">
        <div className="banner text container">
          <img className="banner-logo" src="https://res.cloudinary.com/dv59x91lc/image/upload/v1616425554/IB-logo_wxotos.png" alt="Ilayda Bakare's signature logo"></img>
          <SidebarToggleButton />
          {Sidebar}
          {Backdrop}
          <h1 id="banner-name" className="banner text header">
            DiscoQueen Art by Ilayda Bakare
          </h1>
          <h2 className="banner text" >Arty farty baby</h2>
          {/* <div className="banner ui huge primary button">Click me!</div> */}
        </div>
        {/* <Navbar/> */}
      </div>
    );
  }
}

export default Banner;
