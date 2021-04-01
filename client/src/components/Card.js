import React from 'react';
import './stylesheets/_Card.scss';

const Card = ({title, date, category, image_url, alt}) => (
  <div className="card">
    <img className="card-image" src={image_url} alt={alt}/>
    <div className="card-content">
      <h2>{title}</h2>
      <div>{date}</div>
      <div>{category}</div>
      <div>{alt}</div>
    </div>
  </div>
)

export default Card;
