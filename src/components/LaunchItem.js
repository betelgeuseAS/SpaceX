import React from 'react';
import PropTypes from 'prop-types';

import { Row, Col, Card, Button } from 'react-bootstrap';
import classNames from 'classnames';
import Moment from 'react-moment';

export const LaunchItem = ({ launch: {flight_number, mission_name, launch_date_local, launch_success} }) => {
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
