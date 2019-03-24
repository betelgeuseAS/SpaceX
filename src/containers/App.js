import React, { Component } from 'react';

import './App.sass';

import { connect } from	'react-redux';
import { fetchAllData } from '../actions/appAction';

import NextLaunch from './NextLaunch';
import { Menu } from '../components/Menu';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  componentDidMount() {
    this.props.fetchAllData();
  }

  isEmpty = (obj) => {
    for (var key in obj) {
      return false;
    }
    return true;
  };

  render() {
    const { nextLaunch } = this.props;
    return (
      <div className="App">
        <Menu />

        {/*<NextLaunch launchData={nextLaunch} />*/}
        {!this.isEmpty(nextLaunch) ? <NextLaunch launchData={nextLaunch} /> : <div>Loading...</div>}
      </div>
    );
  }
}

const	mapStateToProps	=	store	=> {
  // console.log(store);
  return {
    nextLaunch: store.nextLaunch,
  }
};

const	mapDispatchToProps = dispatch	=> {
  return {
    fetchAllData: () => dispatch(fetchAllData()),
  }
};
// const	mapDispatchToProps = dispatch	=> ({
//   setYearAction: year	=> dispatch(setYear(year)),
// })

export default connect(mapStateToProps, mapDispatchToProps)(App);
