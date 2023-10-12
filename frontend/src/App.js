import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./component/protectedRoute/Protectedroute";
import Home from "./component/Home/Home";
import Login from "./component/Login/Login";
import Registerpage from "./component/Register/Registerpage";
import Aboutus from "./component/Aboutus/Aboutus";
import Uarticle from "./component/Userarticel/Uarticle";
import Customplan from "./component/customplan/Customplan";
import Cart from "./component/cart/Cart";
import Adminlogin from "./component/Adminlogin/Adminlogin";
import Admindashboard from "./component/admin/Admindashboard";
import History from "./component/History/History";
import { useAuth } from "./component/protectedRoute/authContext";
import Supplements from "./component/supplements/Supplements";
import ProductsDashboard from "./component/AdminSupplements/ProductsDashboard";

function App() {
  const auth = useAuth();
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Registerpage />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Article" element={<Uarticle />} />
        <Route path="/Supplements" element={<Supplements />} />
        <Route path="/Cart" element={<Cart />} />
        <Route
          element={
            <ProtectedRoute
              isLoggedIn={auth.isLoggedIn}
              setIsLoggedIn={auth.setIsLoggedIn}
            />
          }
        >
          <Route path="/customplan" element={<Customplan />} />
        </Route>
        <Route path="/adminLogin" element={<Adminlogin />} />
        <Route path="/Admin" element={<Admindashboard />} />
        <Route path="/Products" element={<ProductsDashboard />} />
        <Route path="/History" element={<History />} />
      </Routes>
    </Router>
  );
}

export default App;
