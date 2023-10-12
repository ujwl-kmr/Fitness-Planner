import React, { useEffect, useState } from "react";
import "../Navbar/Adminnav.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Adminnavbar() {
  const [toggelhistoryAdminbutton, sethistoryAdminbutton] = useState(false);
  // const [currentPath, setCurrentPath] = useState('/Admin');
  const navigate = useNavigate();
  const handelLogout = () => {
    localStorage.removeItem("AdminName");
    localStorage.removeItem("Adminpassword");

    navigate("/");
  };

  const handleButtonClick = () => {
    navigate("/History");
  };
  const gotodashboard = () => {
    navigate("/Admin");
  };

  const gotoProducts = () => {
    navigate("/Products");
  };

  console.log("admin login", toggelhistoryAdminbutton);
  return (
    <>
      <header class="adminheader">
        {/* <a href="#" class="logo"> */}
        <span class="Fitness">
          Fitness <h4 className="planner">Planner</h4>
        </span>
        {/* </a> */}

        <div className="right">
          <button onClick={gotoProducts}>Products</button>
          <button className="dashboardBtn" onClick={gotodashboard}>
            Custom Plan
          </button>
          <button className="historyBtn" onClick={handleButtonClick}>
            History
          </button>

          <button onClick={handelLogout}>Logout</button>
        </div>
      </header>
    </>
  );
}

export default Adminnavbar;
