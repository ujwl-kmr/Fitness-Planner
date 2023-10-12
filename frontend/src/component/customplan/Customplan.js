import React, { useState } from 'react';
import './Customplan.css';
import Usernav from '../Navbar/Usernav';
import Footer from '../Footer/Footer';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

function Customplan() {
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [active, setActive] = useState('');
  const [fat, setFat] = useState('');
  const [situation, setSituation] = useState('');
  const [physique, setPhysique] = useState('');
  const [time, setTime] = useState('');
  const [place, setPlace] = useState('');
  const [prevention, setPrevention] = useState('');
  const [email, setEmail] =useState('');

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleActiveChange = (e) => {
    setActive(e.target.value);
  };

  const handleFatChange = (e) => {
    setFat(e.target.value);
  };

  const handleSituationChange = (e) => {
    setSituation(e.target.value);
  };

  const handlePhysiqueChange = (e) => {
    setPhysique(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handlePlaceChange = (e) => {
    setPlace(e.target.value);
  };

  const handlePreventionChange = (e) => {
    setPrevention(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    const formData = {
      user_id: localStorage.getItem('userId'),
      gender,
      age,
      height,
      weight,
      active,
      fat,
      situation,
      physique,
      time,
      place,
      prevention,
      email,
      status: false,
      response: '',
    };

    axios
      .post('http://localhost:8800/userDetail/details', formData)
      .then((response) => {
        console.log('Data uploaded successfully:', response.data);
        toast.success('Submitted Successfully', {
          position: 'top-center',
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
        window.location.reload();
      })
      .catch((error) => {
        console.error('Error uploading data:', error);
      });
  };

  return (
    <>
      <Usernav />
      {console.log('inside custom plan')}
      <div className="custom_plandiv">
       <h1 className="heading">
          Fill out the form below and get your custom plan now!
        </h1>
        <div className="form">
          <p>Are you male or female?</p>
          <input
            type="radio"
            name="gender"
            id="male"
            value="male"
            onChange={handleGenderChange}
          />
          <label htmlFor="male">Male</label>
          <br />
          <input
            type="radio"
            name="gender"
            id="female"
            value="female"
            onChange={handleGenderChange}
          />
          <label htmlFor="female">Female</label>

          <br /><br />

          <p style={{ textAlign: "start", color: "red" }}>What is your age?</p>
          <select
            className="age"
            name="age"
            id="age"
            required
            onChange={handleAgeChange}
            value={age}
          >

            {/* Remaining age options */}

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

          <p style={{ textAlign: "start", color: "red" }}>What is your height?(in cms)</p>
          <input
            className="textbox"
            type="number"
            id="height"
            required
            onChange={handleHeightChange}
            value={height}
            placeholder='cms'
          />

          <br /><br />

          <p style={{ textAlign: "start", color: "red" }}>What is your weight?</p>
          <input
            className="textbox"
            type="text"
            id="weight"
            required
            onChange={handleWeightChange}
            value={weight}
            placeholder='kgs'
          />

          <br /><br />

          <p style={{ textAlign: "start", color: "red" }}>How active are you during a typical week?</p>
          <input
            type="radio"
            name="active"
            value="sedentary"
            onChange={handleActiveChange}
          />
          <label htmlFor="">Sedentary (Little To No Exercise)</label>
          <br />
          <input
            type="radio"
            name="active"
            value="Lightly Active"
            onChange={handleActiveChange}
          />
          <label htmlFor="">Lightly Active (Light Exercise 1-3 Days A Week)</label>
          <br />
          <input
            type="radio"
            name="active"
            value="Moderately Active"
            onChange={handleActiveChange}
          />
          <label htmlFor="">Moderately Active (Moderate Exercise 3-5 Days A Week)</label>
          <br />
          <input
            type="radio"
            name="active"
            value="very Active"
            onChange={handleActiveChange}
          />
          <label htmlFor="">Very Active (Intense Exercise 6-7 Days A Week)</label>
          <br />
          <input
            type="radio"
            name="active"
            value="Extremely Active"
            onChange={handleActiveChange}
          />
          <label htmlFor="">Extremely Active (Intense Daily Exercise + Physical Job)</label>
          <br />
          <br />

          <p style={{ textAlign: "start", color: "red" }}>What is your body fat percentage?</p>

          {/* body fat  */}
          <select class="fat" name="fat" id="fat" onChange={handleFatChange}
            value={fat}>
            <option value="">Body Fat</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
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
          </select>
          <br /><br />

          <p style={{ textAlign: "start", color: "red" }}>Which Of The Following Best Describes Your Current Situation?</p>
          {/* situation  */}
          <input type="radio" name="situation" id="situation" onChange={handleSituationChange}
            value='I have a low amount of body fat and want to put on muscle.' />
          <label for="">I have a low amount of body fat and want to put on muscle.</label> <br />
          <input type="radio" name="situation" id="situation"  onChange={handleSituationChange}
            value='I am “skinny fat”. I need to build muscle but there’s still fat covering my abs.'/>
          <label for="">I'm “skinny fat”. I need to build muscle but there’s still fat covering my abs.</label> <br />
          <input type="radio" name="situation" id="situation" onChange={handleSituationChange}
            value='I have decent muscle development but still need to lose a bit of fat.'/>
          <label for="">I have decent muscle development but still need to lose a bit of fat.</label> <br />
          <input type="radio" name="situation" id="situation" onChange={handleSituationChange}
            value='I have high body fat and want to lean down first and foremost.'/>
          <label for="">I have high body fat and want to lean down first and foremost.</label>

          <br /><br />

          <p style={{ textAlign: "start", color: "red" }}>What would you consider to be your ultimate “ideal” physique?</p>

          {/* current physic  */}
          <input type="radio" name="physique" id="physique" onChange={handlePhysiqueChange}
            value='I want to achieve a nice balance between both muscularity and
            leanness' />
          <label for=""><b>“Aesthetic”</b> – I want to achieve a nice balance between both muscularity and
            leanness.</label><br />
          <input type="radio" name="physique" id="physique" onChange={handlePhysiqueChange}
            value='I want to be as big and muscular as possible and don’t mind slightly higher
            body fat' />
          <label for=""><b>“Bulky”</b> – I want to be as big and muscular as possible and don’t mind slightly higher
            body fat.</label><br />
          <input type="radio" name="physique" id="physique" onChange={handlePhysiqueChange}
            value='I am not concerned with being super lean and muscular. I just want to look fit
              and healthy '/>
          <label for=""><b>“Fit”</b> – I’m not concerned with being super lean and muscular. I just want to look fit
            and healthy.</label>
          <br />

          <p style={{ textAlign: "start", color: "red" }}>Do You Have At Least 1 Year Of Consistent, Proper Lifting Under Your Belt?</p>

          {/* yes no  */}
          <input type="radio" name="time" id="time" onChange={handleTimeChange}
            value='yes' />
          <label for="">Yes</label> <br />
          <input type="radio" name="time" id="time" onChange={handleTimeChange}
            value='NO' />
          <label for="">No</label>
          <br /><br />

          <p style={{ textAlign: "start", color: "red" }}>Where Do You Train Currently?</p>

          {/* perfer  */}
          <input type="radio" name="place" id="place" onChange={handlePlaceChange}
            value='Gym' />
          <label for="">Gym</label> <br />
          <input type="radio" name="place" id="place" onChange={handlePlaceChange}
            value='Home' />
          <label for="">Home</label>

          <br /><br />

          <p style={{ textAlign: "start", color: "red", }}>The things preventing from making progress and any suggestions.</p>
          <textarea
            style={{ resize: "none", borderRadius: "10px", fontSize: "18px", padding: "15px" }}
            rows="6"
            cols="80"
            required
            onChange={handlePreventionChange}
            value={prevention}

          ></textarea>
          <br /><br />

          <p style={{ textAlign: "start", color: "red", }}>Enter your email to get your free custom fitness and diet plan now!</p>
          <input className="customemail" type='email' name='email' id='email' required onChange={handleEmailChange} value={email} />
          <br /><br />

          <button className="submit-btn" onClick={handleSubmit} >
            Submit
          </button>

        </div>
      </div>
      <Footer />

    </>
  );
}

export default Customplan;

