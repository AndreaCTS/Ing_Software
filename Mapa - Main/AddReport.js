import axios from "axios";
import React, { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Link, useNavigate } from "react-router-dom";

export default function AddReport() {
  let navigate = useNavigate();

  const [report, setReport] = useState({
    crimeType: "",
    description: "",
    date: new Date(),
    latitude: "",
    longitude: "",
  });

  const { crimeType, description, date, latitude, longitude } = report;

  const onInputChange = (e) => {
    setReport({ ...report, [e.target.name]: e.target.value });
  };

  const onDateChange = (date) => {
    setReport({ ...report, date });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/report", report);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register Report</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="crimeType" className="form-label">
                Tipo de Crimen
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="crimeType"
                value={crimeType}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
            <label htmlFor="date" className="form-label">
                Fecha
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
                description
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your username"
                name="description"
                value={description}
                onChange={(e) => onInputChange(e)}
              />
            </div>


            <div className="mb-3">
              <label htmlFor="latitude" className="form-label">
                latitude
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your e-mail address"
                name="latitude"
                value={latitude}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="longitude" className="form-label">
                longitude
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your e-mail address"
                name="longitude"
                value={longitude}
                onChange={(e) => onInputChange(e)}
              />
            </div>


            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}