import classes from './Intro.module.css';
import { Fragment } from 'react';

const Intro = () => {
  return (
		<Fragment>
			<section className={['section-hero']}>
				<div className={classes.bg}>
					<div className={classes['hero-left']}>
						<h1 className={classes.title}>Anita's</h1>
						<h1 className={classes.title}>Bakery</h1>
						<button className={classes.button}>Shop Now</button>
					</div>
				</div>
			</section>
		</Fragment>
	);
};

export default Intro;
