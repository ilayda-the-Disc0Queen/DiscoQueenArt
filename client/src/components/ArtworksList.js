import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ArtworksList = props => {

  useEffect(() => {
    axios.get('/api/v1/artworks.json')
        .then(res => setArtworks(res.data))
      }, []);

  const [artworks, setArtworks] = useState([]);

  return (
      <div>
        <div className="artworks-list">
          {artworks.map((artwork, index) => (
              <div key={index}>
                {artwork.title} | {artwork.info}
              </div>
            ))}
        </div>
      </div>
  )
};
export default ArtworksList;
