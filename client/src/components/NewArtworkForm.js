import React, { useState } from 'react';

const NewArtworkForm = props => {
  const [artwork, setArtwork] = useState(props.initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target
    setArtwork({ ...artwork, [name]: value })
  };

  return (
      <form onSubmit={event => {
        event.preventDefault()
        if (!artwork.title || !artwork.info || !artwork.date) return;
        props.addArtwork(artwork)
        setArtwork(props.initialFormState)
      }}>
        <label>Title</label>
        <input type="text" name="title" value={artwork.title} onChange={handleInputChange} ></input>
        {/* <label>Image</label>
        <input type="image" alt="" name="image" value={artwork.image} onChange={handleInputChange} ></input> */}
        <label>Information</label>
        <input type="text" name="info" value={artwork.info} onChange={handleInputChange} ></input>
        <label>date</label>
        <input type="text" name="date" value={artwork.date} onChange={handleInputChange} ></input>
        <button>Submit new artwork</button>
      </form>
  )
};

export default NewArtworkForm;
