import React, { useContext } from 'react';
import Cart from "../images/Cart.jpg";
import { CartContext } from '../context/cart-context';

const CartIcon = () => {
    const { itemCount, cartItems } = useContext(CartContext);
    return (
        <div>
            <img className="cart-logo" src={ Cart } alt="shopping cart" ></img>
            { itemCount > 0 ? <span className='cart-count'> { itemCount } </span>  : null }
        </div>  
    )
}

export default CartIcon;
