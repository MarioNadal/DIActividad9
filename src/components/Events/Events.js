import { useContext } from 'react';
import dummyEvents from '../../data/dummy-events';
import EventItem from './EventItem';
import classes from './Events.module.css';
import CartItemContext from '../context';

function Events() {
  const datosItem = useContext(CartItemContext)
 
  return (
    <ul className={classes.events}>
      {dummyEvents.map((event) => {
         const datosEvent = {
          id: event.id,
          event : event,
          isInCart: datosItem.cartItem.some((item) => item.id === event.id),
          onAddToCart: () => datosItem.cartAddItem(event),
          onRemoveFromCart: () => datosItem.unCartItem(event.id)
          }
        return(
          <CartItemContext.Provider value={datosEvent}>
            <EventItem />
          </CartItemContext.Provider>
        );
      })}
    </ul>
  );
}

export default Events;
