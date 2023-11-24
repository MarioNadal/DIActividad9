import { useState } from 'react';

import Events from './components/Events/Events';
import MainHeader from './components/MainHeader/MainHeader';
import CartItemContext from './components/store/cartItem-context';

function App() {
  const [cartItems, setCartItems] = useState([]);

  function addItemHandler(item) {
    setCartItems((prevItems) => [...prevItems, item]);
  }

  function removeItemHandler(itemId) {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  }

  const cartItemCtxValue = {
      cartItem: cartItems,
      cartAddItem: addItemHandler,
      unCartItem: removeItemHandler
  };

  return (
    <CartItemContext.Provider value={cartItemCtxValue}>
      <Events />
      <MainHeader />
    </CartItemContext.Provider>
    // <>
    //   <MainHeader cartItems={cartItems} />
    //   <main>
    //     <Events
    //       onAddItemToCart={addItemHandler}
    //       onRemoveItemFromCart={removeItemHandler}
    //       cartItems={cartItems}
    //     />
    //   </main>
    // </>
  );
}

export default App;
