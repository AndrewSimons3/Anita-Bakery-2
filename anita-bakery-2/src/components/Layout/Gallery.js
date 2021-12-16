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
			<figure>
				<img src={one} alt='' />
			</figure>
			<figure>
				<img src={two} alt='' />
			</figure>
			<figure>
				<img src={three} alt='' />
			</figure>
			<figure>
				<img src={four} alt='' />
			</figure>
			<figure>
				<img src={five} alt='' />
			</figure>
			<figure>
				<img src={six} alt='' />
			</figure>
			<figure>
				<img src={seven} alt='' />
			</figure>
			<figure>
				<img src={eight} alt='' />
			</figure>
		</div>
	);
};

export default Gallery;
