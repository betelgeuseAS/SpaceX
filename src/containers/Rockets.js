import React, { Component } from 'react';
import {connect} from "react-redux";

import { fetchAllRocketsResolver } from '../actions/allRocketsAction';

import { Menu } from '../components/Menu';
import { RocketsList } from "../components/RocketsList";

import {isEmptyObject} from "../components/helpers/helpers";

class Rockets extends Component {
  componentDidMount() {
    this.props.fetchAllRocketsResolver();
  }

  render() {
    const { rockets } = this.props;

    return (
      <>
        <Menu />

        {isEmptyObject(rockets) ? <RocketsList rockets={rockets} /> : <div>Loading...</div>}
      </>
    );
  }
}

const	mapStateToProps	=	store	=> {
  return {
    rockets: store.rockets
  }
};

const	mapDispatchToProps = dispatch	=> {
  return {
    fetchAllRocketsResolver: () => dispatch(fetchAllRocketsResolver())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Rockets);
