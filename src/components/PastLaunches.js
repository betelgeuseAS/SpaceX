import React, {Component} from 'react';
import PropTypes from 'prop-types';

import LaunchItem from './LaunchItem';

class PastLauches extends Component {
  render() {
    return (
      <>
        {
          this.props.pastLaunchesData.map(launch => (
            <LaunchItem key={launch.flight_number} launch={launch} />
          ))
        }
      </>
    );
  }
}

PastLauches.propTypes = {
  pastLaunchesData:	PropTypes.array.isRequired
};

PastLauches.defaultProps = {
  pastLaunchesData:	[]
};

export default PastLauches;
