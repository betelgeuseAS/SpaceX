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
          <Col>
            <ul>
              {
                rockets.map(rocket => (
                  <li key={rocket.id}>
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