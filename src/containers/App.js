import React, { Component } from 'react';

import './App.sass';
import "bootswatch/dist/journal/bootstrap.css";

import Launches from './Launches';
import Rockets from './Rockets';
import Missions from './Missions';
import { Whoops404 } from '../components/Whoops404'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Launches} />
            <Route path="/rockets" component={Rockets} />
            <Route path="/missions" component={Missions} />
            <Route component={Whoops404} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
