import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function HomeReport() {
const [reports, setReports] = useState([]);
const {id} = useParams()

  useEffect(() => {
    loadReports();
  }, []);

  const loadReports = async () => {
    const result = await axios.get("http://localhost:8080/reports");
    setReports(result.data);
  };

  const deleteReport = async (id)=>{
    await axios.delete(`http://localhost:8080/report/${id}`)
    loadReports()
  }

  return (
    <div className='container'>
      <div className='py-4'>
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Address</th>
              <th scope="col">Description</th>
              <th scope="col">Modality</th>
              <th scope="col">Action</th>

            </tr>
          </thead>
          <tbody>
            {reports.map((report, index) => (
            <tr>
              <th scope="row" key={index}>
                {index + 1}
              </th>
              <td>{report.address}</td>
              <td>{report.description}</td>
              <td>{report.modality}</td>
              
              <td>
                <Link
                  className="btn btn-primary mx-2"
                  to={`/viewreport/${report.id}`}
                >
                View
                </Link>
              </td>



            </tr>
          ))}
          </tbody>
        </table>
        <Link className="btn btn-primary" to="/addreports">
          Add Reports
        </Link>
        
      </div>
    
    </div>
  );
}
