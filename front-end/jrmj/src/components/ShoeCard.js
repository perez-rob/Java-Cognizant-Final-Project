import React, {useContext} from 'react';
import Testshoe from '../images/Testshoe.jpg';
import { isInCart } from '../helpers.js';
import { CartContext } from '../context/cart-context';
import cartReducer from '../context/cart-reducer';

function ShoeCard(data) {
  const { shoeName, imageUrl, price, history, shoeId } = data.data;
  const { addProduct, cartItems, increase } = useContext(CartContext);
  const product = { shoeName, imageUrl, price, shoeId};
  const itemInCart = isInCart(product, cartItems);

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
      {
        !itemInCart &&
        <button className="add-to-cart" onClick={() => addProduct(product)}>
        Add to cart</button>
      }
      {
        itemInCart &&
        <button className="add-to-cart" onClick={() => increase(product)}>
        Add more</button>
  
      }
      
    </div>
    </div>  
</div>
   </>

);

}


export default ShoeCard
