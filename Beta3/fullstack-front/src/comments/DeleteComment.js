import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Sidebar from "../layout/sidebar";

export default function DeleteComment() {
  const [comments, setComments] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadComments();
  }, []);

  const loadComments = async () => {
    const result = await axios.get("http://localhost:8080/comments/all");
    setComments(result.data);
  };

  const deleteComments = async (id) => {
    await axios.delete(`http://localhost:8080/comments/remove/${id}`);
    loadComments();
  };

  return (
    <div className='admin-page'>
      <Sidebar />
      <div className='admin-content'>
        <h2>Panel de Administración</h2>
        <div className='user-table'>
          <table className='table border shadow'>
            <thead>
              <tr>
                <th scope="col">S.N</th>
                <th scope="col">Description</th>
              </tr>
            </thead>
            <tbody>
              {comments.map((comment, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{comment.text}</td>
                  <td>
                    <button
                      className="btn btn-danger mx-2"
                      onClick={() => deleteComments(comment.id)}
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
      </div>
    </div>
  );
}
