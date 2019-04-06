import React from 'react';

// import Button from 'react-bootstrap/Button';
// import { Button } from 'react-bootstrap';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import { Link } from "react-router-dom";

import logo from '../img/SpaceX-Logo.svg';

import './Menu.sass';

export const Menu = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home" className="logo"><img src={logo} alt="SpaceX"/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Link</Nav.Link>
          <NavDropdown title="Launches" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/1.3">Past Launches</NavDropdown.Item>
            <NavDropdown.Item href="#action/1.4">Upcoming Launches</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as="button" className="topLink"><Link to="/">Next Launch</Link></NavDropdown.Item>
          </NavDropdown>
          <Nav.Item as="button" className="topLink textBold"><Link to="/rockets">Rockets</Link></Nav.Item>
          <Nav.Item as="button" className="topLink textBold"><Link to="/missions">Mission</Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
