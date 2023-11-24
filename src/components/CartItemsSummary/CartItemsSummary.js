import { useContext } from 'react';

import CartItemContext from '../store/cartItem-context';

function CartItemsSummary(){
    const cartItemsCtx = useContext(CartItemContext);
    const numberOfCartItems = cartItemsCtx.CartItemContext.length;

    return(
        <>
            <p>{numberOfCartItems} cart items</p>
            <ul>
                {cartItemsCtx.cartItemsCtx.map((item)=>(
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </>
    );
}

export default CartItemsSummary;