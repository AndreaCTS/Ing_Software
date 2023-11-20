import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddReport() {
  const modalityOptions = ["Theft", "Assault", "Fraud", "Kidnapping", "Other"];

  let navigate = useNavigate();

  const [report, setReport] = useState({
    description: "",
    address: "",
    modality: "",
    reportTime: new Date().toISOString(),
    incidentTime: "",
    userId: 0, // Aquí almacenaremos el ID del usuario
  });

  const { description, address, modality, incidentTime, userId } = report;

  const onInputChange = (e) => {
    setReport({ ...report, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      // No necesitas buscar al usuario por correo, ya tienes el ID
      const reportData = {
        description,
        address,
        modality,
        reportTime: report.reportTime, // Aquí se usa reportTime correctamente
        incidentTime,
        user: {
          id: userId,
        },
      };

      await axios.post("http://localhost:8080/report", reportData);

      navigate("/");
    } catch (error) {
      console.error("Error al agregar el informe:", error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Add Report</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="UserId" className="form-label">
                User ID
              </label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter user's ID"
                name="userId"
                value={userId}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Description" className="form-label">
                Description
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter report description"
                name="description"
                value={description}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Modality" className="form-label">
                Modality
              </label>
              <select
                className="form-control"
                name="modality"
                value={modality}
                onChange={(e) => onInputChange(e)}
              >
                <option value="" disabled>
                  Select modality
                </option>
                {modalityOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="Address" className="form-label">
                Address
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter report address"
                name="address"
                value={address}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="IncidentTime" className="form-label">
                Incident Date
              </label>
              <input
                type={"datetime-local"}
                className="form-control"
                name="incidentTime"
                value={incidentTime}
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
