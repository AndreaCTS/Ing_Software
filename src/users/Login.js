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
      const response = await axios.post(
        "http://localhost:8080/userAuth/authenticate",
        user
      );
      const userData = response.data;

      localStorage.setItem("access_token", userData.access_token);
      console.log("Token guardado en LocalStorage:", userData.access_token);

      // Log the userData object to the console for inspection
      console.log("userData:", userData);

      // Check if the user is an admin (adjust this condition as needed)
      if (userData.role === "ADMIN") {
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
    <div
      class="d-flex justify-content-center align-items-center"
      style={{ position: "relative",width:"100%", height: "100vh", overflow: "hidden" }}
      >
         {/* Imagen de fondo con efecto oscuro */}
         <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
            background: "url('../media/calle-chapinero.jpg') center/cover",
            filter: "brightness(0.2)", // Ajusta el brillo para el efecto oscuro
          }}
        ></div>
      
      <div
        className=" col-md-3  border border-light rounded p-4 mt-5 shadow"
        style={{ backgroundColor: "white" }}
      >
        
        <h2
          className=" font-weight-light text-center m-4 "
          style={{ color: "black" }}
        >
          Login
        </h2>

        <form onSubmit={(e) => onSubmit(e)}>
          <div className="mb-0">
            <label
              htmlFor="Email"
              className="form-label"
              style={{ color: "white", marginBottom: "5px" }}
            >
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
            <label
              htmlFor="Password"
              className="form-label"
              style={{ color: "white", marginBottom: "5px" }}
            >
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
          <button
            type="submit"
            className="btn btn-success"
            style={{
              backgroundColor: "black",
              color: "white",
              border: "1px solid black",
            }}
          >
            Submit
          </button>
          <Link
            className="btn btn-danger mx-2"
            to="/"
            style={{
              backgroundColor: "white",
              color: "black",
              border: "1px solid white",
            }}
          >
            Cancel
          </Link>
        </form>
      </div>
    </div>
  );
}
