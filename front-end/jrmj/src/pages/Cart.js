import React from 'react'
import api from '../api';
import Stripe from "react-stripe-checkout";
import { Header, Footer } from "../components";
import axios from 'axios';




function Cart() {
  
    return (
        <>
          <Header />
          <div className="content">
          <h1 className="text-center">Cart</h1>
          <h4 className="text-center">(This is where items will populate)</h4>
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
