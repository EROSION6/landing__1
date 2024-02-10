import React, { useRef } from 'react';
import SectionWithTitle from './UI/SectionWithTitle/index';
import MyButton from './UI/MyButton/index';
import './scss/Footer.scss';
import { useScroll, motion } from 'framer-motion';

function Footer() {
	const ref = useRef(null);

	const { scrollYProgress: footerCardProgress } = useScroll({
		target: ref,
		offset: ['1 3', '1 1'],
	});

	return (
		<motion.footer
			ref={ref}
			style={{
				scale: footerCardProgress,
				opacity: footerCardProgress,
				transition: footerCardProgress,
			}}
			transition={{
				duration: 0.5,
			}}
			className='footer'>
			<SectionWithTitle
				type='center'
				className='text-footer'
				subtitle='Get Started and Boost Your Payment Management'
				info='Join today and experience the simplicity of financial control.'
			/>
			<div className='btn-container-footer'>
				<MyButton type='primary'>Start Free trial</MyButton>
				<MyButton type='secondary'>Learn More</MyButton>
			</div>
		</motion.footer>
	);
}

export default Footer;
