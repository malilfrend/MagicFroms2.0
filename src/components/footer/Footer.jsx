import React from 'react';
import c from './Footer.module.css'

const Footer = () => {
	return (
		<footer className={c.footer}>
			<div className={c.footer__text}>
				<p>Made from Alesha Chebykin</p>
				<p>All rights reserved</p>
			</div>
		</footer>
	);
};

export default Footer;