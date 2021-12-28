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
			<img src={one} alt='' />

			<img src={two} alt='' />

			<img src={three} alt='' />

			<img src={four} alt='' />

			<img src={five} alt='' />

			<img src={six} alt='' />

			<img src={seven} alt='' />

			<img src={eight} alt='' />
		</div>
	);
};

export default Gallery;
