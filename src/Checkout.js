import React, { useEffect } from 'react'
import './Checkout.css';

import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {

    const [basket] = useStateValue();
    console.log(basket);

    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img className='checkout__ad' src='https://www.acurax.com/wp-content/themes/acuraxsite/images/inner_page_bnr.jpg?x21934' alt='' />

                <div>

                    <h2 className="checkout__title">Your shopping Basket</h2>

                    {basket.basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}

                </div>

            </div>

            <div className='checkout__right'>
                <Subtotal />

            </div>

        </div>
    )
}

export default Checkout;