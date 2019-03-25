import React, {Component} from 'react';

import NextLaunch from '../components/NextLaunch'

import { connect } from	'react-redux';
import { fetchNextLaunchResolver } from '../actions/Launches';

class Launches extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  };

  componentDidMount() {
    this.props.fetchNextLaunchResolver();
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
      <>
        {!this.isEmpty(nextLaunch) ? <NextLaunch launchData={nextLaunch} /> : <div>Loading...</div>}
      </>
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
    fetchNextLaunchResolver: () => dispatch(fetchNextLaunchResolver()),
  }
};
// const	mapDispatchToProps = dispatch	=> ({
//   setYearAction: year	=> dispatch(setYear(year)),
// })

export default connect(mapStateToProps, mapDispatchToProps)(Launches);
