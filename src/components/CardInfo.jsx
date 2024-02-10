import React, { useRef } from 'react';
import MyButton from './UI/MyButton/index';
import './scss/CardInfo.scss';
import { IoCardOutline } from 'react-icons/io5';
import { MdOutlineQrCode2 } from 'react-icons/md';
import { CgGlobeAlt } from 'react-icons/cg';
import classNames from 'classnames';
import TextBlockCardTwo from './UI/TextBlockCardTwo/index';
import { useScroll, motion } from 'framer-motion';

function CardInfo({ type }) {
	const cardInfoClass = classNames({
		leftCard: type === 'leftCard',
		rightCard: type === 'rightCard',
	});
	const ref = useRef(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['1 2', '1 1'],
	});
	return (
		<motion.div
			ref={ref}
			style={{ scale: scrollYProgress, opacity: scrollYProgress }}
			transition={{
				duration: 0.5,
			}}
			className={cardInfoClass}>
			<div className='left'>
				<TextBlockCardTwo
					type='leftTextBlock'
					title='Payment'
					subtitle='Dynamic Payment Modes'
					info='Offer your customers the freedom to make payments conveniently. Collaborate with a single
					provider for seamless payment acceptance and settlement.'
				/>
				<MyButton type='secondary'>Learn More</MyButton>
			</div>
			<div className='right'>
				<img
					src='https://framerusercontent.com/images/jdys7fAAAWJvecaYq0BamINxeuU.webp?scale-down-to=512'
					alt='vs'
				/>
				<div className='icon_img'>
					<CgGlobeAlt />
					<IoCardOutline />
					<MdOutlineQrCode2 />
				</div>
			</div>
		</motion.div>
	);
}

export default CardInfo;
