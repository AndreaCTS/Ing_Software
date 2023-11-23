import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { isEmail } from 'validator';

export default function AddUser() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    role: "USER",
  });

  const [error, setError] = useState("");

  const { name, username, email, password, role } = user;

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setError(""); // Limpiar errores previos cuando cambia la entrada

    // Validación específica para el campo de correo electrónico
    if (name === "email") {
      if (!isEmail(value)) {
        setError("Ingrese una dirección de correo electrónico válida.");
      }
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/userAuth/register", user);
      navigate("/login");
    } catch (err) {
      if (err.response && err.response.status === 400) {
        setError("Usuario con este correo electrónico o nombre de usuario ya existe.");
      } else {
        setError("Se produjo un error al procesar su solicitud.");
      }
    }
  };

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setUser({ ...user, role: selectedValue });
  };

  return (   
    <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh", backgroundColor: "white" }}>
      <div className="col-md-6 border border-dark rounded p-4 mt-5 shadow-lg" style={{ backgroundColor: '#afa8a8' }}>
        <h2 className="text-center m-4" style={{ color: 'black' }}>Registrar Usuario</h2>
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}

        <form onSubmit={(e) => onSubmit(e)}>
          <div className="mb-3">
            <label htmlFor="Name" className="form-label" style={{ color: 'black' }}>
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Ingrese su nombre"
              name="name"
              value={name}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Username" className="form-label" style={{ color: 'black' }}>
              Nombre de Usuario
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Ingrese su nombre de usuario"
              name="username"
              value={username}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Email" className="form-label" style={{ color: 'black' }}>
              Correo Electrónico
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Ingrese su dirección de correo electrónico"
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Password" className="form-label" style={{ color: 'black' }}>
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Ingrese su contraseña"
              name="password"
              value={password}
              onChange={(e) => onInputChange(e)} 
            />
          </div>
          {/* ...otros campos de formulario */}
          <button type="submit" className="btn btn-success">
            Enviar
          </button>
          <Link className="btn btn-danger mx-2" to="/">
            Cancelar
          </Link>
        </form>
      </div>
    </div>
  );
}
