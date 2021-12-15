import classes from './Main.module.css';
import { Fragment } from 'react';
import { Button } from 'react-scroll';

const Intro = () => {
	return (
		<Fragment>
			<section id='main' className={['section-hero']}>
				<div className={classes.bg}>
					<div className={classes['hero-left']}>
						<h1 className={classes.title}>Anita's</h1>
						<h1 className={classes.title} id={classes.anitaTitle}>Bakery</h1>
						{/* <button className={classes.button}>Shop Now</button> */}
						<Button
							className={classes.button}
							activeClass='active'
							type='submit'
							value='Order Now'
							to='menu'
							spy={true}
							smooth={true}
							offset={50}
							duration={500}
						></Button>
					</div>
				</div>
			</section>
		</Fragment>
	);
};

export default Intro;
