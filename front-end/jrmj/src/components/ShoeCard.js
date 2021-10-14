import React from 'react'
import Testshoe from '../images/Testshoe.jpg'

function ShoeCard(data) {
  return (
    <>

   <div className="card-wrapper"> 
    <img className="shoe-card-img" src={ data.data.imageUrl } alt="Shoes" />
      
    <div className="card-info">
    <div className="card-left">
      
      <p className="shoe-card-brand shoe-brand-font truncate-overflow-brand">
      {data.data.brand}
      </p>
      <p className="shoe-card-name shoe-font truncate-overflow">
      {data.data.shoeName}
      </p>
    </div>
    <div className="card-right">
      <p className="shoe-card-price shoe-price-font">
      ${data.data.price}
      </p>
      <button class="add-to-cart">Add to cart</button>
    </div>
    </div>  
</div>
   </>

);

}


export default ShoeCard
