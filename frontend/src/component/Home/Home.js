import React from 'react'
import "../Home/Home.css"
import img1 from "../../images/img1.jpeg"
import features from "../../images/features.jpg"
import Usernav from '../Navbar/Usernav'
import Footer from '../Footer/Footer'
function Home() {
  return (
    <>
      <Usernav />

      <section class="Home" id="Home">
        <div class="swiper mySwiper">
          <div class="swiper-wrapper">
            <div class="slide swiper-slide">
              <div class="content">
                <img src={img1} alt="" />
                <span class="tagline">Elevate Your Health, Embrace Fitness</span>
                <h3 class="head">Transform Your Body, Unleash Your Strength</h3>
                <a href="/custom plan/custom.html" class="button">get started</a>
              </div>
            </div>
            {/* // <div class="slide swiper-slide">
        //   <div class="content">
        //     <img src="image/WhatsApp Image 2023-06-14 at 17.55.00 (1).jpeg" alt="" />
        //     <span class="tagline">Elevate Your Health, Embrace Fitness</span>
        //     <h3 class="head">Transform Your Body, Unleash Your Strength</h3>
        //     <a href="/custom plan/custom.html" class="button">get started</a>
        //   </div>
        // </div>
        // <div class="slide swiper-slide">
        //   <div class="content">
        //     <img src="image/WhatsApp Image 2023-06-14 at 17.55.00 (2).jpeg" alt="" />
        //     <span class="tagline">Elevate Your Health, Embrace Fitness</span>
        //     <h3 class="head">Transform Your Body, Unleash Your Strength</h3>
        //     <a href="/custom plan/custom.html" class="button">get started</a>
        //   </div>
        // </div> */}
          </div>

          <div class="swiper-navigation">
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
          </div>
        </div>
      </section>

      <section class="section2">
        <div class="section2image">

          <img src={features} alt="" srcset="" />
        </div>
        <div class="section2Contain">
          <span class="section2feature">Features</span>
          <h3 class="section2title">Every day is a chance to become better</h3>
          <p class="featurepara">Success is not built in a day, but in the daily commitment to push your limits and
            strive for progress. Embrace
            the sweat, the struggle, and the perseverance, for each step forward brings you closer to the
            extraordinary
            transformation you seek.</p>
          <div class="boxContainer">
            <div class="box1">
              <div class="box1con box1con1">

                <h3><i class="fas fa-check"></i><span>Customized Fitness plans</span></h3>
                <p class="featurecon">We believe that workouts should be tailored to an individual's specific
                  needs and preferences. With that in
                  mind, our website offers a unique feature that enables you to customize your workout plans
                  based on factors
                  like fitness level, available time, and specific target areas.</p>
              </div>
              <div class="box1con box1con2">

                <h3><i class="fas fa-check"></i><span>
                  24/7 Customer support
                </span></h3>
                <p class="featurecon">At Fitness Planner, we prioritize your satisfaction and are committed to
                  providing exceptional service.
                  That's why we offer round-the-clock, 24/7 customer support to ensure that your fitness
                  journey is supported
                  every step of the way. Our dedicated team of experts is ready to assist you with any
                  inquiries,
                  troubleshooting, or guidance you may need.</p>
              </div>
            </div>

            <div class="box2">
              <div class="box2con box2con1">

                <h3><i class="fas fa-check"></i>
                  <span>
                    Informative articles
                  </span>
                </h3>
                <p class="featurecon">At Fitness Planner, we understand the importance of knowledge in your
                  fitness journey. That's why we
                  provide a wealth of informative articles on various aspects of fitness, ensuring you have
                  access to expert
                  insights, evidence-based research, and practical tips to enhance your understanding and make
                  informed
                  decisions.</p>
              </div>
              <div class="box2con box2con2">

                <h3><i class="fas fa-check"></i>
                  <span>
                    monthly new plan
                  </span>
                </h3>
                <p>At Fitness Planner, we believe in constantly innovating and keeping things fresh for our users. That's
                  why we regularly introduce monthly new plans to elevate your fitness experience. Each month, we bring you
                  exciting workout routines, curated challenges, and refreshing nutrition plans to keep you motivated and
                  engaged. </p>
              </div>
            </div>

            <a href="/about/about.html" class="Btn">read more</a>
          </div>
        </div>

      </section>
      <Footer />

    </>
  )
}

export default Home