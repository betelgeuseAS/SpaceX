import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { Menu } from "../components/Menu";

class AllLaunches extends Component {
  render() {
    return (
      <>
        <Menu />
        <h1>All Launches</h1>
      </>
    );
  }
}

AllLaunches.propTypes = {};

export default AllLaunches;
