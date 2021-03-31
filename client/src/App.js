import React, {Component} from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Backdrop from './components/Backdrop';

class App extends Component {
  state = {
    sidebarOpen: false
  };

  SidebarToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sidebarOpen: !prevState.sidebarOpen};
    });
  };

  BackdropClickHandler = () => {
    this.setState({sidebarOpen: false}) // doesnt have to be a function because we dont care about prevState of sidebar! Do this first
  };

  render() {
    let backdrop;
    if (this.state.sidebarOpen) {
      backdrop = <Backdrop click={this.BackdropClickHandler}/> //add "click=..." second
    }
    return (
        <div className="App">
          <Navbar SidebarClickHandler={this.SidebarToggleClickHandler}/>
          <Sidebar show={this.state.sidebarOpen}/>
          {backdrop}
        </div>
    );
  }
}

export default App;
