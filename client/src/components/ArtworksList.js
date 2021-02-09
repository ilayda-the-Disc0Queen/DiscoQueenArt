import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewArtworkForm from './NewArtworkForm';

const ArtworksList = props => {
  useEffect(() => {
    axios.get('/api/v1/artworks.json')
        .then(res => setArtworks(res.data))
      }, []);
  const [artworks, setArtworks] = useState([]);

  const initialFormState = {
  title:'',
  info:'',
  date:''};

  const addArtwork = artwork => {
    const qs = require('qs');

  axios.post('/api/v1/artworks', qs.stringify(
      {
        artwork:{
          title: artwork.title,
          info: artwork.info,
          date: artwork.date}
      }))
      .then(res=>( console.log(res)))
      .catch( error => console.log(error));

  setArtworks([...artworks, artwork]);
};

  return (
      <div>
      <div>
         <NewArtworkForm addArtwork={addArtwork} initialFormState={initialFormState}/>
      </div>
        <div className="artworks-list">
          {artworks.map((artwork, index) => (
              <div key={index}>
                {artwork.title} | {artwork.info} | {artwork.date}
              </div>
            ))}
        </div>
      </div>
  )
};

export default ArtworksList;
