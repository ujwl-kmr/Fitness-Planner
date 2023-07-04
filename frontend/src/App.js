import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './component/Home/Home';
import Aboutus from './component/Aboutus/Aboutus';
import Articel from './component/Articel/Articel';
import Customfile from './component/customfile/Customfile';
import Admindashboard from './component/admin/Admindashboard';
import Login from './component/Login/Login';
import Registerpage from './component/Register/Registerpage';
import Userdashboard from './component/Userboard/Userdashboard';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/articel" element={<Articel />} />
        <Route path="/customfile" element={<Customfile />} />
        <Route path="/Admin" element={<Admindashboard />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Registerpage />} />
        <Route path="/userdashboard" element={<Userdashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
