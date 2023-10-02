import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewReport() {
  const [report, setReport] = useState({
    address: "",
    description: "",
    modality:"",
    reportTime:"",
    incidentTime:"",


  });

  const { id } = useParams();

  useEffect(() => {
    loadReport();
  }, []);

  const loadReport = async () => {
    const result = await axios.get(`http://localhost:8080/report/${id}`);
    setReport(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Report Details</h2>
          <div className="card">

            <div className="card-header">
              Details of report id : {report.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Address:</b>
                  {report.address}
                </li>
                <li className="list-group-item">
                  <b>Description:</b>
                  {report.description}
                </li>
                <li className="list-group-item">
                  <b>Modality:</b>
                  {report.modality}
                </li>
                <li className="list-group-item">
                  <b>Incident Time:</b>
                  {report.incidentTime}
                </li>
                <li className="list-group-item">
                  <b>Report Time:</b>
                  {report.reportTime}
                </li>
              </ul>
            </div>

            <div className="card-header">
              Details of report id : {report.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Address:</b>
                  {report.address}
                </li>
              </ul>
            </div>






          </div>
          <Link className="btn btn-primary my-2" to={"/admin"}>
            Back to Admin
          </Link>
        </div>
      </div>
    </div>
  );
}