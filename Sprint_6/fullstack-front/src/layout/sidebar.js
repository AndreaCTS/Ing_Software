import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde React Router si estás utilizando enrutamiento
import '../styles/sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h3>Menú de Administrador</h3>
      <ul>
        <li>
        <Link to="/dashboard">
            <button className="sidebar-button">Home</button>
        </Link>
        </li>
        <li>
        <Link to="/admin">
            <button className="sidebar-button">Gestionar Usuarios</button>
        </Link>
        </li>
        <li>
        <Link to="/adduser">
            <button className="sidebar-button">Añadir Usuario</button>
        </Link>
        </li>
        <li>
        <Link to="/deletecomments">
            <button className="sidebar-button">Gestionar Comentarios</button>
        </Link>
        </li>
        <li>
        <Link to="/deletewheels">
            <button className="sidebar-button">Gestionar Wheels</button>
        </Link>
        </li>
        <li>
        <Link to="/admin">
            <button className="sidebar-button">Gestionar Feeback</button>
        </Link>
        </li>
        {/* Agrega más elementos de menú según tus necesidades */}
      </ul>
    </div>
  );
}

export default Sidebar;
