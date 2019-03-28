import React, {Component} from 'react';

import NextLaunch from '../components/NextLaunch'

import { connect } from	'react-redux';
import { fetchNextLaunchResolver } from '../actions/Launches';

import { isEmpty } from '../components/helpers/helpers';

class Launches extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  };

  componentDidMount() {
    this.props.fetchNextLaunchResolver();
  }

  render() {
    const { nextLaunch } = this.props;
    return (
      <>
        {!isEmpty(nextLaunch) ? <NextLaunch launchData={nextLaunch} /> : <div>Loading...</div>}
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
