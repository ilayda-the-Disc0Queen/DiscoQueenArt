import React from 'react';
import './stylesheets/_Backdrop.scss';

const Backdrop = props => (
  <div className="backdrop" onClick={props.click}/>
  // Thirdly add the onClick={props.click}
);

export default Backdrop;
