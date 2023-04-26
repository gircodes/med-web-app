import React from "react";
import { Link } from "react-router-dom";
import '../App.css';
import logo from "../assets/logo.jpg";

// Display Navbar
export default function PtntNavbar() {
  const iname = window.iname.toString();
  return (
    <div>
      <nav className="navbar background">
        <ul className="nav-list">
          <div className="logo">
            <img src={logo} alt='tele medicine'/>
          </div>
          <li></li>
          <li>
            <Link to={`/pProfile/${iname}`}>{iname}</Link>
          </li>
          <li>
            <Link to='/dList'>Doctor List</Link>
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
