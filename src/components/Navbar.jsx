import React from 'react';
import './Navbar.css'
import { NavLink, Navigate } from 'react-router-dom';

function Navbar({ logo }) {
    return (
      <div className="wrapper">
        <nav className='navbar'>
          <ul>
            <NavLink to={"/"}><img src={logo} alt="Site logo" /></NavLink>
            <li><NavLink to={"/download/windows"}>Download</NavLink></li>
            <li><NavLink to={"/pricing"}>Pricing</NavLink></li>
            <li><NavLink to={"/encryption"}>Encryption</NavLink></li>
          </ul>
          <button className="btn">Sign in</button>
        </nav>
      </div>
    );
}

export default Navbar;