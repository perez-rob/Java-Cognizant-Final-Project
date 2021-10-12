import React from 'react'
import Testshoe from '../images/Testshoe.jpg'
function ShoeCard() {
    return (
       <>
       <div className="card-wrapper"> 
        <img className="shoe-card-img" src={ Testshoe } alt="Shoe image" />
          
        <div className="card-info">
        <div className="card-left">
          <p className="shoe-card-name shoe-font">
          Shoe Name
          </p>
          <p className="shoe-card-brand shoe-font">
          Shoe brand
          </p>
        </div>
        <div className="card-right">
          <p className="shoe-card-price shoe-font">
          $295
          </p>
        </div>
        </div>  
    </div>
    </>
    )
}

export default ShoeCard
