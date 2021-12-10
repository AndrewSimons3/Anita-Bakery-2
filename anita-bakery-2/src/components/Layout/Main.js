import { Fragment } from 'react';
import classes from './Main.module.css';
import shop from '../images/shop.jpg';
import store from '../../assets/shop.webp';

const Main = () => {
  return (
		<Fragment>
			<section className={classes['section-hero']}>
				<div className={classes['hero-left']}>
					this is where the title and summary will go
				</div>
				<div className={classes['hero-right']}>
					<img className={classes.store} src={store} alt='coffee shop' />
				</div>
			</section>
		</Fragment>
	);
    
}

export default Main;