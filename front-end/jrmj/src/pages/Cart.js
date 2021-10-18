import React, { useContext } from 'react';
import api from '../api';
import Stripe from "react-stripe-checkout";
import { Header, Footer } from "../components";
import { CartContext } from "../context/cart-context";
import CartItem from '../components/CartItem';
import axios from 'axios';

async function handleToken(token) {
  //console.log(token);
  await axios.post("http://localhost:7979/charge", "", {
    headers: {
      token: token.id,
      amount: 500,
    },
  }).then(() => {
    alert("Payment Success");
  }).catch((error) => {
    alert(error);
  });
}




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
            <div> <Stripe
            stripeKey="pk_test_51JjhRnLiea7p0n0HUnks0w0ZwHFJC3jHH6wKqSw13QHcwO5QRvi7bQoB7FZIeWdkBI3qUoqC0vtHe8wAXI4Yq5BG00ZLAjHxJe"
            token={handleToken}
          /></div>
          </div> 
          <Footer />
          </div>  
        </>
    )

}

export default Cart
