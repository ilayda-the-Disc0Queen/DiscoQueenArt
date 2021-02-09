import React from 'react';


const Artwork = ({ artwork, removeArtwork, editArtwork, editing }) => (
    <div className="artwork" key={artwork.id}>
      <h4>{artwork.title}</h4>
      <p>{artwork.info}</p>
      <p>{artwork.date}</p>

      {editing ? (null
      ) : (
          <button
              onClick={() => {editArtwork(artwork)}}
          >Edit</button>
      )}

      <button onClick={() => removeArtwork(artwork.id)}>Remove</button>
    </div>
);

export default Artwork;
