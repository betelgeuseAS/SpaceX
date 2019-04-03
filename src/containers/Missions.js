import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { Menu } from '../components/Menu';

class Missions extends Component {
  render() {
    return (
      <>
        <Menu />
        <h1>Missions</h1>
      </>
    );
  }
}

Missions.propTypes = {};

export default Missions;
