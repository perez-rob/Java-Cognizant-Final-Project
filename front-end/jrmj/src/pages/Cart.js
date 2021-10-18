import React, { useContext } from 'react';
import api from '../api';
import Stripe from "react-stripe-checkout";
import { Header, Footer } from "../components";
import { CartContext } from "../context/cart-context";
import CartItem from '../components/CartItem';



function Cart() {
  const { cartItems, itemCount, total, } = useContext(CartContext);
    return (
        <>
          <Header />
          <div className="content">
          <h1 className="text-center">Cart</h1>
          { 
          cartItems.length === 0 ? <div className="text-center"> Your cart is empty</div>
          :
           <>
           <div className="cart-page">
           <div className="multi-card-wrapper">
             {
               cartItems.map(item => <CartItem { ...item } key={item.shoeId} />)
             }
           </div>
           </div>
           </>
           }
          <div className="text-center">
            <p>Total: $__</p>
            <button className="checkout-button">CHECKOUT</button>
            {/* <StripeCheckout /> */}
            <button className="clear-button">CLEAR</button>
          </div> 
          <Footer />
          </div>  
        </>
    )
}

export default Cart
