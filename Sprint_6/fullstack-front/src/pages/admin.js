import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Sidebar from '../layout/sidebar'; // Asegúrate de que la ruta sea correcta

export default function Admin() {
  const [users, setUsers] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8080/users");
      setUsers(response.data);
    } catch (error) {
      console.error('Error al obtener la lista de usuarios', error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/user/${id}`);
      // Actualiza la lista de usuarios localmente sin recargar todos los usuarios
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    } catch (error) {
      console.error('Error al eliminar el usuario', error);
    }
  };

  return (
    <div className='admin-page'>
      <Sidebar />
      <div className='admin-content'>
        <h2>Panel de Administración</h2>
        <div className='user-table'>
          <table className='table border shadow'>
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Name</th>
                <th scope='col'>Username</th>
                <th scope='col'>Email</th>
                <th scope='col'>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id}>
                  <th scope='row'>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link
                      className='btn btn-primary mx-2'
                      to={`/viewuser/${user.id}`}
                    >
                      View
                    </Link>
                    <Link
                      className='btn btn-outline-primary mx-2'
                      to={`/edituser/${user.id}`}
                    >
                      Editar
                    </Link>
                    <button
                      className='btn btn-danger mx-2'
                      onClick={() => deleteUser(user.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

