import React from 'react';
import '../components/stylesheets/_Banner.scss';
import ArtworkData from '../data/ArtworkData';

const AllArtwork = props => {
  const artworks = ArtworkData.map((artwork) => {
    return (
      <div>
        <h2 key={artwork.id}>{artwork.name}</h2>
        <img src={artwork.image} alt={artwork.alt}/>
      </div>

    );
  })


  return (
      <div className="banner text container">
          <h1>2nd Page</h1>
          <h2 className="banner text" >{artworks}</h2>
          <p>I bring the sauce.</p>
      </div>
  );
}

export default AllArtwork;
