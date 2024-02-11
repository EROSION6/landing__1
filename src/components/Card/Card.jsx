import { useRef } from 'react';
import './Card.scss';
import { useScroll, motion } from 'framer-motion';

function Card({ item }) {
	const ref = useRef(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['1 3', '1 1'],
	});

	return (
		<motion.article
			ref={ref}
			style={{ scale: scrollYProgress, opacity: scrollYProgress }}
			transition={{
				duration: 0.5,
			}}>
			<figure>{item.icon}</figure>
			<div className='img_res'>
				<img src={item.imgUrl} alt={item.title} />
			</div>
			<footer className='text_content_info'>
				<strong>{item.title}</strong>
				<p>{item.info}</p>
			</footer>
		</motion.article>
	);
}

export default Card;
