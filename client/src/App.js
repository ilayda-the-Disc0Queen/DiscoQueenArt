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

  render() {
    let sidebar;
    let backdrop;
    if (this.state.sidebarOpen) {
      sidebar = <Sidebar/>
      backdrop = <Backdrop/>
    }
    return (
        <div className="App">
          <Navbar SidebarClickHandler={this.SidebarToggleClickHandler}/>
          {console.log('this =', this)}
          {sidebar}
          {backdrop}
        </div>
    );
  }
}

export default App;
