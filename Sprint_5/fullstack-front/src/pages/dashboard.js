import React, { Component } from 'react';
import Sidebar from '../layout/sidebar';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
        userCount: 0,// Puedes inicializar el estado con datos necesarios para la página de administrador
    };
  }

  componentDidMount() {
    // Realiza una solicitud a la API de tu backend para obtener la cantidad de usuarios
    fetch('http://localhost:8080/users/count') // Ajusta la URL de la API según tu configuración
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error al obtener la cantidad de usuarios');
        }
        return response.json();
      })
      .then((data) => {
        this.setState({ userCount: data }); // Actualiza el estado con la cantidad de usuarios
      })
      .catch((error) => {
        console.error('Error al obtener la cantidad de usuarios', error);
      });
  }

  render() {
    return (
        <div className="admin-page">
          <Sidebar />
          <div className="content">
            <h2>Panel de Administración</h2>
            <div className="user-count">
            <img src="../media/users2.png" alt="Avatar de usuarios" />
            <h3>Cantidad de Usuarios</h3>
            <p>{this.state.userCount}</p>
            </div>
            {/* Agrega aquí la interfaz de usuario y las funcionalidades de administración */}
          </div>
        </div>
      );
    }
}

export default Dashboard;
