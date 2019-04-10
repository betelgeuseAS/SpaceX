import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from "react-bootstrap";

export const SortBar = () => {
  return (
    <>
      <Form className="text-left">
        <Form.Group controlId="formBasicMission">
          <Form.Label>Sort by Mission name or Date:</Form.Label>
          <br/>
          <Button type="button" variant="primary" size="lg"><i className="fa fa-sort-alpha-asc" /> Sort by name</Button>
          <Button type="button" variant="primary" size="lg"><i className="fa fa-sort-numeric-desc" /> Sort by date</Button>
        </Form.Group>
      </Form>
    </>
  );
};

SortBar.propTypes = {
  pastLaunchesData:	PropTypes.array.isRequired,
  update: PropTypes.func
};

SortBar.defaultProps = {
  pastLaunchesData:	[],
  update: () => {}
};
