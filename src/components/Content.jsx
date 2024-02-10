import React, { useRef } from 'react';
import './scss/Content.scss';
import MyButton from './UI/MyButton/index';
import ReclamationMark from './ReclamationMark';
import SectionWithTitle from './UI/SectionWithTitle/index';
import { useScroll, motion } from 'framer-motion';

export default function Content() {
	const ref = useRef(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['1 3', '1 1'],
	});
	return (
		<main className='content'>
			<section className='content__text'>
				<SectionWithTitle
					type='center'
					className='text-footer'
					subtitle='Unified Financial Platform to Manage Your Payment'
					info='An all-in-one solution for effortless payment acceptance, fortified revenue protection,
					and comprehensive financial control.'
				/>
			</section>
			<div className='content__btn'>
				<MyButton type='primary'>Start Free trial</MyButton>
				<MyButton type='secondary'>Learn More</MyButton>
			</div>

			<motion.aside
				style={{ scale: scrollYProgress, opacity: scrollYProgress }}
				ref={ref}
				transition={{
					duration: 0.5,
				}}
				className='content__images_block'>
				<div className='content__images'>
					<img
						src='https://framerusercontent.com/images/Sr8MLXa3us2ODhRKpS6ThIXAwY.webp?scale-down-to=2048'
						alt='Dashboard'
					/>
					<div className='content__images_pod_block'>
						<img
							src='https://framerusercontent.com/images/HhtgridwE7xXW3ts05nnbh78hgY.webp?scale-down-to=2048'
							alt=''
						/>
						<img
							src='https://framerusercontent.com/images/u0jYKCilew1OAHeZdWWa0qyEI.webp?scale-down-to=2048'
							alt=''
						/>
					</div>
				</div>
			</motion.aside>
			<ReclamationMark />
		</main>
	);
}
