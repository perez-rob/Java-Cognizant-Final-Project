import React from 'react';
import { Link } from 'react-router-dom'


function Header() {
  return (
    <>
    <div className="super-header">
    <h5 className="message">To help support Breast Cancer Awareness, 10% of all sales will go towards Breast Cancer Research Foundation </h5>
    <div className="nav-wrapper">
      <div className="sidebar">
        <h3 className="logo"><Link to="/">JMRJ</Link></h3>

        <ul className="nav-links-start">
          <li><Link to="/">
              SHOP
          </Link></li>
          <li><Link to="/Explore">
              EXPLORE
          </Link></li>
        </ul>
       
        <ul className="nav-links-end">
          <li><Link to="/Login">
            LOGIN
          </Link></li>
          <li><Link to="#">
            CART ICON
          </Link></li>
        </ul>
        
      </div>
    </div>
    </div>
    </>
  );
}

export default Header;