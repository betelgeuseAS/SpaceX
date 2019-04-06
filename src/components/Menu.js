import React from 'react';
import { Link } from "react-router-dom";

// import Button from 'react-bootstrap/Button';
// import { Button } from 'react-bootstrap';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

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
            <NavDropdown.Item as="button"><Link to="/launches">All Launches</Link></NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as="button" className="topLink"><Link to="/">Next Launch</Link></NavDropdown.Item>
          </NavDropdown>
          <Nav.Item as="button" className="topLink textBold"><Link to="/rockets">Rockets</Link></Nav.Item>
          <Nav.Item as="button" className="topLink textBold"><Link to="/missions">Missions</Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
