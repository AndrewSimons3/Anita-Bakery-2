import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import { useState, useContext } from 'react';
import CartContext from '../../store/cart-context';
import Checkout from './Checkout';
import React from 'react';

const Cart = props => {
  const [isCheckout, setIsCheckout] = useState(false);

  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = id => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = item => {
    cartCtx.addItem({ ...item, amount: 1});
  };

  const orderHandler = (e) => {
    setIsCheckout(true);
  }


  const cartItems = ( 
    <ul className={classes['cart-item']}>
      {cartCtx.items.map(item =>  ( 
        <CartItem 
          key={item.id} 
          name={item.name} 
          amount={item.amount} 
          price={item.price} 
          onRemove={cartItemRemoveHandler.bind(null, item.id)} 
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const modalActions = (
			<div className={classes.actions}>
				<button className={classes['button--alt']} onClick={props.onClose}>
					Close
				</button>
				{hasItems && (
					<button className={classes.button} onClick={orderHandler}>
						Order
					</button>
				)}
			</div>
  );
  
  const cartModalContent = (
    <React.Fragment>
    	{cartItems}
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout />
      )}
    </React.Fragment>
  )

  return (
    <Modal onClose={props.onClose}>
      {cartModalContent}
      {modalActions}
		</Modal>
	);
};

export default Cart;