import classes from './Intro.module.css';
import background from '../images/mac.jpg'

const Intro = () => {
  return (
    <img src={background} className={classes.background} />
  )
};

export default Intro;
