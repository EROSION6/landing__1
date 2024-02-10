import React, { useRef } from 'react';
import './scss/ReclamationMark.scss';
import Marquee from 'react-fast-marquee';
import { advertising } from './Data/data';
import { useScroll, motion } from 'framer-motion';

function ReclamationMark() {
	const ref = useRef(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['1 3', '1 1'],
	});
	return (
		<motion.div
			ref={ref}
			style={{ scale: scrollYProgress, opacity: scrollYProgress }}
			className='ticker'>
			<div className='ticker__wrapper'>
				<Marquee speed={100} gradient={false}>
					{advertising.map((advert, i) => (
						<div key={i} className='ticker__item'>
							<a href='#'>
								<img src={advert.icon} alt='icon' /> {advert.text}
							</a>
						</div>
					))}
				</Marquee>
			</div>
		</motion.div>
	);
}

export default ReclamationMark;
