import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from '../layout/sidebar';
import '../styles/adduser.css';

export default function AddUser() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/user", user);
    navigate("/admin");
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-center align-items-center">
          <h2 className="form-title">Add User </h2>
            <form onSubmit={(e) => onSubmit(e)} className="w-75 form-container">
              
              <div className="mb-3">
                <label htmlFor="Name" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                  name="name"
                  value={name}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your username"
                  name="username"
                  value={username}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Email" className="form-label">
                  E-mail
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your e-mail address"
                  name="email"
                  value={email}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-outline-primary">
                  Submit
                </button>
                <Link className="btn btn-outline-danger mx-2" to="/dashboard">
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}
