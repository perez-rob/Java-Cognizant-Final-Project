import React, {useContext} from 'react';
import Testshoe from '../images/Testshoe.jpg';
import { isInCart } from '../helpers.js';
import { CartContext } from '../context/cart-context';
import cartReducer from '../context/cart-reducer';
import { useConsumer } from "../utils/ConsumerContext";
import { Link } from 'react-router-dom';


function ShoeCard(data) {
  const { shoeName, imageUrl, price, history, shoeId } = data.data;
  const { addProduct, cartItems, increase } = useContext(CartContext);
  const product = { shoeName, imageUrl, price, shoeId};
  const itemInCart = isInCart(product, cartItems);

  const {currentUser, setCurrentUser} = useConsumer();


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
        !itemInCart && currentUser &&
        <button className="add-to-cart" onClick={() => {addProduct(product);
        console.log(cartItems)}}>
        Add to cart</button>
      }
      {
        itemInCart && currentUser &&
        <button className="add-to-cart" onClick={() => {increase(product);
        }}>
        Add more</button>
  
      }
      {
        !currentUser &&
        <Link to="/login"><button className="login-to-shop"><span>Login to Shop</span></button></Link>
      }
      
    </div>
    </div>  
</div>
   </>

);

}


export default ShoeCard
