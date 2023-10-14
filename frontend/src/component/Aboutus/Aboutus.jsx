import React from "react";
import aboutimg1 from "../Aboutus/images/aboutimg1.jpg";
import aboutimg2 from "../Aboutus/images/aboutimg2.jpg";
import aboutimg3 from "../Aboutus/images/aboutimg3.jpg";
import aboutimg4 from "../Aboutus/images/aboutimg4.jpg";
import "../Aboutus/Aboutus.css";
import Usernav from "../Navbar/Usernav";
import Footer from "../Footer/Footer";
function Aboutus() {
  return (
    <>
      <Usernav />
      <section class="About" id="About">
        <div class="aboutushead">
          <h1>About Us</h1>
        </div>

        <div class="aboutUspara1">
          {/* <img class="img1" src="images/edgar-chaparro-sHfo3WOgGTU-unsplash.jpg" alt=""> */}
          <div className="para1Img">
            <img src={aboutimg1} alt="" srcset="" />
          </div>
          <div class="para1text">
            <h3 class="title">
              Introducing Fitness Planner: Your Ultimate Destination for
              Fitness, Nutrition, and Supplements
            </h3>
            <p class="p1" style={{ textAlign: "start" }}>
              Welcome to Fitness Planner, your one-stop solution for all your
              fitness and nutrition needs. Our comprehensive platform is
              dedicated to helping individuals achieve their fitness goals by
              providing personalized workout plans, customized diet
              recommendations, and access to a curated selection of high-quality
              supplements. Whether you're a beginner starting your fitness
              journey or a seasoned athlete aiming to elevate your training,
              Fitness Planner has everything you need. At Fitness Planner, we
              recognize that everyone is unique, with distinct fitness
              objectives and dietary requirements. That's why we offer a wide
              range of workout plans tailored to different fitness levels,
              interests, and goals. From weight loss to muscle building,
              strength training, cardiovascular endurance, and more, we have
              meticulously crafted programs to cater to diverse fitness
              aspirations.
            </p>
          </div>
        </div>
      </section>

      <div class="para2">
        {/* <img class="img2" src="images/anastase-maragos-4dlhin0ghOk-unsplash (1).jpg" alt=""> */}

        <div class="para2text">
          <h3 class="title">What Sets Us Apart?</h3>
          <p style={{ textAlign: "start" }}>
            What sets Fitness Planner apart is our dedication to customization.
            We believe in tailoring workouts and diets to individual needs and
            preferences. Our website provides a unique feature that allows you
            to customize not only your workout plans but also your diet plans,
            considering factors like fitness level, available time, dietary
            preferences, and specific target areas. You can choose the duration
            and intensity of your workouts, select particular exercises, and
            personalize your diet plan to align with your fitness objectives.
            This high level of personalization ensures that you receive a
            comprehensive fitness and nutrition plan that perfectly suits your
            goals and lifestyle.
          </p>
        </div>
        <div className="para2Img">
          <img src={aboutimg2} alt="" srcset="" />
        </div>
      </div>

      <div class="para3">
        {/* <img class="img3" src="images/edgar-chaparro-AVOADaTBtT4-unsplash.jpg" alt=""> */}
        <div className="para3Img">
          <img src={aboutimg3} alt="" srcset="" />
        </div>
        <div class="para3text">
          <h3 class="title">Access to Quality Supplements:</h3>
          <p style={{ textAlign: "start" }}>
            In addition to personalized workout and diet plans, Fitness Planner
            offers the convenience of purchasing top-notch supplements to
            support your fitness journey. We have carefully curated a selection
            of supplements from trusted brands, ensuring that you have access to
            high-quality products that complement your fitness routine and help
            you achieve your desired results effectively.
          </p>
        </div>
      </div>

      <div class="para4">
        {/* <img class="img4" src="images/anastase-maragos-jzP8_Rg6aVU-unsplash.jpg" alt=""> */}

        <div class="para4text">
          <h3 class="title">Get started now!</h3>
          <p style={{ textAlign: "start" }}>
            Don't wait any longer—kickstart your transformative fitness journey
            with Fitness Planner today. Let us be your trusted partner in
            achieving a healthier, fitter, and happier you. Take the first step
            towards a better lifestyle and embrace the benefits of personalized
            fitness plans, custom diet recommendations, and high-quality
            supplements. Your journey to a healthier you begins here at Fitness
            Planner.
          </p>
        </div>
        <div className="para4Img">
          <img src={aboutimg4} alt="" srcset="" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Aboutus;
