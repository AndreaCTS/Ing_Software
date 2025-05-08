import axios from "axios";
import React, { useState,useEffect } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Link, useNavigate } from "react-router-dom";
import '../styles/AddReport.css';
import MapPicker from "./MapPicker";

export default function AddReport() {
  let navigate = useNavigate();

  const [crimeCategories, setCrimeCategories] = useState([]);
  const [report, setReport] = useState({
    crimeType: "",
    description: "",
    date: new Date(),
    latitude: "",
    longitude: "",
  });

  const updateLocation = (latitude, longitude) => {
    setReport((prevReport) => ({
      ...prevReport,
      latitude: latitude.toString(),
      longitude: longitude.toString(),
    }));
  };
  

  useEffect(() => {
    const fetchCrimeCategories = async () => {
      try {
        const response = await axios.get("http://localhost:8080/report");
        setCrimeCategories(response.data);
      } catch (error) {
        console.error("Error al obtener las categorías de crímenes:", error);
      }
    };

  fetchCrimeCategories();
  }, []);

  const { crimeType, description, date, latitude, longitude } = report;

  const onInputChange = (e) => {
    setReport({ ...report, [e.target.name]: e.target.value });
  };

  const onDateChange = (date) => {
    setReport({ ...report, date });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!crimeType || !date || !latitude || !longitude) {
      alert("Todos los campos obligatorios deben completarse.");
      return;
    }
    
    await axios.post("http://localhost:8080/report", report);
    navigate("/mapa");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-4 shadow">
          <h2 className="text-center mb-4">Reportar Delito</h2>
          <form onSubmit={(e) => onSubmit(e)}>

            <div className="mb-3">
              <label htmlFor="crimeType" className="form-label">
                Tipo de Crimen*
              </label>
              <select
                className="form-select"
                name="crimeType"
                value={crimeType}
                onChange={(e) => onInputChange(e)}
              >
              <option value="">Selecciona un tipo de crimen</option>
              {crimeCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
              ))}
            </select>
          </div>

          <div className="mb-3 form-floating">
            <label htmlFor="fecha" className="form-label">
              Fecha*
            </label>
            <DatePicker
               selected={date}
                onChange={onDateChange}
                dateFormat="dd/MM/yyyy"
              className="form-control"
            />
          </div>

            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Descripción (opcional)
              </label>
              <textarea
                className="form-control"
                placeholder="Enter the description"
                name="description"
                value={description}
                onChange={(e) => onInputChange(e)}
                maxLength={255}
              />
              <small className="form-text text-muted">
               {description.length} / 255 Caracteres
              </small>
            </div>
            
            <div>
            <label htmlFor="mapita" className="form-label" style={{ fontWeight: 'bold', margin: '100px' }}>
               Seleccione la Ubicación del Reporte
            </label>
            </div>

            <MapPicker updateLocation={updateLocation} />
          
            <div className="mb-3">
              <label htmlFor="latitude" className="form-label">
                Latitud
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter the latitude"
                name="latitude"
                value={latitude}
                onChange={(e) => onInputChange(e)}
                readOnly
              />
            </div>

            <div className="mb-3">
              <label htmlFor="longitude" className="form-label">
                Longitud
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter the longitude"
                name="longitude"
                value={longitude}
                onChange={(e) => onInputChange(e)}
                readOnly
              />
            </div>

            <div className="d-grid gap-2">
              <button className="btn btn-outline-primary" type="submit">
                Confirmar
              </button>
            </div>
            
            <div className="text-center mt-2">
              <Link to="/mapa" className="btn btn-outline-danger">
                Cancelar
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}