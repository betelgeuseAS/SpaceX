import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { Menu } from '../components/Menu';

class Rockets extends Component {
  render() {
    return (
      <>
        <Menu />
        <h1>Rockets</h1>
      </>
    );
  }
}

Rockets.propTypes = {};

export default Rockets;
