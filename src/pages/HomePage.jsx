import React from "react"
import { Link } from "react-router-dom"

import Navbar from "../components/Navbar"

function HomePage(){
    return(
        <div>
            <Navbar/>
            <div className="main-container">
                <Link to="/ModelView">
                <button>View 3D model</button>
                </Link>
            </div>
        </div>
    )
}

export default HomePage