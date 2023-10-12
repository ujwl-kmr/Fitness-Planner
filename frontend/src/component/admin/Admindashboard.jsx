import React, { useState, useEffect, useRef } from "react";
import "../admin/Admin.css";
import "../admin/upload.scss";
import Footer from "../Footer/Footer";
import Adminnavbar from "../Navbar/Adminnavbar";
import axios from "axios";
import { RxCross2, RxCrosshair2 } from "react-icons/rx";
import emailjs from "emailjs-com";

function Admindashboard() {
  // const componentRef = useRef();
  const [showText, setShowText] = useState(false);
  const [userDetails, setUserDetails] = useState([]);
  const [message, setMessage] = useState("");
  const [uploadId, setUploadId] = useState("");
  const [recipientEmail, setRecipientEmail] = useState(""); // Store recipient email

  const handelLoginModaloff = () => {
    setShowText(false);
  };

  const toggelUpload = (did) => {
    console.log("this is did", did);
    setShowText(true);
    document.body.style.overflow = "hidden";
    setUploadId();

    // Fetch the recipient email from backend based on did
    fetchRecipientEmail(did);
  };

  const modalOff = () => {
    document.body.style.overflow = "auto";
    setShowText(false);
  };

  const fetchRecipientEmail = async (userId) => {
    try {
      const response = await axios.get(
        "http://localhost:8800/userDetail/details"
      );

      const extractPerticularData = response.data.filter(
        (obj) => obj.user_id === userId
      );
      const extractedEmails = extractPerticularData.map((obj) => obj.email);
      const extractedUserId = extractPerticularData.map((obj) => obj.user_id);

      console.log("yeah babat", extractedEmails[0]);
      console.log("yoyoyoyooy", extractPerticularData);

      setRecipientEmail(extractedEmails[0]);
      setUploadId(extractedUserId[0]);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching recipient email:", error);
    }
  };

  const sendEmail = async (event, userId) => {
    event.preventDefault();

    try {
      // Send an email
      const templateParams = {
        email: recipientEmail,
        from_name: "Fitness Planner",
        message: message,
      };
      await emailjs.send(
        "service_7brk6mg",
        "template_dakc6fr",
        templateParams,
        "TcjQ7I9f0YThd5G3e"
      );

      // Store the data in the history database
      const historyData = {
        response: message,
        email: recipientEmail,
        user_id: uploadId,
      };
      await axios.post("http://localhost:8800/history/", historyData);

      await axios.delete(`http://localhost:8800/userDetail/${userId}`);

      console.log(
        "Workout plan sent via email, stored in history, and deleted from userDetails:",
        historyData
      );
      setShowText(false);
      setMessage("");

      window.location.reload();
    } catch (error) {
      console.error("Error sending workout plan:", error);
    }
  };

  useEffect(() => {
    const fetchAllUserDetails = async () => {
      try {
        const res = await axios.get("http://localhost:8800/userDetail/details");
        setUserDetails(res.data);
      } catch (error) {
        console.error("Error getting user details:", error);
      }
    };

    fetchAllUserDetails();
  }, []);

  return (
    <>
      <Adminnavbar />
      <div className="admin">
        <div className="adminHeader">
          <h3>Custom Plan Dashboard</h3>
        </div>

        {userDetails.map((details, id) => {
          return (
            details.status === false && (
              <div className="adminContent" key={details.user_id}>
                <div className="userName">
                  <h3>Client Email:</h3>
                  <h5>{details.email}</h5>
                </div>
                <div className="allreq">
                  <div className="left">
                    <div className="gen">
                      <h3>Gender:</h3>
                      <h5>{details.gender}</h5>
                    </div>
                    <div className="age">
                      <h3>Age:</h3>
                      <h5>{details.age}</h5>
                    </div>
                    <div className="height">
                      <h3>Height:</h3>
                      <h5>{details.height}</h5>
                    </div>
                    <div className="weight">
                      <h3>Weight:</h3>
                      <h5>{details.weight}</h5>
                    </div>
                    <div className="fat">
                      <h3>Fat:</h3>
                      <h5>{details.fat}</h5>
                    </div>
                  </div>
                  <div className="right">
                    <div className="situation">
                      <h3>Situation:</h3>
                      <h5>{details.situation}</h5>
                    </div>
                    <div className="phys">
                      <h3>Physique:</h3>
                      <h5>{details.physique}</h5>
                    </div>
                    <div className="active">
                      <h3>Active:</h3>
                      <h5>{details.active}</h5>
                    </div>
                  </div>
                  <div className="rightmostpart">
                    <div className="time">
                      <h3>Time:</h3>
                      <h5>{details.time}</h5>
                    </div>
                    <div className="Place">
                      <h3>Place:</h3>
                      <h5>{details.place}</h5>
                    </div>
                    <div className="prevent">
                      <h3>Preventing:</h3>
                      <h4 className="prevent_text">{details.prevention}</h4>
                    </div>
                    <button onClick={() => toggelUpload(details.user_id)}>
                      Upload
                    </button>
                  </div>
                </div>
              </div>
            )
          );
        })}
      </div>
      {
        <div className={showText ? "loginOn" : "loginoff"}>
          <form>
            <div className="header">
              <div className="title">
                <h2>Edit Details</h2>
              </div>
              <RxCrosshair2
                className="CrossIcon"
                onClick={handelLoginModaloff}
              />
            </div>
            <textarea
              name="message"
              id=""
              cols="80"
              rows="10"
              style={{
                width: "668px",
                height: "317px",
                margin: "20px",
                padding: "10px",
                fontSize: "1.2rem",
              }}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <div className="btn">
              <button onClick={() => setShowText(false)}>Cancel</button>
              <button type="submit" onClick={sendEmail}>
                Save
              </button>
            </div>
          </form>
        </div>
      }
      <Footer />
    </>
  );
}

export default Admindashboard;
