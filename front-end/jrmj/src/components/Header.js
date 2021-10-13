import React from 'react';
import { Link } from 'react-router-dom';
import Cart from "../images/Cart.jpg";


function Header() {
  return (
    <>
    <div className="super-header" style={{backgroundColor:'black'}}>
    <h5 className="message scroll-text">To help support Breast Cancer Awareness, 10% of all sales will go towards Breast Cancer Research Foundation </h5>
    <div className="nav-wrapper">
      <div className="sidebar">
        <h3 className="logo"><Link to="/">JRMJ</Link></h3>

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
          <li><Link to="/Signup">
            SIGN UP
          </Link></li>
          <li><Link to="/Cart">
            <img className="cart-logo" src={ Cart } alt="shopping cart" ></img>
          </Link></li>
        </ul>
        
      </div>
    </div>
    </div>
    </>
  );
}

export default Header;