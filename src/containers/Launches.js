import React, {Component} from 'react';

import { Menu } from '../components/Menu';
import NextLaunch from '../components/NextLaunch'
import LatestLaunch from '../components/LatestLaunch';

import { connect } from	'react-redux';
import {
  fetchNextLaunchResolver,
  fetchLatestLaunchResolver
} from '../actions/launchesAction';

import { isEmpty } from '../components/helpers/helpers';

class Launches extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  };

  componentDidMount() {
    this.props.fetchNextLaunchResolver();
    this.props.fetchLatestLaunchResolver();
  }

  render() {
    const { nextLaunch, latestLaunch } = this.props;
    return (
      <>
        <Menu />
        {!isEmpty(nextLaunch) ? <NextLaunch nextLaunchData={nextLaunch} /> : <div>Loading...</div>}
        {!isEmpty(nextLaunch) ? <LatestLaunch latestLaunchData={latestLaunch} /> : <div>Loading...</div>}
      </>
    );
  }
}

const	mapStateToProps	=	store	=> {
  // console.log(store);
  return {
    nextLaunch: store.nextLaunch,
    latestLaunch: store.latestLaunch
  }
};

const	mapDispatchToProps = dispatch	=> {
  return {
    fetchNextLaunchResolver: () => dispatch(fetchNextLaunchResolver()),
    fetchLatestLaunchResolver: () => dispatch(fetchLatestLaunchResolver())
  }
};
// const	mapDispatchToProps = dispatch	=> ({
//   setYearAction: year	=> dispatch(setYear(year)),
// })

export default connect(mapStateToProps, mapDispatchToProps)(Launches);
