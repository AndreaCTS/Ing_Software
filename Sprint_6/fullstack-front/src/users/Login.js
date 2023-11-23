import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/userAuth/authenticate", user);
      const userData = response.data;
  
      // Log the userData object to the console for inspection
      console.log("userData:", userData);
  
      // Check if the user is an admin (adjust this condition as needed)
      if (userData.role === 'ADMIN') {
        // Redirect the admin to the admin page
        navigate("/admin");
      } else {
        // Redirect non-admin users to a different page
        navigate("/mainmenu");
      }
    } catch (error) {
      // Handle login errors
      console.error("Login error:", error);
    }
  };

  return (
        <div  class="d-flex justify-content-center align-items-center" style={{height: "100vh",backgroundColor: "white" }}>
        <div className=" col-md-6  border border-light rounded p-4 mt-5 shadow" style={{backgroundColor:"#333333"}}>
          <h2 className=" font-weight-light text-center m-4 " style={{color:'white'}}>Login</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label" style={{color:'white'}}>
                E-mail
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your e-mail address"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Password" className="form-label" style={{color:'white'}}>
                Password
              </label>
              <input
                type={"password"}
                className="form-control"
                placeholder="Enter your password"
                name="password"
                value={password}
                onChange={(e) => onInputChange(e)}
              />
            </div>
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
