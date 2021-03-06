import React, {Component} from 'react';
import './stylesheets/_Banner.scss';

class Banner extends Component {
  render() {

    return (
      <div className="image-banner">
        <div className="banner text container">
          <img className="banner-logo" src="https://res.cloudinary.com/dv59x91lc/image/upload/v1616425554/IB-logo_wxotos.png" alt="Ilayda Bakare's signature logo"></img>
          <Banner SidebarClickHandler={this.SidebarToggleClickHandler}/>
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
