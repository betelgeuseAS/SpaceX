import React from 'react';

import { Menu } from './Menu';

import Error404 from '../img/Error404.png';

import './Whoops404.sass';

export const Whoops404 = ({ location }) => {
  return (
    <div>
      <Menu />
      <div className="whoops404">
        <img src={Error404} alt="Error 404"/>
        <h1>Resource not found at <code>'{location.pathname}'</code></h1>
      </div>
    </div>
  );
};
