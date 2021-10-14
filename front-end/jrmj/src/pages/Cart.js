import React from 'react'
import api from '../api';
import Stripe from "react-stripe-checkout";
import { Header, Footer } from "../components";
import axios from 'axios';



function Cart() {

  async function handleToken(token) {
    await axios.post("http://localhost:3939/charge", "", {         
      headers: {
  token: token.id,
  amount: 500,
},}).then(() => {
   alert("Payment Success");
   }).catch((error) => {
   alert(error);
   });

  

  }
  
    return (
        <>
          <Header />
          <div className="content">
         <h1 className="text-center">
          This is a cart page that will most likely become obsolete.</h1>
          <div>
          <Stripe
            stripeKey="pk_test_51JjhRnLiea7p0n0HUnks0w0ZwHFJC3jHH6wKqSw13QHcwO5QRvi7bQoB7FZIeWdkBI3qUoqC0vtHe8wAXI4Yq5BG00ZLAjHxJe"
            token={handleToken}
            />
            </div>
          <Footer />
          </div>  
        </>
    )
}

export default Cart
