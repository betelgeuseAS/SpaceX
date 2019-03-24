import React from 'react';

// import Button from 'react-bootstrap/Button';
// import { Button } from 'react-bootstrap';
import { Container, Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap';

import logo from '../img/SpaceX-Logo.svg';

import './Menu.sass';

export const Menu = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home" className="logo"><img src={logo} alt="SpaceX"/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Launches" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/1.1">All Launches</NavDropdown.Item>
            <NavDropdown.Item href="#action/1.3">Past Launches</NavDropdown.Item>
            <NavDropdown.Item href="#action/1.4">Upcoming Launches</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/1.5">Latest Launch</NavDropdown.Item>
            <NavDropdown.Item href="#action/1.6">Next Launch</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Rockets" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/2.1">All Rockets</NavDropdown.Item>
            <NavDropdown.Item href="#action/2.3">One Rocket</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Missions" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/2.1">All Missions</NavDropdown.Item>
            <NavDropdown.Item href="#action/2.3">One Mission</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

// export default Menu;