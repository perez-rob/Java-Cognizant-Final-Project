import React from 'react'
import { Header, Footer } from "../components";
import { Link } from 'react-router-dom';
import Lady from "../images/Lady.jpg"

function Explore() {
    return (
      <>
      <Header />
      <div className="content">

            {/* This page needs to be redone altogether */}
        <div className="explore-wrapper">
        <div className="img-wrapper">
          <img className="form-img" src={ Lady }  alt="Lady using pointer finger under chin looking up to sky" />

        </div>
        <div>
          <p>Ever had a dream of only seeing fancy shoes?</p>
          <p style={{fontWeight:"bold"}}>That's why we created JRMJ.</p>
        </div>
        </div>
        <Link to="/">
        <h1 className="shop-phrase">Come Shop With Us Today</h1>
        </Link>
      <Footer />  
      </div>
    </>
    )
}

export default Explore
