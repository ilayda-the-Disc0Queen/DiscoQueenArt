import React, { useState } from 'react';

const EditArtworkForm = props => {
  const [artwork, setArtwork] = useState(props.currentArtwork);

  const handleInputChange = event => {
    const { name, value } = event.target
    setArtwork({ ...artwork, [name]: value })
  };

  return (
      <form onSubmit={event => {
        event.preventDefault();
        if (!artwork.title || !artwork.info || !artwork.date) return;
        props.updateArtwork(artwork)
      }}>
        <label>Title</label>
        <input type="text" name="title" value={artwork.title} onChange={handleInputChange} ></input>
        <label>Info</label>
        <input type="text" name="info" value={artwork.info} onChange={handleInputChange} ></input>
        <label>Date</label>
        <input type="text" name="date" value={artwork.date} onChange={handleInputChange} ></input>

        <button>Update Artwork</button>
        <button onClick={() => props.setEditing(false)}>Cancel</button>
      </form>
  )
};

export default EditArtworkForm;
