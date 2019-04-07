import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import "bootswatch/dist/journal/bootstrap.css";

import NextLaunch from './NextLaunch';
import AllLaunches from './AllLaunches';
import Rockets from './Rockets';
import Missions from './Missions';
import { Whoops404 } from '../components/Whoops404';

import './App.sass';

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
            <Route exact path="/" component={NextLaunch} />
            <Route path="/launches" component={AllLaunches} />
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
