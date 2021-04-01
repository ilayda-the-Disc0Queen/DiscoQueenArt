import React from 'react';
import '../components/stylesheets/_AllArtwork.scss';
import ArtworkData from '../data/ArtworkData';
import Card from '../components/Card';

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
  console.log('vdc =', DrawingsCard.title);

  return (
      <div className="all-artwork-container">
          <h1 className="banner text" >Take a look at my art!</h1>
          <div className="artwork-categories">
            <Card
              title="Drawings"
              image_url={DrawingsCard.image_url}
            />
          </div>
      </div>
  );
}

export default AllArtwork;
