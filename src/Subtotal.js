import React from 'react';
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';
import './Subtotal.css';



function Subtotal() {

  //pull stuff from the data layer
  const [{ basket }] = useStateValue();
  console.log(useStateValue());

  return (
    <div className="subtotal"
     value={getBasketTotal(basket)} 
      displayType={'text'}
      thousandSeparator={true}
      prefix={'$'}
      >
      <p>Subtotal ({basket.length} items): <strong>{value}</strong></p>
      <small className="subtotal__gift">
        <input type="checkbox" /> This order contains a gift
      </small>


    
      
      
      <button>Proceed to Checkout</button>

      

     
    </div>
  );
}

export default Subtotal;