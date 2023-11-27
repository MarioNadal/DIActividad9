import { useContext, useState } from 'react';

import Cart from '../Cart/Cart';
import classes from './MainHeader.module.css';
import CartItemContext from '../context';

function MainHeader() {
  const datosItem = useContext(CartItemContext)

  const [modalIsOpen, setModalIsOpen] = useState();

  function openCartModalHandler() {
    setModalIsOpen(true);
  }

  function closeCartModalHandler() {
    setModalIsOpen(false);
  }

  const numCartItems = datosItem.cartItem.length;
  
  const datosHeader = {
    closeCartModalHandler: closeCartModalHandler,
    datosItem: datosItem
  }
  return (
    <>
      <header className={classes.header}>
        <h1>StateEvents Shop</h1>
        <button onClick={openCartModalHandler}>Cart ({numCartItems})</button>
      </header>
      {modalIsOpen && 
      <CartItemContext.Provider value={datosHeader}>
        <Cart />
      </CartItemContext.Provider>}
    </>
  );
}

export default MainHeader;
