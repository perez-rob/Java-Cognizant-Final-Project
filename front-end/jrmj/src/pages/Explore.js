import React from 'react'
import { Header, Footer } from "../components";
import { Link } from 'react-router-dom';
import shoes2 from "../images/shoes2.png"
import mens2 from "../images/mens2.jpg"

function Explore() {
  return (
    <>
      <Header />
      <div className="content">

        {/* This page needs to be redone altogether */}
        <div className="explore-wrapper">
          <div className="img-wrapper">
            <img className="form-img" src={shoes2} alt="black high heels with gemstones" />
          </div>
          <div>
            <p>JMRJ curates only the finest designer and high-end </p>
              <p>
                shoes from around the world. 
             If they are the best, we have them.
            </p>
          
          </div>
          <div > <img src={mens2} alt="black high heels with gemstones" /></div>
          <p>Our skilled curators travel the world to find you the shoe
            of your dreams.
          </p>
            
        </div>
        <Link to="/">
          <h2 className="shop-phrase">Enter a new world of luxury now.</h2>
        </Link>
        <Footer />
      </div>
    </>
  )
}

export default Explore
