import React from 'react';
import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';
import userProfileIcon from '../images/UserProfile.png';
import { useConsumer } from "../utils/ConsumerContext";

function Header() {
  const {currentUser, setCurrentUser} = useConsumer();
  
  return (
    <>
    <div className="super-header" style={{backgroundColor:'black'}}>
     
    <h5 className="message scroll-text">To help support Breast Cancer Awareness, 10% of all sales will go towards Breast Cancer Research Foundation </h5>
   
    <div className="nav-wrapper">
      <div className="sidebar">
        <h3 className="logo"><Link to="/"><div className="jrm">JRM<a className="backwards">J</a></div></Link></h3>

        <ul className="nav-links-start">
          <li><Link to="/">
              SHOP
          </Link></li>
          <li><Link to="/Explore">
              EXPLORE
          </Link></li>
        </ul>
       
        <ul className="nav-links-end">
          {currentUser ? 
          (<><li>
            <Link to="/Cart">
          <CartIcon/>
        </Link>
        </li>
        <li>
          <Link to="/profile">
          <img className="cart-logo" src={ userProfileIcon } alt="shopping cart" ></img>
          </Link>
          </li></>) :
          (<><li>
            <Link to="/Login">
            LOGIN
          </Link>
          </li>
          <li>
            <Link to="/Signup">
            SIGN UP
          </Link>
          </li></>
          )}
        </ul>
        
      </div>
    </div>
    </div>
    </>
  );
}

export default Header;