import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../styles/style.css';

export default function AddComment() {
  let navigate = useNavigate();
  const [comments, setComments] = useState({ text: "" });

  const { text } = comments;

  const onInputChange = (e) => {
    const { name, value } = e.target;

    // Check if the input exceeds the character limit
    if (name === "text" && value.length > 50) {
      return;
    }

    setComments({ ...comments, [name]: value });
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
              <label htmlFor="text" className="form-label">
                Description (Max 50 characters)
              </label>
              <textarea
                className="form-control"
                placeholder="Enter your description"
                name="text"
                value={text}
                onChange={(e) => onInputChange(e)}
                rows="4"
                maxLength="50" // Set the maximum character limit
              />
              <div className="text-end mt-2">
                <span className="text-muted">{text.length}/50</span>
              </div>
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