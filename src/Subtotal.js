import React from 'react';
import './Subtotal.css';
/* import CurrencyFormat from 'react-currency-format'; */
/* import ShoppingBasket from '@mui/icons-material/ShoppingBasket'; */

function Subtotal() {
  return (
    <div className="subtotal">
     {/*  {<CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):
              <strong>{` ${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />}
 */}
      <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;