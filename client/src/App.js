import React, {Component} from 'react';
import './App.css';
import Banner from './components/Banner';
import ArtworksList from './components/ArtworksList';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Banner/>
          <ArtworksList/>
        </div>
    );
  }
}

export default App;
