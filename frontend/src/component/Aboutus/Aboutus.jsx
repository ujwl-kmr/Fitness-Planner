import React from 'react'
import aboutimg1 from "../Aboutus/images/aboutimg1.jpg"
import aboutimg2 from "../Aboutus/images/aboutimg2.jpg"
import aboutimg3 from "../Aboutus/images/aboutimg3.jpg"
import aboutimg4 from "../Aboutus/images/aboutimg4.jpg"
import "../Aboutus/Aboutus.css"
import Usernav from '../Navbar/Usernav'
import Footer from '../Footer/Footer'
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
                        <h3 class="title">Introducing Fitness Planner: Your Ultimate Workout Plans Provider</h3>
                        <p class="p1" style={{textAlign:"start"}}>Welcome to Fitness Planner, your one-stop destination for all your workout needs. Our
                            website is dedicated to helping individuals achieve their fitness goals by providing personalized
                            and comprehensive workout plans. Whether you're a beginner looking to kickstart your fitness journey
                            or a seasoned athlete aiming to take your training to the next level, Fitness Planner has got you covered.

                            At Fitness Planner, we understand that every person is unique, and their fitness goals and
                            preferences vary. That's why we offer a wide range of workout plans tailored to suit different
                            fitness levels, interests, and objectives. From weight loss and muscle building to strength training
                            and cardiovascular endurance, we have meticulously crafted workout programs that cater to diverse
                            fitness aspirations.</p>
                    </div>
                </div>
            </section>


            <div class="para2">
                {/* <img class="img2" src="images/anastase-maragos-4dlhin0ghOk-unsplash (1).jpg" alt=""> */}

                <div class="para2text">
                    <h3 class="title">What makes us different?</h3>
                    <p style={{textAlign:"start"}}>What sets Fitness Planner apart is our commitment to customization. We believe that workouts should
                        be tailored to an individual's specific needs and preferences. With that in mind, our website offers
                        a unique feature that enables you to customize your workout plans based on factors like fitness
                        level, available time, and specific target areas. You can select the duration of your workouts, the
                        intensity level, and even choose specific exercises to include or exclude. This level of
                        personalization ensures that you get a workout plan that is perfectly suited to your goals and
                        lifestyle.</p>
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
                    <h3 class="title">Get plans that actually work!</h3>
                    <p style={{textAlign:"start"}}>At Fitness Planner, we prioritize your satisfaction and success. Our workout plans are backed by
                        science, expertise, and real-life testimonials from individuals who have achieved remarkable results
                        through our programs. We are confident that with dedication, consistency, and the right workout plan
                        from Fitness Planner, you can reach your fitness goals and unlock your full potential.</p>
                </div>
            </div>

            <div class="para4">
                {/* <img class="img4" src="images/anastase-maragos-jzP8_Rg6aVU-unsplash.jpg" alt=""> */}

                <div class="para4text">
                    <h3 class="title">Get started now!</h3>
                    <p style={{textAlign:"start"}}>So, what are you waiting for? Get started with Fitness Planner today and embark on your transformative fitness
                        journey. Let us be your trusted partner in achieving a healthier, fitter, and happier you!</p>
                </div>
                <div className="para4Img">

                    <img src={aboutimg4} alt="" srcset="" />
                </div>
            </div>
            <Footer />

        </>
    )
}

export default Aboutus