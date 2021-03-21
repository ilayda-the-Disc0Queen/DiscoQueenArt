import React from 'react';
import './stylesheets/_Banner.scss';
// import Navbar from './Navbar';

const Banner = () => {
  return (
    <div className="image-banner">
      <div className="banner text container">
        <h1 id="banner-name" className="banner text header">
          DiscoQueen Art by Ilayda Bakare
        </h1>
        <h2 className="banner text" >Arty farty baby</h2>
        {/* <div className="banner ui huge primary button">Click me!</div> */}
      </div>
      {/* <Navbar/> */}
    </div>
  );
};

export default Banner;
