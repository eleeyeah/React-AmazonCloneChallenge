import React from 'react'
import './CheckoutProduct.css';

function CheckoutProduct(id, title, image, price, rating) {
    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} />

            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className='checkoutProduct__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='checkoutProduct__rating'>

                    {/* creates an array with the length of the rating and fills it with stars, then map through it and display the stars */}
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>⭐</p>
                        ))}
                </div>
                <button>Remove from Basket</button>

            </div>
        </div>
    )
}

export default CheckoutProduct;