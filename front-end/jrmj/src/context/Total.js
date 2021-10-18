import React from 'react';

const Total = ({ itemCount, total, clearCart }) => {
    return (
        <div className='total-container text-center'>
            <div className='total'>
                <p> Total Items: {itemCount}</p>
                <p>{`Total: $${total}`}</p>
            </div>
            <div className='checkout'>
            <button className="checkout-button">CHECKOUT</button>
          <button className="clear-button" onClick={() => clearCart()}>CLEAR</button>
            </div>
        </div>
    )
}

export default Total;