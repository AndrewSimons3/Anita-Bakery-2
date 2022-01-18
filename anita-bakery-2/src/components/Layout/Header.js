import { Fragment } from 'react';
import cupcake from '../../assets/cupcake.png'
import { Link } from 'react-scroll';
// import anitaImage from '../../assets/cookies.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = props => {
  return (
		<Fragment>
			<header className={classes.header}>
				<img className={classes.cupcake} src={cupcake} alt='cupcake' />
				<nav className={classes.nav}>
					<ul className={classes.navList}>
						<Link
							className={classes.navListItems}
							activeClass='active'
							to='main'
							spy={true}
							smooth={true}
							offset={-20}
							duration={500}
						>
							Home
						</Link>
						<Link
							className={classes.navListItems}
							activeClass='active'
							to='about'
							spy={true}
							smooth={true}
							offset={-20}
							duration={500}
						>
							About
						</Link>
						<Link
							className={classes.navListItems}
							activeClass='active'
							to='menu'
							spy={true}
							smooth={true}
							offset={-50}
							duration={500}
						>
							Menu
						</Link>
						<li>
							<HeaderCartButton onClick={props.onShowCart} />
						</li>
					</ul>
				</nav>
			</header>
		</Fragment>
	);
};

export default Header;