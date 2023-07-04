import React, { useState } from 'react'
import "../customfile/Customfile.css"
import Usernav from '../Navbar/Usernav';
import Footer from '../Footer/Footer';
function Customfile() {
    const [formData, setFormData] = useState({
        gender: '',
        age: '',
        height: '',
        weight: '',
        active: '',
        fat: '',
        situation: '',
        physique: '',
        time: '',
        place: '',
        preventing: ''
    });
    return (
        <>
            <Usernav />
            <div class="custom_plandiv">
                <h1 class="heading">Fill out the form below and get your custom plan now!</h1>
                <div class="form">
                    <p>Are you male or female?</p>
                    <input type="radio" name="gender" id="" required />
                    <label for="">Male</label>
                    <br />
                    <input type="radio" name="gender" id="" required />
                    <label for="">Female</label>
                    <br /><br />

                    <p>What is your age?</p>
                    <select class="age" name="age" id="age" required>
                        <option value="Age">Age</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                        <option value="32">32</option>
                        <option value="33">33</option>
                        <option value="34">34</option>
                        <option value="35">35</option>
                        <option value="36">36</option>
                        <option value="37">37</option>
                        <option value="38">38</option>
                        <option value="39">39</option>
                        <option value="40">40</option>
                        <option value="41">41</option>
                        <option value="42">42</option>
                        <option value="43">43</option>
                        <option value="44">44</option>
                        <option value="45">45</option>
                        <option value="46">46</option>
                        <option value="47">47</option>
                        <option value="48">48</option>
                        <option value="49">49</option>
                        <option value="50">50</option>
                        <option value="51">51</option>
                        <option value="52">52</option>
                        <option value="53">53</option>
                        <option value="54">54</option>
                        <option value="55">55</option>
                        <option value="56">56</option>
                        <option value="57">57</option>
                        <option value="58">58</option>
                        <option value="59">59</option>
                        <option value="60">60</option>
                        <option value="61">61</option>
                        <option value="62">62</option>
                        <option value="63">63</option>
                        <option value="64">64</option>
                        <option value="65">65</option>
                        <option value="66">66</option>
                        <option value="67">67</option>
                        <option value="68">68</option>
                        <option value="69">69</option>
                        <option value="70">70</option>
                        <option value="71">71</option>
                        <option value="72">72</option>
                        <option value="73">73</option>
                        <option value="74">74</option>
                        <option value="75">75</option>
                    </select>
                    <br /><br />

                    <p>What is your height?</p>
                    <input class="textbox" type="text" id="height" pattern="[0-9]{10}" required /> <label for="">cms</label>
                    <input type="radio" name="height" /> <label for="">inches</label> <input type="radio" name="height" />
                    <br /><br />

                    <p>What is your weight?</p>
                    <input class="textbox" type="text" id="weight" pattern="[0-9]{10}" required /> <label for="">kgs</label>
                    <input type="radio" name="weight" /> <label for="">lbs</label> <input type="radio" name="weight" />
                    <br /><br />

                    <p>How active are you during a typical week?</p>
                    <input type="radio" name="active" />
                    <label for="">Sedentary (little to no exercise) </label> <br />
                    <input type="radio" name="active" />
                    <label for="">Lightly Active (light exercise 1-3 days a week)</label> <br />
                    <input type="radio" name="active" />
                    <label for=""> Moderately Active (moderate exercise 3-5 days a week)</label> <br />
                    <input type="radio" name="active" />
                    <label for="">Very Active (intense exercise 6-7 days a week)</label> <br />
                    <input type="radio" name="active" />
                    <label for=""> Extremely Active (intense daily exercise + physical job)</label>
                    <br /><br />

                    <p>What is your approximate body fat percentage?</p>
                    <select class="fat" name="fat" id="fat">
                        <option value="">Body Fat</option>
                        <option value="">5</option>
                        <option value="">6</option>
                        <option value="">7</option>
                        <option value="">8</option>
                        <option value="">9</option>
                        <option value="">10</option>
                        <option value="">11</option>
                        <option value="">12</option>
                        <option value="">13</option>
                        <option value="">14</option>
                        <option value="">15</option>
                        <option value="">16</option>
                        <option value="">17</option>
                        <option value="">18</option>
                        <option value="">19</option>
                        <option value="">20</option>
                        <option value="">21</option>
                        <option value="">22</option>
                        <option value="">23</option>
                        <option value="">24</option>
                        <option value="">25</option>
                        <option value="">26</option>
                        <option value="">27</option>
                        <option value="">28</option>
                        <option value="">29</option>
                        <option value="">30</option>
                        <option value="">31</option>
                        <option value="">32</option>
                        <option value="">33</option>
                        <option value="">34</option>
                        <option value="">35</option>
                        <option value="">36</option>
                        <option value="">37</option>
                        <option value="">38</option>
                        <option value="">39</option>
                        <option value="">40</option>
                    </select>
                    <br /><br />

                    <p>Which of the following best describes your current situation?</p>
                    <input type="radio" name="situation" id="situation" />
                    <label for="">I have a low amount of body fat and want to put on muscle.</label> <br />
                    <input type="radio" name="situation" id="situation" />
                    <label for="">I'm “skinny fat”. I need to build muscle but there’s still fat covering my abs.</label> <br />
                    <input type="radio" name="situation" id="situation" />
                    <label for="">I have decent muscle development but still need to lose a bit of fat.</label> <br />
                    <input type="radio" name="situation" id="situation" />
                    <label for="">I have high body fat and want to lean down first and foremost.</label>
                    <br /><br />

                    <p>What would you consider to be your ultimate “ideal” physique?</p>
                    <input type="radio" name="physique" id="physique" />
                    <label for=""><b>“Aesthetic”</b> – I want to achieve a nice balance between both muscularity and
                        leanness.</label><br />
                    <input type="radio" name="physique" id="physique" />
                    <label for=""><b>“Bulky”</b> – I want to be as big and muscular as possible and don’t mind slightly higher
                        body fat.</label><br />
                    <input type="radio" name="physique" id="physique" />
                    <label for=""><b>“Fit”</b> – I’m not concerned with being super lean and muscular. I just want to look fit
                        and healthy.</label>
                    <br /><br />

                    <p>Do you have at least 1 year of consistent, proper lifting under your belt?</p>
                    <input type="radio" name="time" id="time" />
                    <label for="">Yes</label> <br />
                    <input type="radio" name="time" id="time" />
                    <label for="">No</label>
                    <br /><br />

                    <p>Where do you train currently?</p>
                    <input type="radio" name="place" id="place" value="Gym" />
                    <label for="">Gym</label> <br />
                    <input type="radio" name="place" id="place" />
                    <label for="">Home</label>
                    <br /><br />

                    <p>What is the #1 thing that you feel is preventing you from making progress?</p>
                    <textarea class="textarea" name="preventing" id="preventing" cols="62" rows="3"></textarea>
                    <br /><br />

                    <div class="form-group">
                        <button type="submit">Submit</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Customfile