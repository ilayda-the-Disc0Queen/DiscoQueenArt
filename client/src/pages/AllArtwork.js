import React from 'react';
import '../components/stylesheets/_AllArtwork.scss';
import ArtworkData from '../data/ArtworkData';
import Card from '../components/Card';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Drawings from './Drawings';
import Illustrations from './Illustrations';
import Cards from './Cards';

const AllArtwork = props => {
  const artworks = ArtworkData.map((artwork) => {
    return (
      <div>
        {/* <h2 key={artwork.id}>{artwork.name}</h2>
        <img src={artwork.image_url} alt={artwork.alt}/> */}
        <Card
          title={artwork.title}
          date={artwork.date}
          category={artwork.category}
          image_url={artwork.image_url}
          alt={artwork.alt}
        />
        </div>

    );
  })

  const DrawingsCard = ArtworkData.find(artwork => artwork.category === 'Drawing');
  const IllustrationsCard = ArtworkData.find(artwork => artwork.category === 'Illustration');
  const CardsCard = ArtworkData.find(artwork => artwork.category === 'Card');


  return (
    <BrowserRouter>
      <div className="all-artwork-container">
        <h1 className="banner text" >Take a look at my art!</h1>
          <nav>
            <div className="artwork-categories">
            <Link to="/Drawings">
              <Card className="artwork-card"
                title="Drawings"
                image_url={DrawingsCard.image_url}
              />
            </Link>
            <Link to="/Illustrations">
              <Card className="artwork-card"
                title="Illustrations"
                image_url={IllustrationsCard.image_url}
              />
            </Link>
            <Link to="/Cards">
              <Card className="artwork-card"
                title="Cards"
                image_url={CardsCard.image_url}
              />
            </Link>
          </div>
        </nav>
      </div>
      <Switch>
        <Route path="/Drawings" component={Drawings}/>
        <Route path="/Illustrations" component={Illustrations}/>
        <Route path="/Cards" component={Cards}/>
      </Switch>
    </BrowserRouter>
  );
}

export default AllArtwork;
