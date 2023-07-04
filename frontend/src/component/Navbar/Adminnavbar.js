import React from 'react'
import "../Navbar/Adminnav.css"
function Adminnavbar() {
    return (
        <>
            <header class="adminheader">
                {/* <a href="#" class="logo"> */}
                <span class="Fitness">Fitness <h4 className='planner'>
                    Planner
                </h4>
                </span>
                {/* </a> */}

                <div className="right">
                    <div className="history">
                        <button>
                            History
                        </button>
                    </div>
                    <div className="logout">
                        <button>

                            Logout
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Adminnavbar