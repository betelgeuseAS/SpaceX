import React from 'react';
import PropTypes from 'prop-types';

import { RocketItem } from "./RocketItem";

import { Container, Row, Col } from 'react-bootstrap';

import './RocketsLists.sass';

export const RocketsList = ({ rockets }) => {
  return (
    <>
      <Container>
        <Row>
          <Col className="text-left mt-3 mb-3">
            <h3>ROCKETS</h3>
          </Col>
        </Row>

        <Row>
          <Col>
            <ul className="list">
              {
                rockets.map(rocket => (
                  <li key={rocket.id} className="listItem">
                    <RocketItem rocket={rocket} />
                  </li>
                ))
              }
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};

RocketsList.propTypes = {
  rockets:	PropTypes.array
};

RocketsList.defaultProps = {
  rockets: []
};