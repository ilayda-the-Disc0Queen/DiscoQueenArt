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
    <BrowserRouter>
    {console.log(AllDrawings)};
      <div>
        <h2>All drawings</h2>
        {AllDrawings.map((drawing) => {
          return(
            <div  key={drawing.id}>
              <div className="all-drawings-container">
                <nav>
                  <div className="drawing-container">
                  <Link to={`/Drawings/${drawing.id}`}>
                    <Card className="drawing-card"

                      title={drawing.title}
                      image_url={drawing.image_url}
                    />
                  </Link>
                </div>
              </nav>
              </div>
              <Switch>
                <Route path="/Drawings/:id" component={DrawingInfo}/>
              </Switch>
            </div>
            )
        })}
      </div>
    </BrowserRouter>
  );
}

export default Drawings;
