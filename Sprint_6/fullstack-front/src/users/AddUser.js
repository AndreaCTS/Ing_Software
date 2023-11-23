import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddUser() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    role: "USER",
  });

  const [error, setError] = useState("");

  const { name, username, email, password, role } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setError(""); // Clear any previous errors when input changes
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/userAuth/register", user);
      navigate("/login");
    } catch (err) {
      if (err.response && err.response.status === 400) {
        setError("User with this email or username already exists.");
      } else {
        setError("An error occurred while processing your request.");
      }
    }
  };

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setUser({ ...user, role: selectedValue });
  };

  return (   
    <div  className="d-flex justify-content-center align-items-center" style={{ height: "100vh", backgroundColor: "white" }}>
      
        <div className=" col-md-6  border border-dark rounded p-4 mt-5  shadow-lg  " style={{backgroundColor:'#afa8a8'}}  >
          <h2 className="text-center m-4" style={{color:'black'}}>Register User</h2>
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label" style={{color:'black'}}>
                Name
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
              <label htmlFor="Username" className="form-label" style={{color:'black'}}>
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
              <label htmlFor="Email" className="form-label" style={{color:'black'}}>
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
            <div className="mb-3">
              <label htmlFor="Password" className="form-label" style={{color:'black'}}>
                Password
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
                name="password"
                value={password}
                onChange={(e) => onInputChange(e)} 
              />
            </div>
            {/*
            <div className="mb-3">
              <label htmlFor="Role" className="form-label">
                Role
              </label>
              <select name="role" value={role}  onChange={handleChange}>
                  <option value="USER">User</option>
                  <option value="ADMIN">Admin</option>
              </select>
            </div>
          */}
            <button type="submit" className="btn btn-success">
              Submit
            </button>
            <Link className="btn btn-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
        </div>
     
    
  );
}
