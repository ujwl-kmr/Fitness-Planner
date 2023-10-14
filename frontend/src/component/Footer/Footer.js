import React from "react";
import "../Footer/Footer.css";
import { useNavigate } from "react-router-dom";
function Footer() {
  const navigate = useNavigate();
  const adminLogin = () => {
    navigate("/adminLogin");
  };
  return (
    <>
      <footer>
        <div class="content">
          <div class="left box">
            <div class="upper">
              <div class="topic">About us</div>
              <p class="footercon">
                Fitness Planner, crafting your unique fitness trail, Custom
                workouts, diets, and supplements without fail. Reach your peak,
                with strategies tailor-made, A journey towards strength,
                vitality, and a body finely arrayed.
              </p>
            </div>
            <div class="lower">
              <div class="topic">Contact us</div>
              <div class="footercon">
                <div class="phone">
                  <a href="#">
                    <i class="fas fa-phone-volume"></i>6360039889
                  </a>
                </div>
                <div class="email">
                  <a href="#">
                    <i class="fas fa-envelope"></i>fitnessplanner123@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="middle box">
            <div class="topic">Our Services</div>
            <div class="footercon">
              <div>
                <a href="#">Custom fitness plans</a>
              </div>
              <div>
                <a href="#">variety of supplements</a>
              </div>
              <div>
                <a href="#">Informative Articles</a>
              </div>
              <div>
                <a href="#">24/7 customer support</a>
              </div>
            </div>
          </div>
          <div class="right box">
            <div class="topic">Subscribe us</div>
            <form>
              <input type="text" placeholder="Enter email address" />
              <input type="submit" name="" value="Send" />
              <div class="media-icons">
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fab fa-youtube"></i>
                </a>
                <a href="#">
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <button className="Owner_login" onClick={adminLogin}>
                  Admin login
                </button>
              </div>
            </form>
          </div>
          <div class="footercon">
            <div class="bottom">
              <p>
                Copyright © 2023 <a href="#">FitnessPlanner</a> All rights
                reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
