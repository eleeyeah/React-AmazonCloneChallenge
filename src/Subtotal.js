import React from 'react';
import './Subtotal.css';
/* import CurrencyFormat from 'react-currency-format'; */


function Subtotal() {
  return (
    <div className="subtotal">
      <p>Subtotal (0 items): <strong>0</strong></p>
      <small className="subtotal__gift">
        <input type="checkbox" /> This order contains a gift
      </small>
      <button>Proceed to Checkout</button>

      {/* {<CurrencyFormat
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
      />} */}

      {/* <button onClick={e => history.push('/payment')}>Proceed to Checkout</button> */}
    </div>
  );
}

export default Subtotal;