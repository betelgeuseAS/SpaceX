import React, { Component } from 'react';

import './App.sass';

import Launches from './Launches';
import { Menu } from '../components/Menu';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="App">
        <Menu />

        <Launches />
      </div>
    );
  }
}

export default App;
