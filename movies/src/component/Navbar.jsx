import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faBars} from "@fortawesome/free-solid-svg-icons"
import logo from "./logo.png"

import './Navbar.scss'

const Navbar = () => {

  const [isMobile, setIsMobail] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobail(!isMobile);
  };
  return (
   <nav className="navbar">
      <Link className='links' to="/" id="logo">        
        My Websites     
      </Link>
      <div className={`menu-icon ${isMobile ? 'active' : ''}`} onClick={toggleMobileMenu}>
      <FontAwesomeIcon icon={faBars} />
      </div>
      <ul className={`nav-links ${isMobile ? 'mobile' : ''}`}>
        <li>
          <Link className ="links" to="/">Home</Link>
        </li>
        <li>
          <Link className ="links" to="/login">Login</Link>
        </li>
        <li>
          <Link className ="links" to="/register">Register</Link>
        </li>
      </ul>
    </nav>  
  )
}

export default Navbar