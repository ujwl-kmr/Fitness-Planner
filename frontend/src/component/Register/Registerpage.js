import React, { useState } from "react";
import "../Register/Registerpage.css";
import Usernav from "../Navbar/Usernav";
import Footer from "../Footer/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function Registerpage() {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setphone] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const indianphone = /^[6-9]\d{9}$/;
  const handlePasswordToggle = () => {
    setPasswordVisible((prevState) => !prevState);
  };
  const navigate = useNavigate();
  const handelnamechange = (e) => {
    setname(e.target.value);
  };
  const handelemailchange = (e) => {
    setEmail(e.target.value);
  };
  const handelpnumchange = (e) => {
    setphone(e.target.value);
  };
  const handelpasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handelregister = async (e) => {
    e.preventDefault();

    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    const isValidPassword = passwordRegex.test(password);
    if (!isValidPassword) {
      toast.error(
        "Password must contain at least 8 characters including alphabets, numbers, and special symbols",
        {
          position: "top-center",
          autoClose: 4000,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
        }
      );
      return;
    }

    if (!indianphone.test(phone)) {
      toast.error("Please enter a valid Indian phone number", {
        position: "top-center",
        autoClose: 4000,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
      });
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(email);
    if (!isValidEmail) {
      toast.error("Please enter a valid email address", {
        position: "top-center",
        autoClose: 4000,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
      });
      return;
    }
    console.log("cliked");
    navigate("/");
    await axios
      .post("http://localhost:8800/user/reg", { name, email, phone, password })
      .then((response) => {
        // Handle successful authentication here
        // dispatch(Login(true));
        toast.success("registration successful", {
          icon: "🚀",
          position: "top-center",
          autoClose: 4000,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
        });
      })
      .catch((error) => {
        // Handle authentication error here
        console.log(error);
      });
  };

  return (
    <>
      <Usernav />
      <div class="container">
        <h2>Sign Up</h2>
        <form>
          <div class="form-group">
            <label for="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              pattern="[A-Za-z]+"
              required
              value={name}
              onChange={handelnamechange}
            />
          </div>
          <div class="form-group">
            <label for="email">Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={email}
              onChange={handelemailchange}
            />
          </div>
          <div class="form-group">
            <label for="phone">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              pattern="[0-9]{10}"
              required
              value={phone}
              onChange={handelpnumchange}
            />
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              name="password"
              pattern="^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$"
              required
              value={password}
              onChange={handelpasswordChange}
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
          </div>
          <div class="form-group">
            <button type="submit" onClick={handelregister}>
              Sign Up
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Registerpage;
