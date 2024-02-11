import React, { useRef } from 'react';
import './index.scss';
import classNames from 'classnames';
import { useScroll, motion } from 'framer-motion';

function index({ title, subtitle, info, type, style, ...props }) {
	const textStyleClass = classNames({
		center: type === 'center',
		left_text: type === 'left_text',
	});

	const textBlockRef = useRef(null);

	const { scrollYProgress: textBlockProgress } = useScroll({
		target: textBlockRef,
		offset: ['1 3', '1 1'],
	});

	return (
		<motion.div
			{...props}
      ref={textBlockRef}
			style={{ scale: textBlockProgress, opacity: textBlockProgress }}
			className={textStyleClass}>
			<b>{title}</b>
			<strong>{subtitle}</strong>
			<p>{info}</p>
		</motion.div>
	);
}

export default index;
