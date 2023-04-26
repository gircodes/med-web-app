import React from "react";
import {Link} from "react-router-dom";
import '../App.css';
import logo from "../assets/logo.jpg";

// Display Navbar
export default function DocNavbar() {
  const iname = window.iname;
  return (
    <div>
      <nav className="navbar background">
        <ul className="nav-list">
          <div className="logo">
            <img src={logo} alt='tele medicine'/>
          </div>
          <li></li>
          <li>
            <Link to={`/dProfile/${iname}`}>Dr. {iname}</Link>
          </li>
          <li>
            <Link to='/aList'>Appointments</Link>
          </li>
          <li>
            <Link to='/'>Logout</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}


