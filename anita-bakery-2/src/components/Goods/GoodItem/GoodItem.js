import { useContext } from 'react';
import classes from './GoodItem.module.css';
import GoodItemForm from './GoodItemForm';
import CartContext from '../../../store/cart-context';

const GoodItem = props => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    });
  }

  return ( 
    <li className={classes.good}>
      <div className={classes.left}>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div className={classes.right}>
      <GoodItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  )
};

export default GoodItem;