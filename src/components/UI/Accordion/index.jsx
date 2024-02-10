import React, { useState, useRef } from 'react';
import './index.scss';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';

function index({ info }) {
	const [isOpen, setOpen] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const [ref, inView] = useInView({
		triggerOnce: true,
	});
	const AnimateRef = useRef(null);

	const handleAccordion = () => {
		setOpen(!isOpen);
	};

	const handleAnimationComplete = () => {
		setIsVisible(true);
	};

	return (
		<AnimatePresence>
			<motion.div
				ref={AnimateRef}
				initial={{ opacity: 0, y: 20 }}
				animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
				className={`accordion__item ${isVisible ? 'visible' : 'hidden'}`}
				transition={{
					duration: 0.5,
				}}
				onAnimationComplete={handleAnimationComplete}>
				<div className='accordion__header' onClick={handleAccordion}>
					<h4>{info.title}</h4>
					<i>{isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</i>
				</div>
				<motion.p
					className={`accordion__content ${isOpen ? 'open' : ''}`}
					ref={ref}
					initial={{ height: 'auto' }}
					animate={isOpen ? { height: 'auto' } : { height: 0 }}
					transition={{
						duration: 0.3,
					}}>
					{info.text}
				</motion.p>
			</motion.div>
		</AnimatePresence>
	);
}

export default index;
