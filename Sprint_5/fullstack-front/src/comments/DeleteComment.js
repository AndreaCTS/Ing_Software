import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function DeleteComment() {
  const [comments, setComments] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadComments();
  }, []);

  const loadComments= async () => {
    const result = await axios.get("http://localhost:8080/comments/all");
    setComments(result.data);
  };

  const deleteComments = async (id) => {
    await axios.delete(`http://localhost:8080/comments/remove/${id}`);
    loadComments();
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">S.N</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            {comments.map((comment, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
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
  );
}