import React, { useState } from 'react'
import "../Register/Registerpage.css"
import axios from 'axios';
function Registerpage() {
    const [name, setname] = useState("");
    const [email, setEmail] = useState("");
    const [number, setnumber] = useState("");
    const [password, setPassword] = useState("");
    const handelnamechange = (e) => {
        setname(e.target.value)

    }
    const handelemailchange = (e) => {
        setEmail(e.target.value)

    }
    const handelpnumchange = (e) => {
        setnumber(e.target.value)

    }
    const handelpasswordChange = (e) => {
        setPassword(e.target.value);
    
    }

    const handelregister = async() => {
        console.log("cliked")

        await axios.post('http://localhost:8800/user/reg', { name, email, password, number })
            .then(response => {
                // Handle successful authentication here
                // dispatch(Login(true));
            })
            .catch(error => {
                // Handle authentication error here
                console.log(error);
            });

    }



    return (
        <>
            <div class="container">
                <h2>Sign Up</h2>
                <form>
                    <div class="form-group">
                        <label for="username">Username:</label>
                        <input type="text" id="username" name="username" pattern="^(?=.*[a-zA-Z])[a-zA-Z0-9]+$" required value={name} onChange={handelnamechange} />
                    </div>
                    <div class="form-group">
                        <label for="email">Email Address:</label>
                        <input type="email" id="email" name="email" required value={email} onChange={handelemailchange} />
                    </div>
                    <div class="form-group">
                        <label for="phone">Phone Number:</label>
                        <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" required value={number} onChange={handelpnumchange} />
                    </div>
                    <div class="form-group">
                        <label for="password">Password:</label>
                        <input type="password" id="password" name="password"
                            pattern="^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$" required value={password} onChange={handelpasswordChange} />
                        <small>Password must be at least 8 characters long and contain at least one digit and one special
                            character.</small>
                    </div>
                    <div class="form-group">
                        <button type="submit" onClick={handelregister}>Sign Up</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Registerpage