import React, { useState } from 'react'
import "../Login/Login.css"
import { useNavigate } from "react-router-dom"
import axios from 'axios';
import { toast } from "react-toastify";

function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const gotoregisterpage = () => {
        navigate('/Register')
    }
    const handelemailchange = (e) => {
        setEmail(e.target.value)

    }
    const handelpasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handelloginAuth = () => {
        axios
          .post("http://localhost:8800/user/login", { email, password })
          .then((res) => {
            localStorage.setItem("userId", res.data.id);
            localStorage.setItem("userName", res.data.name);
            localStorage.setItem("userEmail", res.data.email);
            localStorage.setItem("userNumber", res.data.number);
            toast.success(res.data.message, {
                icon: "✅",
                position: "top-center",
                autoClose: 4000,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
              });
            // Handle successful authentication here
            //dispatch(Login(true));
          })
          .catch((error) => {
            // Handle authentication error here
            console.log(error);
          });
      };
    return (
        <>
            <div className="container">
                <h2>Login</h2>
                <form action="" className='main'>
                    <p>Sign in as: <label class="user" for="">User</label>
                        <input type="radio" class="userbut" name="user"
                            id="user" />
                        <label class="admin">Admin</label>
                        <input type="radio" class="adminbut" name="user" id="user" /> </p>
                    <div class="form-group">
                        <label for="username">Username:</label>
                        <input type="text" id="username" name="username" required value={email} onChange={handelemailchange} />
                    </div>
                    <div class="form-group">
                        <label for="password">Password:</label>
                        <input type="password" id="password" name="password" required value={password} onChange={handelpasswordChange} />
                        <p onClick={gotoregisterpage} style={{cursor:"pointer"}}>Not Registered? Click to sign up</p>
                        <div class="form-group">
                            <button class="login" type="submit" onClick={handelloginAuth}>Login</button>
                        </div>
                    </div>
                </form>

            </div>
        </>
    )
}

export default Login