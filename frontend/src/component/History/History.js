import React, { useEffect, useState } from "react";
import Adminnavbar from "../Navbar/Adminnavbar";
import Footer from "../Footer/Footer";
import axios from "axios";
import "../admin/Admin.css";

function History() {
  const [historyData, setHistoryData] = useState([]);

  useEffect(() => {
    const fetchHistoryData = async () => {
      try {
        const responseMessage = await axios.get(
          "http://localhost:8800/history/"
        );
        setHistoryData(responseMessage.data); // Assuming response is an array of history data
        console.log(responseMessage.data);
      } catch (error) {
        console.error("Error fetching history data:", error);
      }
    };

    fetchHistoryData();
  }, []);

  return (
    <>
      <Adminnavbar />
      <div className="admin">
        <div className="adminHeader">
          <h3>Admin Solved Query</h3>
        </div>

        {historyData.map((details) => {
          return (
            details.status === false && (
              <div className="adminContent" key={details.user_id}>
                <div className="userName">
                  <h3>Client Email:</h3>
                  <h5>{details.email}</h5>
                </div>
                <div className="historyContent">
                  <h3>Response</h3>
                  <h5>{details.response}</h5>
                </div>
              </div>
            )
          );
        })}
      </div>
      <Footer />
    </>
  );
}

export default History;
