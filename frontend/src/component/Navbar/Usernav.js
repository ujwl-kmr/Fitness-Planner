import React from 'react'
import "../Navbar/Usernav.css"
import { Link } from "react-router-dom"
function Usernav() {
    return (
        <>
            <header class="header">
                {/* <a href="#" class="logo"> */}
                <span class="Fitness">Fitness <h4 className='planner'>
                    Planner
                </h4>
                </span>
                {/* </a> */}

                <nav class="navbar">
                    <Link to='/'>Home</Link>
                    <Link to='/aboutus'>Aboutus</Link>
                    <Link to='/article'>Article</Link>
                    <Link to='/customfile'>customfile</Link>
                    <Link to='/Login'>Login</Link>

                </nav>
            </header>
        </>
    )
}

export default Usernav