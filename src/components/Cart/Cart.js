import ReactDOM from 'react-dom';

import classes from './Cart.module.css';
import { useContext } from 'react';
import CartItemContext from '../context';

function Cart() {
  const datosCart = useContext(CartItemContext)
  const total = datosCart.datosItem.cartItem.reduce((prevVal, item) => prevVal + item.price, 0)

  return ReactDOM.createPortal(
    <>
      <div className={classes.backdrop} onClick={datosCart.closeCartModalHandler} />
      <aside className={classes.cart}>
        <h2>Your Cart</h2>
        <ul>
          {datosCart.datosItem.cartItem.map((item) => (
            <li key={item.id}>
              {item.title} (${item.price})
            </li>
          ))}
        </ul>
        <p className={classes.total}>Total: ${total}</p>
        <div className={classes.actions}>
          <button onClick={datosCart.closeCartModalHandler}>Close</button>
          <button onClick={datosCart.closeCartModalHandler}>Buy</button>
        </div>
      </aside>
    </>,
    document.getElementById("modal")
  );
}

export default Cart;
