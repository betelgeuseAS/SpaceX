import React from 'react';
import PropTypes from 'prop-types';

// import Button from 'react-bootstrap/Button';
// import { Button } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';

const PastLaunches = ({ pastLaunchesData }) => {
  return (
    <>
      <Container className="nextLaunch">
        <Row>
          <Col className="text-left">
            <h3>LATEST LAUNCH</h3>
          </Col>
        </Row>
      </Container>
    </>
  );
};

PastLaunches.propTypes = {
  pastLaunchesData:	PropTypes.array.isRequired
};

PastLaunches.defaultProps = {
  pastLaunchesData:	[]
};

export default PastLaunches;
