import { Fragment } from 'react';
import classes from './Main.module.css';
import background from '../images/background.jpg'

const Main = () => {
  return <Fragment>
    <section className={classes['section-hero']}>
        <div className={classes.hero}>
          <div className={classes['hero-text-box']}>
            <h1 className={classes['heading-primary']}>
              We make moving easy
            </h1>
            <p className={classes['hero-description']}>
              Let us handle all of your essential moving needs.  Whether it's electric, gas, water, TV, or internet.  We have you covered.
            </p>
            <button className={`${classes.btn} ${classes['btn--full']} ${['margin-right-sm']}`}
              >Get connected</button>
            <a href="#" class="btn btn--outline">Learn more &darr;</a>
          </div>
      </div>
    </section>
  </Fragment>
    
}

export default Main;