import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Button, Form } from "react-bootstrap";

let sortedOptions = { launch_date_unix: true, mission_name: true };
export const SortBar = ({ initialData, data, update }) => {
  const sort = (type) => {
    const isSorted = sortedOptions[type];
    let direction = isSorted ? 1 : -1;
    const sorted = data.slice().sort((a, b) => {
      if (a[type] === b[type]) { return 0; }
      return a[type] > b[type] ? direction : direction * -1;
    });
    sortedOptions[type] = !isSorted;

    update({
      data: sorted
    });
  };

  const reset = () => {
    update({
      data: initialData,
      term: ''
    });
  };

  return (
    <>
      <Form className="text-right">
        <Form.Group controlId="formBasicMission">
          <Form.Label>Sort by Mission name or Date:</Form.Label>
          <br/>
          <Button type="button" variant="primary" size="lg" className="mr-1" onClick={() => sort('mission_name')}><i className="fa fa-sort-alpha-asc" /> Sort by name</Button>
          <Button type="button" variant="primary" size="lg" className="mr-1" onClick={() => sort('launch_date_unix')}><i className="fa fa-sort-numeric-desc" /> Sort by date</Button>
          <Button type="button" variant="danger" size="lg" onClick={reset.bind(this)}><i className="fa fa-ban" /> Reset</Button>
        </Form.Group>
      </Form>
    </>
  );
};

SortBar.propTypes = {
  initialData:	PropTypes.array,
  data: PropTypes.array.isRequired,
  update: PropTypes.func
};

SortBar.defaultProps = {
  initialData:	[],
  data: [],
  update: () => {}
};
