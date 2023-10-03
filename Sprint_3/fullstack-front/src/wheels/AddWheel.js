import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddWheel() {
  let navigate = useNavigate();

  const [wheel, setWheels] = useState({
        username: "",
        localidad: "",
        capacidadMax: null,
        cuposDisp: null,
        precio: null,
        telefono: null
  });


  const { username, localidad, capacidadMax, cuposDisp, precio, telefono } = wheel;

  const onInputChange = (e) => {
    setWheels({ ...wheel, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/wheels/save", wheel);
    navigate("/viewwheels");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Publicación Wheel</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
                Username
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Ingrese su nombre de usuario"
                name="username"
                value={username}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Localidad" className="form-label">
                Localidad
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Ingrese la localidad del wheel"
                name="localidad"
                value={localidad}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="CapacidadMax" className="form-label">
                Capacidad Máxima
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Ingrese la capacidad máxima de pasajeros de su vehículo"
                name="capacidadMax"
                value={capacidadMax}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="CuposDisp" className="form-label">
                Cupos Disponibles
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Ingrese los cupos disponibles actuales"
                name="cuposDisp"
                value={cuposDisp}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Precio" className="form-label">
                Precio
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Ingrese el precio por pasajero"
                name="precio"
                value={precio}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Telefono" className="form-label">
                Teléfono
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Ingrese el teléfono de contacto"
                name="telefono"
                value={telefono}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Publicar
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/viewwheels">
              Cancelar
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}