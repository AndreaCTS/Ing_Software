import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import '../styles/wheel.css'

export default function ViewIDWheel() {
  const [wheel, setWheel] = useState({
    username: "",
    localidad: "",
    capacidadMax: "",
    cuposDisp: "",
    precio: "",
    telefono: "",
    description: ""
  });

  const [appliedSuccessfully, setAppliedSuccessfully] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    loadWheel();
  }, []);

  const loadWheel = async () => {
    const result = await axios.get(`http://localhost:8080/wheels/${id}`);
    setWheel(result.data);
    console.log(result.data)
  };

  const checkDisponibility = async () => {
      await axios.put(`http://localhost:8080/wheels/${id}`, wheel);
      setAppliedSuccessfully('Se ha aplicado al wheel de manera satisfactoria');
      setTimeout(() => {
        window.location.reload();
      }, 1000);
  };

  const pageStyle = {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={pageStyle}>
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
            <img
              src="\media\wheel-carro.ejemplo.jpg"
              alt="Car Image"
              className="img-fluid"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
            <p className="imageDescription">
              Descripción del wheel: {wheel.description}
            </p>
          </div>
          <div className="col-md-6">
            <div className="tableContainer mt-3">
              <h2 className="tableTitle">Detalles del wheel de {wheel.username}</h2>
              <div className="tableCard">
                <div className="tableHeader">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <b>Localidad: </b>
                      {wheel.localidad}
                    </li>
                    <li className="list-group-item">
                      <b>Capacidad máxima del vehículo: </b>
                      {wheel.capacidadMax}
                    </li>
                    <li className="list-group-item">
                      <b>Cupos disponibles: </b>
                      {wheel.cuposDisp}
                    </li>
                    <li className="list-group-item">
                      <b>Precio: </b>
                      {wheel.precio}
                    </li>
                    <li className="list-group-item">
                      <b>Contacto: </b>
                      {wheel.telefono}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <button className="buttonIDStyle mt-25" onClick={checkDisponibility}>Aplicar al wheel</button>
              {appliedSuccessfully && (
                <div className="overlay">
                  <div className="message">
                    <p>Se ha aplicado al wheel de manera satisfactoria</p>
                  </div>
                </div>
              )}
              <Link className="buttonIDStyle linkStyle" to={"/viewwheels"}>
                Regresar a la vista de wheels
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
