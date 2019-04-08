import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Row, Col, Card, Button, Modal, ListGroup } from 'react-bootstrap';
import classNames from 'classnames';
import Moment from 'react-moment';

export const LaunchItem = ({ launch: {flight_number, mission_name, launch_date_local, launch_year, launch_success, details,
rocket: {rocket_id, rocket_name, rocket_type}} }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Card bg="light" border="dark" text="black" className="mt-3">
        <Card.Body>
          <Row>
            <Col md={9} className="text-left">
              <Card.Title>Mission: <span className={classNames({
                'text-success': launch_success,
                'text-danger': !launch_success
              })}>{mission_name}</span></Card.Title>
              <Card.Text>Date: <Moment format="YYYY-MM-DD HH:mm">{launch_date_local}</Moment></Card.Text>
            </Col>
            <Col md={3}>
              <Button variant="secondary" onClick={() => setShow(!show)}>Launch Details</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Modal show={show} size="lg" centered aria-labelledby="example-modal-sizes-title-lg" onHide={() => setShow(!show)}>
        <Modal.Header closeButton>
          <Modal.Title><span className="text-dark">Mission:</span> {mission_name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Launch Details:</h4>
          <ListGroup>
            <ListGroup.Item>Flight Number: {flight_number}</ListGroup.Item>
            <ListGroup.Item>Launch Year: {launch_year}</ListGroup.Item>
            <ListGroup.Item>Launch Successful: <span className={classNames({
              'text-success': launch_success,
              'text-danger': !launch_success
            })}>{launch_success ? 'Yes' : 'No'}</span></ListGroup.Item>
            {details ? <ListGroup.Item>Details: {details}</ListGroup.Item> : null}
          </ListGroup>

          <h4>Rocket Details:</h4>
          <ListGroup>
            <ListGroup.Item>Rocket ID: {rocket_id}</ListGroup.Item>
            <ListGroup.Item>Rocket Name: {rocket_name}</ListGroup.Item>
            <ListGroup.Item>Rocket Type: {rocket_type}</ListGroup.Item>
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(!show)}>Close</Button>
        </Modal.Footer>
      </Modal>
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
