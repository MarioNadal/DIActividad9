import { useContext } from 'react';
import classes from './EventItem.module.css';
import CartItemContext from '../context';

function EventItem() {
  const datosEventItem = useContext(CartItemContext)
  let buttonCaption = 'Add to Cart';
  let buttonAction = datosEventItem.onAddToCart;

  if (datosEventItem.isInCart) {
    buttonCaption = 'Remove from Cart';
    buttonAction = datosEventItem.onRemoveFromCart;
  }

  return(
    <li className={classes.event}>
      <img src={datosEventItem.event.image} alt={datosEventItem.event.title} />
      <div className={classes.content}>
        <h2>{datosEventItem.event.title}</h2>
        <p className={classes.price}>${datosEventItem.event.price}</p>
        <p>{datosEventItem.event.description}</p>
        <div className={classes.actions}>
          <button onClick={buttonAction}>{buttonCaption}</button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
