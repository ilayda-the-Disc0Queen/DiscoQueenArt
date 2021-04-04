import React from 'react';
import ArtworkData from '../data/ArtworkData';
import Card from '../components/Card';
import '../components/stylesheets/_Drawings.scss';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import DrawingInfo from './DrawingInfo';

const Drawings = props => {
  let AllDrawings = [];
  const DrawingArtworks = ArtworkData.map((artwork) => {
    if (artwork.category === 'Drawing') {
      AllDrawings.push(artwork);
    }
    return AllDrawings;
  })
  return (
      <div>
        <h2>Drawings</h2>
        {AllDrawings.map((drawing) => {
          return(
            <div  key={drawing.id}>
              <div className="all-drawings-container">
                  <div className="drawing-container">
                    <div className="container">
                      <div className="row justify-content-md-center">
                        <div className="col-md-auto"></div>
                        <div className="col-md-auto col col-lg-7">
                            <Card className="drawing-card"
                              title={drawing.title}
                              image_url={drawing.image_url}
                            />
                        </div>
                        <div className="col-md-auto"></div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
            )
        })}
      </div>
  );
}

export default Drawings;
