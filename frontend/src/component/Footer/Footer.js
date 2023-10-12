import React from 'react'
import "../Footer/Footer.css"
import { useNavigate } from 'react-router-dom'
function Footer() {
    const navigate=useNavigate();
    const adminLogin=()=>{
navigate('/adminLogin')
    }
    return (
        <>
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

                            <input type="text" placeholder="Enter email address" />
                            <input type="submit" name="" value="Send" />
                            <div class="media-icons">
                                <a href="#"><i class="fab fa-facebook-f"></i></a>
                                <a href="#"><i class="fab fa-instagram"></i></a>
                                <a href="#"><i class="fab fa-twitter"></i></a>
                                <a href="#"><i class="fab fa-youtube"></i></a>
                                <a href="#"><i class="fab fa-linkedin-in"></i></a>
                                <button className='Owner_login' onClick={adminLogin}>Admin login</button>
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

export default Footer