import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import axios from 'axios';
import '../styles/estilos.css';

const logout = async () => {
  try {
    // Obtener el token almacenado en localStorage
    const token = localStorage.getItem('token');

    console.log("Token recibido en logout:", token);

    if (!token) {
      // Manejar la situación si no hay token disponible
      console.error('No se encontró el token en el almacenamiento local');
      return;
    }

    // Realizar la solicitud de logout con el token
    await axios.post('http://localhost:8080/logout', null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    });

    // Eliminar el token almacenado después del logout
    localStorage.removeItem('token');
  } catch (error) {
    console.error('Error al cerrar sesión:', error);
  }

};

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
      <div className="collapse navbar-collapse justify-content-end">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link logout-link" to="/" onClick={logout}>
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </Navbar>
  );
};

export default CustomNavbar;
