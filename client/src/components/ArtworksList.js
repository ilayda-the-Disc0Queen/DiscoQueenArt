import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewArtworkForm from './NewArtworkForm';
import Artwork from './Artwork';
import EditArtworkForm from './EditArtworkForm';

const ArtworksList = props => {
  useEffect(() => {
    axios.get('/api/v1/artworks.json')
        .then(res => setArtworks(res.data))
      }, []);
  const [artworks, setArtworks] = useState([]);
  const [editing, setEditing] = useState(false);

  const initialFormState = {
  title:'',
  info:'',
  date:''};

  const editArtwork = artwork => {
    setEditing(true);
    setCurrentArtwork({
      id: artwork.id,
      title: artwork.title,
      info: artwork.info,
      date: artwork.date
    })
  };

  const updateArtwork = (updatedArtwork) => {
    setEditing(false);

    const qs = require('qs');
    axios.patch('/api/v1/artworks/' + updatedArtwork.id, qs.stringify(
      {
        artwork:{
          title: updatedArtwork.title,
          info: updatedArtwork.info,
          date: updatedArtwork.date}
      }))
      .then(
          res=>(
              console.log(res.data)
          ));

    setArtworks(artworks.map(artwork => (artwork.id === updatedArtwork.id ? updatedArtwork : artwork)))
  };

  const removeArtwork = id => {
    axios.delete( '/api/v1/artworks/' + id )
      .then(response => {
        setArtworks(artworks.filter(artwork => artwork.id !== id))
      })
      .catch(error => console.log(error))
  };

  const [currentArtwork, setCurrentArtwork] = useState(initialFormState);
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
      <div className="artworks-list">
        <div>
          {editing ? (
            <EditArtworkForm
                setEditing={setEditing}
                currentArtwork={currentArtwork}
                updateArtwork={updateArtwork}
            />
          ) : (
            <NewArtworkForm addArtwork={addArtwork} initialFormState={initialFormState}/>
          )}
        </div>
        <br/>
        <hr/>
        {artworks.map((artwork, _) => (
            <Artwork artwork={artwork} removeArtwork={removeArtwork} editArtwork={editArtwork} editing={editing} />
          ))}
      </div>
    </div>
)
};

export default ArtworksList;
