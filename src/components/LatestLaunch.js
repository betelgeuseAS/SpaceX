import React from 'react';
import PropTypes from 'prop-types';

// import Button from 'react-bootstrap/Button';
// import { Button } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';

const LatestLaunch = ({ latestLaunch }) => {
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

LatestLaunch.propTypes = {
  latestLaunch:	PropTypes.object.isRequired
};

LatestLaunch.defaultProps = {
  latestLaunch:	{}
};

export default LatestLaunch;
