import React from "react";
import { Link } from "react-router-dom";
function Navbar(){
    return(
        <div className="header">
        <div className="navbar" >
        <ul >
            <li><Link className="header-link" to="/">Products</Link></li>
            <li><Link className="header-link" to="/add">Add Products</Link></li>
            <li><Link className="header-link" to="/update">Update Products</Link></li>
            <li><Link className="header-link" to="/logout">Logout</Link></li>
            <li><Link className="header-link" to="/singup">Login</Link></li>
        </ul>
    </div>
    </div>
    )
}
export default Navbar;