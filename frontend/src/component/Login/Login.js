import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Usernav from "../Navbar/Usernav";
import Footer from "../Footer/Footer";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handlePasswordToggle = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  const goToRegisterPage = () => {
    navigate("/Register");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginAuth = (e) => {
    console.log(email, password);
    e.preventDefault();
    axios
      .post("http://localhost:8800/auth/login", { email, password })
      .then((res) => {
        localStorage.setItem("userId", res.data.user._id);
        localStorage.setItem("userName", res.data.user.name);
        localStorage.setItem("userEmail", res.data.user.email);
        localStorage.setItem("userNumber", res.data.user.phone);
        navigate("/");
        toast.success("Login Successful", {
          icon: "✅",
          position: "top-center",
          autoClose: 4000,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error("Invalid credentials", {
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  };

  return (
    <>
      <Usernav />
      <div className="container">
        <h2>User Login</h2>
        <form className="main">
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
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              name="password"
              required
              value={password}
              onChange={handlePasswordChange}
            />
            <span
              onClick={handlePasswordToggle}
              style={{
                position: "relative",
                top: "-32px",
                color: "black",
                right: "-330px",
                zIndex: "3",
              }}
            >
              {passwordVisible ? (
                <i className="far fa-eye-slash"></i>
              ) : (
                <i className="far fa-eye"></i>
              )}
            </span>
            <p onClick={goToRegisterPage} style={{ cursor: "pointer" }}>
              Not Registered? Click to sign up
            </p>
            <div className="form-group">
              <button className="login" type="submit" onClick={handleLoginAuth}>
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Login;
