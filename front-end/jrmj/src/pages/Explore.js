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

        <div className="explore-wrapper mt-3">
          <div className="explore-img-wrapper">
            <img className="explore-img" src={shoes2} alt="black high heels with gemstones" />
          </div>
          <div>
            <p className="explore-top-text">JMRJ curates only the finest designer and high-end 
              
                shoes from around the world. 
             If they are the best, we have them.
             </p>
          </div>
        </div>

        <div className="explore-wrapper mt-3">
        <div>
          <p>Our skilled curators travel the world to find you the shoe
            of your dreams.
          </p>
          </div>
          <div className="explore-img-wrapper">
            <img className="explore-img" src={mens2} alt="black high heels with gemstones" />
          </div>

          

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
