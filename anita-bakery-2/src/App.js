import React, { useState } from 'react';
import Header from './components/Layout/Header';
import Goods from './components/Goods/Goods';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
import Main from './components/Layout/Main';
import About from './components/Layout/About';
import Gallery from './components/Layout/Gallery'
// import { Fragment } from 'react';


function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  } 

  return (
   <CartProvider>
     {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <Main />
      <About />
      <Gallery />
      <Goods />
   </CartProvider>
  );
}

export default App;
