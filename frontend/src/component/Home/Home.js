import React from "react";
import "../Home/Home.css";
import home1 from "../Home/images/home1.jpg";
import home2 from "../Home/images/home2.jpg";
import home3 from "../Home/images/home3.jpg";
import features from "../Home/images/features.jpg";
import Usernav from "../Navbar/Usernav";
import Footer from "../Footer/Footer";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import { Link } from "react-router-dom";

SwiperCore.use([Navigation, Autoplay]);

function Home() {
  return (
    <>
      <Usernav />
      <section className="Home" id="Home">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <div className="content" style={{ border: "none" }}>
              <img className="home1" src={home1} alt="" />

              <h3 className="head">
                Transform Your Body, Unleash Your Strength
              </h3>
              <Link to="/Customplan" className="button">
                get started
              </Link>
              <span className="slogan">
                Elevate Your Health, Embrace Fitness
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="content" style={{ border: "none" }}>
              <img className="home2" src={home2} alt="" />

              <h3 className="head">
                Transform Your Body, Unleash Your Strength
              </h3>
              <Link to="/Customplan" className="button">
                get started
              </Link>

              <span className="slogan">
                Elevate Your Health, Embrace Fitness
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="content" style={{ border: "none" }}>
              <img className="home3" src={home3} alt="" />

              <h3 className="head">
                Transform Your Body, Unleash Your Strength
              </h3>
              <Link to="/Customplan" className="button">
                get started
              </Link>
              <span className="slogan">
                Elevate Your Health, Embrace Fitness
              </span>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      <section className="section2">
        <div className="section2image">
          <img src={features} alt="" />
        </div>
        <div className="section2Contain">
          <span className="section2feature">Features</span>
          <h3 className="section2title">
            Every day is a chance to become better
          </h3>
          <p className="featurepara">
            Success is not built in a day, but in the daily commitment to push
            your limits and strive for progress. Embrace the sweat, the
            struggle, and the perseverance, for each step forward brings you
            closer to the extraordinary transformation you seek.
          </p>
          <div className="boxContainer">
            <div className="box1">
              <div className="box1con box1con1">
                <h3>
                  <i className="fas fa-check"></i>
                  <span>Customized Fitness plans</span>
                </h3>
                <p className="featurecon">
                  We believe that workouts should be tailored to anindividual's
                  specific needs and preferences. With that in mind, our website
                  offers a unique feature that enables you to customize your
                  workout plans based on factors like fitness level, available
                  time, and specific target areas.
                </p>
              </div>
              <div className="box1con box1con2">
                <h3>
                  <i className="fas fa-check"></i>
                  <span>24/7 Customer support</span>
                </h3>
                <p className="featurecon">
                  At Fitness Planner, we prioritize your satisfaction and are
                  committed to providing exceptional service. That's why we
                  offer round-the-clock, 24/7 customer support to ensure that
                  your fitness journey is supported every step of the way. Our
                  dedicated team of experts is ready to assist you with any
                  inquiries, troubleshooting, or guidance you may need.
                </p>
              </div>
            </div>
            <div className="box2">
              <div className="box2con box2con1">
                <h3>
                  <i className="fas fa-check"></i>
                  <span>Informative articles</span>
                </h3>
                <p className="featurecon">
                  At Fitness Planner, we understand the importance of knowledge
                  in your fitness journey. That's why we provide a wealth of
                  informative articles on various aspects of fitness, ensuring
                  you have access to expert insights, evidence-based research,
                  and practical tips to enhance your understanding and make
                  informed decisions.
                </p>
              </div>
              <div className="box2con box2con2">
                <h3>
                  <i className="fas fa-check"></i>
                  <span>Get various supplements</span>
                </h3>
                <p>
                  We understand the role of good supplements in fitness,
                  therefore Fitness Planner offers a wide range of supplements
                  tailored to meet various fitness goals and dietary needs.
                  Whether you're aiming to build muscle, improve endurance, lose
                  weight, or enhance overall wellness, Fitness Planner likely
                  has products to support your objectives
                </p>
              </div>
            </div>
          </div>
          <a href="/aboutus" className="Read_more_Btn">
            read more
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
