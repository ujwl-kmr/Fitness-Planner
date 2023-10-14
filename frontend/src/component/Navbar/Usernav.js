import React from "react";
import "../Navbar/Usernav.css";
import { Link, useNavigate } from "react-router-dom";


function Usernav() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userNumber");
    navigate("/");
  };

  const userId = localStorage.getItem("userId");

  return (
    <header className="header">
      <span className="Fitness">
        Fitness
        <h4 className="planner">Planner</h4>
      </span>

      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/Supplements">Supplements</Link>
        <Link to="/article">Articles</Link>
        <Link to="/customplan">Custom Plan</Link>
        <Link to="/aboutus">About Us</Link>
        {userId ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <Link to="/Login">Login</Link>
        )}
        <Link to="/Cart">
          <i className="fa fa-shopping-cart" aria-hidden="true"></i>
        </Link>
      </nav>
    </header>
  );
}

export default Usernav;
