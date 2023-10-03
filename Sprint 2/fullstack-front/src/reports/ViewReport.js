import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

// Función para formatear la fecha
function formatDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

export default function ViewReport() {
  const [report, setReport] = useState({
    address: "",
    description: "",
    modality:"",
    reportTime:"",
    incidentTime:"",
    user: {
      id: null,
    },

  });
  
  const [user, setUser] = useState({
    username: "",
    email: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadReport();
  }, []);

  const loadReport = async () => {
    const result = await axios.get(`http://localhost:8080/report/${id}`);
    setReport(result.data);

    loadUser(result.data.user.id);
  };

  const loadUser = async (userId) => {
    try {
      const response = await axios.get(`http://localhost:8080/user/${userId}`);
      setUser(response.data);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4"><b>Report Details</b></h2>

          <div className="card">
            <div className="card-header">
              <b>Details of report id : </b>
              {report.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item"style={{ textAlign: "left" }}> 
                  <b>Address : </b>
                  {report.address}
                </li>
                <li className="list-group-item"style={{ textAlign: "left" }}>
                  <b>Description : </b>
                  {report.description}
                </li>
                <li className="list-group-item "style={{ textAlign: "left" }}>
                  <b>Modality : </b>
                  {report.modality}
                </li>
                <li className="list-group-item"style={{ textAlign: "left" }}>
                  <b>Incident Date : </b>
                  {formatDate(report.incidentTime)}
                </li>
                <li className="list-group-item"style={{ textAlign: "left" }}>
                  <b>Report Date : </b>
                  {formatDate(report.reportTime)}
                </li>
                <li className="list-group-item"style={{ textAlign: "left" }}>
                  <b>User Email : </b>
                  {user.email}
                </li>
              </ul>
            </div>
          </div>

          <Link className="btn btn-primary my-2" to={"/homeReports"}>
            Back to Reports
          </Link>
        </div>
      </div>
    </div>
  );
}