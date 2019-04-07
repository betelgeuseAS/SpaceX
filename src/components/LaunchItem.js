import React from 'react';
import PropTypes from 'prop-types';

import { Row, Col, Card, Button } from 'react-bootstrap';

export const LaunchItem = ({ launch: {flight_number, mission_name, launch_date_local, launch_success} }) => {
  return (
    <>
      <Card bg="light" border="dark" text="black" className="m-t-10">
        <Card.Body>
          <Row>
            <Col md={9} className="text-left">
              <Card.Title>Mission: {mission_name}</Card.Title>
              <Card.Text>Date: {launch_date_local}</Card.Text>
            </Col>
            <Col md={3}>
              <Button variant="secondary">Launch Details</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

LaunchItem.propTypes = {
  launch:	PropTypes.object
};

LaunchItem.defaultProps = {
  pastLaunchesData:	{}
};

export default LaunchItem;
