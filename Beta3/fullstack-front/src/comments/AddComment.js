import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../styles/style.css';
export default function AddComment() {
  let navigate = useNavigate();
  const [comments, setComments] = useState([]);


  const { text } = comments;

  const onInputChange = (e) => {
    setComments({ ...comments, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/comments", comments);
    navigate("/viewcomments");
  };

  return (

    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Adding a comment</h2>
  
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Text" className="form-label">
                Description
              </label>
              <textarea
                className="form-control"
                placeholder="Enter your description"
                name="text"
                value={text}
                onChange={(e) => onInputChange(e)}
                rows="4" // Adjust the number of rows as needed
              />
            </div>
  
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/viewcomments">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>

  );
  }  