import React from 'react';
import PropTypes from 'prop-types';

import { Card } from 'react-bootstrap';
import classNames from "classnames";

import './RocketItem.sass';

export const RocketItem = ({ rocket: {rocket_name, active, description,
  height, diameter, mass, boosters, success_rate_pct,
  engines,
  payload_weights,
  landing_legs,
  wikipedia} }) => {
  return (
    <>
      <Card style={{ width: '20rem' }} className="text-left">
        <Card.Header>{rocket_name}</Card.Header>

        <Card.Body>
          <Card.Text>Status: <span className={classNames({
            'text-success': active,
            'text-danger': !active
          })}>{ active ? 'Active' : 'Inactive' }</span></Card.Text>
          <Card.Subtitle className="mb-2 text-muted">{description}</Card.Subtitle>

          <Card.Title className="rocketTitle">Specs</Card.Title>
          <Card.Text className="rocketContent">
            <ul>
              <li>Height: {height.meters}m</li>
              <li>Diameter: {diameter.meters}m</li>
              <li>Mass: {mass.kg}kg</li>
              <li>Boosters: {boosters}</li>
              <li>Success Rate: {success_rate_pct}%</li>
            </ul>
          </Card.Text>

          <Card.Title className="rocketTitle">Engines</Card.Title>
          <Card.Text className="rocketContent">
            <ul>
              <li>Engines: {engines.number}</li>
              <li>Type: {engines.type}</li>
              <li>Version: {engines.version}</li>
              <li>Propellant 1: {engines.propellant_1}</li>
              <li>Propellant 2: {engines.propellant_2}</li>
            </ul>
          </Card.Text>

          <Card.Title className="rocketTitle">Payload Weights</Card.Title>
          <Card.Text className="rocketContent">
            <ul>
              {
                payload_weights.map(item => (
                  <>
                    <li>Name: {item.name}</li>
                    <li>Weight: {item.kg}kg</li>
                  </>
                ))
              }
            </ul>
          </Card.Text>

          <Card.Title className="rocketTitle">Landing Legs</Card.Title>
          <Card.Text className="rocketContent">
            <ul>
              <li>Number: {landing_legs.number}</li>
              <li>Material: {landing_legs.material}</li>
            </ul>
          </Card.Text>
        </Card.Body>

        <Card.Footer>
          <Card.Link href={wikipedia} target="_blank">Read about {rocket_name} on Wikipedia</Card.Link>
        </Card.Footer>
      </Card>
    </>
  );
};

RocketItem.propTypes = {
  rocket:	PropTypes.object
};

RocketItem.defaultProps = {
  rocket:	{}
};
