import React from 'react';
import PropTypes from 'prop-types';

import { Container, Row, Col, Card } from 'react-bootstrap';

import './Mission.sass';

export const Mission = ({ mission : {mission_name, manufacturers,
  wikipedia, website,
  description} }) => {
  return (
    <>
      <Container>
        <Row className="mission">
          <Col>
            <Card>
              <Card.Header>{mission_name}</Card.Header>

              <Card.Body>
                <Card.Title>Manufacturers: {manufacturers}</Card.Title>
                <Card.Text className="missionDescription">{description}</Card.Text>
              </Card.Body>

              <Card.Footer>
                <Card.Link href={wikipedia} className="link" target="_blank">Read about {mission_name} on Wikipedia</Card.Link>
                <br/>
                <Card.Link href={website} className="link" target="_blank">Website</Card.Link>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

Mission.propTypes = {
  mission:	PropTypes.object
};

Mission.defaultProps = {
  mission: {}
};
