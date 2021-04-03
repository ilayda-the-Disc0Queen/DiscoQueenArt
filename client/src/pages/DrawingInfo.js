import React from 'react';
import ArtworkData from '../data/ArtworkData';
import Card from '../components/Card';
import '../components/stylesheets/_Drawings.scss';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';


const DrawingInfo = props => {
  {console.log(props)};
  return (
      <div>
        <h2>Drawing info</h2>
      </div>
  );
}

export default DrawingInfo;
