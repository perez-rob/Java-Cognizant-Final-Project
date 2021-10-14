import React from 'react';
import Cart from "../images/Cart.jpg";

const CartIcon = () => {
    return (
        <div>
            <img className="cart-logo" src={ Cart } alt="shopping cart" ></img>
            <span>5</span> 
        </div>  
    )
}

export default CartIcon;
