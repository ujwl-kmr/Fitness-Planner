import React from 'react'
import Home from './component/Home/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Aboutus from './component/Aboutus/Aboutus'
import Articel from './component/Articel/Articel'
import Customfile from './component/customfile/Customfile'
import Admindashboard from './component/admin/Admindashboard'
import Login from './component/Login/Login'
import Registerpage from './component/Register/Registerpage'

import Userdashboard from './component/Userboard/Userdashboard'
// import Admin from './component/admin/Admin'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutus' element={<Aboutus />} />
        <Route path='/articel' element={<Articel />} />
        <Route path='/customfile' element={<Customfile />} />
        <Route path='/Admin' element={<Admindashboard />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Registerpage />} />
        <Route path='/userdashboard' element={<Userdashboard />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App