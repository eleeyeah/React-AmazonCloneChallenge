import React, { useEffect } from 'react'
import './Checkout.css';

import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {

    const [basket] = useStateValue();

    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img className='checkout__ad' src='https://images.unsplash.com/photo-1594969155368-f19485a9d88c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='' />

                <div>

                    <h2 className="checkout__title">Your shopping Basket</h2>

                    {basket.map(item => (
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