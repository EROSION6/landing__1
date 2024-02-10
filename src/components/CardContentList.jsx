import React, { useRef } from 'react';
import './scss/CardContentList.scss';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { useScroll, motion } from 'framer-motion';

function CardContentList({ item }) {
	const ref = useRef(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['1 3', '1 1'],
	});

	return (
		<motion.div
			ref={ref}
			style={{ scale: scrollYProgress, opacity: scrollYProgress }}
			className='cardFirma'>
			<span>
				<img src={item.icon} alt={item.name} />
			</span>
			<div className='text_content_firma'>
				<a href='#'>{item.name}</a>
				<p>
					View details <IoIosArrowRoundForward />
				</p>
			</div>
		</motion.div>
	);
}

export default CardContentList;
