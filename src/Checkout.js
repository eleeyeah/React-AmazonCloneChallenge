import React from 'react'
import './Checkout.css';
/* import Subtotal from './Subtotal'; */

function Checkout() {
  return (
    <div className='checkout'>
        <div className='checkout__left'>
            <img className='checkout__ad' src='https://images.unsplash.com/photo-1594969155368-f19485a9d88c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt=''/>
            <div>
            <h2 className='checkout__title'>Your Shopping Basket</h2>
            {/* BasketItem */}
            {/* BasketItem */}
            {/* BasketItem */}
            {/* BasketItem */}
            </div>
        </div>
        <div className='checkout__right'>
           {/* <Subtotal />  */}
            <h2>The subtotal will go here</h2>
            
            

        </div>
        
    </div>
  )
}

export default Checkout