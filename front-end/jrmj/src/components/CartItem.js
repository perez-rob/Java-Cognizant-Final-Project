import React from 'react';
import { PlusCircleIcon, MinusCircleIcon, TrashIcon } from '../icons/icons';

const CartItem = (product) => {
    const { shoeName, brand, imageUrl, price, quantity } = product;

    return (
        <div className="card-wrapper">
            <img className="shoe-card-img" src={imageUrl} alt='product' />
            <div className="card-info">
                <div className="card-left">
                    <p className="shoe-card-brand shoe-brand-font truncate-overflow-brand">
                        {brand}
                    </p>
                    <p className="shoe-card-name shoe-font truncate-overflow">
                        {shoeName}
                    </p>
                </div>
                <div>
                    <div className="card-right">
                    <p className="shoe-card-price shoe-price-font">${price}</p>
                    </div>
                </div>
            </div>
            <div className='btns-container text-center'>
            <p className="shoe-card-price shoe-price-font">{`Quantity: ${quantity}`}</p>
                    <button>
                    <PlusCircleIcon width='20px' />
                </button>
                {quantity === 1 &&
                    <button>
                        <TrashIcon width='20px' />
                    </button>
                }
                {
                    quantity > 1 &&
                    <button>
                        <MinusCircleIcon width='20px' />
                    </button>
                }
            </div>
        </div>
    );
}

export default CartItem;