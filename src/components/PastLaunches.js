import React from 'react';
import PropTypes from 'prop-types';

import LaunchItem from './LaunchItem';

export const PastLaunches = ({ pastLaunchesData }) => {
  return (
    <>
      {
        pastLaunchesData.map(launch => (
          <LaunchItem key={launch.flight_number} launch={launch} />
        ))
      }
    </>
  );
};

PastLaunches.propTypes = {
  pastLaunchesData:	PropTypes.array.isRequired
};

PastLaunches.defaultProps = {
  pastLaunchesData:	[]
};
