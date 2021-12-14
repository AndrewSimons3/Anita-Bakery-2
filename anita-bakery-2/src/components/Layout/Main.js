import { Fragment } from 'react';
import classes from './Main.module.css';

import store from '../../assets/shop.webp';

const Main = () => {
  return (
		<Fragment>
			<section className={classes['section-hero']}>
				<div className={classes['hero-left']}>
					<h1 className={classes.title}>About Us</h1>
					<h2 className={classes.summary}> Founded in 2017, we pride ourselves on making completely organic and all natural baking goods for any occasion.
						All of our goods are cooked with high-quality ingredients, by our
						experienced baker Anita!
          </h2>
          <button className={classes.button}>Shop Now</button>
				</div>
				<div className={classes['hero-right']}>
					<img className={classes.store} src={store} alt='coffee shop' />
				</div>
			</section>
		</Fragment>
	);
    
}

export default Main;