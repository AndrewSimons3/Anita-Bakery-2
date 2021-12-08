import { Fragment } from 'react';

// import anitaImage from '../../assets/cookies.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = props => {
  return <Fragment>
    <header className={classes.header}>
      <h1 className={classes.title}>Anita's Bakery</h1>

      <nav className={classes.nav}>
        <ul className={classes.navList}>
          <li className={classes.navListItems}>Home</li>
          <li className={classes.navListItems}>About</li>
          <li className={classes.navListItems}>Menu</li>
          <li>
          <HeaderCartButton onClick={props.onShowCart}/>
          </li>
          
        </ul>
      </nav>
    </header>
    {/* <div className={classes['main-image']}>
      <img src={anitaImage} alt="table of Anita's baking goods!" />
    </div> */}
  </Fragment>
};

export default Header;