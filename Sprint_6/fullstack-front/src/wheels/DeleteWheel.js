import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function DeleteWheels() {
  const [wheels, setWheels] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadWheels();
  }, []);

  const loadWheels= async () => {
    const result = await axios.get("http://localhost:8080/wheels/all");
    setWheels(result.data);
  };

  const deleteWheels = async (id) => {
    await axios.delete(`http://localhost:8080/wheels/remove/${id}`);
    loadWheels();
  };

  return (
    <div className="container" style={{backgroundColor:'#afa8a8'}}>
      
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">S.N</th>
              <th scope="col">Usuario</th>
              <th scope="col">Localidad</th>
              <th scope="col">Capacidad </th>
              <th scope="col">Cupos </th>
              <th scope="col">Acción </th>
            </tr>
          </thead>
          <tbody>
            {wheels.map((wheel, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{wheel.username}</td>
                <td>{wheel.localidad}</td>
                <td>{wheel.capacidadMax}</td>
                <td>{wheel.cuposDisp}</td>
                <td>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteWheels(wheel.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link className="btn btn-primary my-2" to={"/admin"}>
            Back to Admin
        </Link>
      </div>
    
  );
}
