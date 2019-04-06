import React, {Component} from 'react';

import { Menu } from '../components/Menu';
import NextLaunch from '../components/NextLaunch'
import PastLaunches from '../components/PastLaunches';

import { connect } from	'react-redux';
import {
  fetchNextLaunchResolver,
  fetchPastLaunchesResolver
} from '../actions/launchesAction';

import { isEmptyObject, isEmptyArray } from '../components/helpers/helpers';

class Launches extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  };

  componentDidMount() {
    this.props.fetchNextLaunchResolver();
    this.props.fetchPastLaunchesResolver();
  }

  render() {
    const { nextLaunch, pastLaunches } = this.props;
    return (
      <>
        <Menu />
        {isEmptyObject(nextLaunch) ? <NextLaunch nextLaunchData={nextLaunch} /> : <div>Loading...</div>}
        {isEmptyArray(pastLaunches) ? <PastLaunches pastLaunchesData={pastLaunches} /> : <div>Loading...</div>}
      </>
    );
  }
}

const	mapStateToProps	=	store	=> {
  // console.log(store);
  return {
    nextLaunch: store.nextLaunch,
    pastLaunches: store.pastLaunches
  }
};

const	mapDispatchToProps = dispatch	=> {
  return {
    fetchNextLaunchResolver: () => dispatch(fetchNextLaunchResolver()),
    fetchPastLaunchesResolver: () => dispatch(fetchPastLaunchesResolver())
  }
};
// const	mapDispatchToProps = dispatch	=> ({
//   setYearAction: year	=> dispatch(setYear(year)),
// });

export default connect(mapStateToProps, mapDispatchToProps)(Launches);
