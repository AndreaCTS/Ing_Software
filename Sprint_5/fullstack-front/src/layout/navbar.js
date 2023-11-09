import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

export const CustomNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="md" fixed="top">
      <Navbar.Brand>Seguridad Chapinero USA</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <img src='../media/menu.png' alt="Menu" /> {/* Utiliza la imagen del ícono */}
      </Navbar.Toggle>

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Item>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </Nav.Item>
        </Nav>

        <Nav>
        <NavDropdown title={<img src='../media/menu.png' alt="Menu" />} id="basic-nav-dropdown">
            <NavDropdown.Item href="#">Mis Comentarios</NavDropdown.Item>
            <NavDropdown.Item href="#">Mis Wheels</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
