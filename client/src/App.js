import React from 'react';
import './App.css';
import Banner from './components/Banner';
import ArtworksList from './components/ArtworksList';

function App() {

  return (
      <div className="App">
        <h1>Artwork time!!!</h1>
        <Banner/>
        <ArtworksList/>
      </div>
  );
}

export default App;
