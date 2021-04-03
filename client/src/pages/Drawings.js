import React from 'react';
import ArtworkData from '../data/ArtworkData';
import Card from '../components/Card';


const Drawings = props => {
  let AllDrawings = [];
  const DrawingArtworks = ArtworkData.map((artwork) => {
    if (artwork.category === 'Drawing') {
      AllDrawings.push(artwork);
    }
    return AllDrawings;
    // return (
    //   <div>
    //     {/* <h2 key={artwork.id}>{artwork.name}</h2>
    //     <img src={artwork.image_url} alt={artwork.alt}/> */}
    //       <Card
    //         title={artwork.title}
    //         date={artwork.date}
    //         category={artwork.category}
    //         image_url={artwork.image_url}
    //         alt={artwork.alt}
    //       />
    //     </div>

    // );
  })
  return (
      <div>
          <h2>All drawings</h2>
      </div>
  );
}

export default Drawings;
