import React, { useState } from "react";
import "../admin/Admin.css";
import axios from "axios"; // Import Axios
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      console.log(email, password);
      const response = await axios.post(
        "http://localhost:8800/admin/adminlogin",
        { email, password }, // Use object shorthand syntax here
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        navigate("/Products");
      } else {
        alert("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <div className="container">
        <h2>Admin Login</h2>
        <form action="" className="main">
          <div className="form-group">
            <label htmlFor="username">Email Address:</label>
            <input
              type="text"
              id="username"
              name="username"
              required
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <div>
              <input
                type="password"
                id="password"
                name="password"
                required
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div className="form-group">
              <button className="login" type="submit" onClick={handleLogin}>
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AdminLogin;
