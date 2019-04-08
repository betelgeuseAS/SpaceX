import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Row, Col, Card, Button, Modal } from 'react-bootstrap';
import classNames from 'classnames';
import Moment from 'react-moment';

export const LaunchItem = ({ launch: {flight_number, mission_name, launch_date_local, launch_success} }) => {
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

      <Modal show={show} onHide={() => setShow(!show)}>
        <Modal.Header closeButton>
          <Modal.Title>{flight_number}</Modal.Title>
        </Modal.Header>
        <Modal.Body>modal</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(!show)}>
            Close
          </Button>
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
