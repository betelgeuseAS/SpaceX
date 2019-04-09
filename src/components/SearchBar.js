import React from 'react';
import PropTypes from 'prop-types';

import { Row, Col, Form, Button } from 'react-bootstrap';

export const SearchBar = ({ term, data, update}) => {
  const dataSearch = event => {
    const value = event.target.value.toLowerCase();
    const filter = data.filter(item => {
      return item.mission_name.toLowerCase().includes(value);
    });

    update({
      data: filter,
      term: value
    });
  };

  return (
    <>
      <Form className="text-left">
        <Row>
          <Col md="9">
            <Form.Group controlId="formBasicMission">
              <Form.Label>Search by mission name:</Form.Label>
              <Form.Control value={term} onChange={dataSearch} type="text" size="lg" placeholder="Search by mission name..." />
            </Form.Group>
          </Col>
          <Col md="3">
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Sort by date:</Form.Label>
              <br/>
              <Button type="button" variant="primary" size="lg">Sort</Button>
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </>
  );
};

SearchBar.propTypes = {
  term: PropTypes.string,
  data: PropTypes.array,
  update: PropTypes.func
};

SearchBar.defaultProps = {
  term: '',
  data: [],
  update: () => {}
};