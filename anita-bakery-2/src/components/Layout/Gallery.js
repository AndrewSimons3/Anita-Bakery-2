import React from 'react';
import classes from './Gallery.module.css';
import one from '../images/image1.jpg';
import two from '../images/image2.jpg';
import three from '../images/image3.jpg';
import four from '../images/image4.jpg';
import five from '../images/image5.jpg';
import six from '../images/image6.jpg';
import seven from '../images/image7.jpg';
import eight from '../images/image8.jpg';

const Gallery = () => {
	return (
		<div className={classes['gallery-wrapper']}>
			<div className={classes.row}>
				<div className={classes.column}>
					<div className={classes.imageContainer}>
						<img className={classes.one} src={one} alt='' />
					</div>
					<div className={classes.imageContainer}>
						<img src={two} alt='' />
					</div>

					<div className={classes.imageContainer}>
						<img src={three} alt='' />
					</div>

					<div className={classes.imageContainer}>
						<img src={four} alt='' />
					</div>
				</div>
				<div className={classes.column}>
					<div className={classes.imageContainer}>
						<img src={five} alt='' />
					</div>

					<div className={classes.imageContainer}>
						<img src={six} alt='' />
					</div>

					<div className={classes.imageContainer}>
						<img src={seven} alt='' />
					</div>

					<div className={classes.imageContainer}>
						<img src={eight} alt='' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Gallery;
