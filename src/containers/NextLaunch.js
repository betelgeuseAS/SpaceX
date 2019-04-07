import React, {Component} from 'react';
import { connect } from	'react-redux';

import { fetchNextLaunchResolver } from '../actions/nextLaunchAction';

import { isEmptyObject } from '../components/helpers/helpers';

import { Menu } from '../components/Menu';
import Launch from '../components/Launch';

class NextLaunch extends Component {
  componentDidMount() {
    this.props.fetchNextLaunchResolver();
  }

  render() {
    const { nextLaunch } = this.props;

    return (
      <>
        <Menu />

        {isEmptyObject(nextLaunch) ? <Launch nextLaunchData={nextLaunch} /> : <div>Loading...</div>}
      </>
    );
  }
}

const	mapStateToProps	=	store	=> {
  return {
    nextLaunch: store.nextLaunch
  }
};

const	mapDispatchToProps = dispatch	=> {
  return {
    fetchNextLaunchResolver: () => dispatch(fetchNextLaunchResolver())
  }
};
// const	mapDispatchToProps = dispatch	=> ({
//   setYearAction: year	=> dispatch(setYear(year)),
// });

export default connect(mapStateToProps, mapDispatchToProps)(NextLaunch);
