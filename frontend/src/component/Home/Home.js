import React from 'react'
import "../Home/Home.css"
import img1 from "../../images/img1.jpeg"
import features from "../../images/features.jpg"
function Home() {
  return (
    <>
     <header class="header">
    <a href="#" class="logo">
      <span class="Fitness">Fitness</span> Planner
    </a>

    <nav class="navbar">
      <a href="/home/home.html">Home</a>
      <a href="/articles/articles.html">Articles</a>
      <a href="../custom plan/custom.html">Custom Plan</a>
      <a href="../about/about.html">About Us</a>
      <a href="/login/login.html">Log In</a>
    </nav>
  </header>

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
        
      <img src={features} alt="" srcset=""/>
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
  <footer>
    <div class="content">
      <div class="left box">
        <div class="upper">
          <div class="topic">About us</div>
          <p class="footercon">Fitness Planner: Your ultimate companion for personalized workout routines
            guiding you
            towards your fitness goals with ease and precision. Get ready to transform your body and conquer
            new heights
            of strength and well-being.</p>
        </div>
        <div class="lower">
          <div class="topic">Contact us</div>
          <div class="footercon">
            <div class="phone">
              <a href="#"><i class="fas fa-phone-volume"></i>080-99005678</a>
            </div>
            <div class="email">
              <a href="#"><i class="fas fa-envelope"></i>fitnessplanner@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
      <div class="middle box">
        <div class="topic">Our Services</div>
        <div class="footercon">
          <div><a href="#">Custom fitness plans</a></div>
          <div><a href="#">24/7 customer support</a></div>
          <div><a href="#">Informative Articles</a></div>
          <div><a href="#">Monthly new plans</a></div>
        </div>
      </div>
      <div class="right box">
        <div class="topic">Subscribe us</div>
        <form>

          <input type="text" placeholder="Enter email address"/>
          <input type="submit" name="" value="Send"/>
          <div class="media-icons">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-youtube"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </form>
        
      
      </div>
    <div class="footercon">
      <div class="bottom">
        <p>Copyright © 2023 <a href="#">FitnessPlanner</a> All rights reserved</p>
      </div>
    </div>
    </div>
  </footer>

    </>
  )
}

export default Home