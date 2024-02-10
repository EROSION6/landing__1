import React, { useRef } from 'react';
import CardContentList from './CardContentList';
import MyButton from './UI/MyButton/index';
import SectionWithTitle from './UI/SectionWithTitle/index';
import { firmaContentList } from './Data/data';
import { useScroll, motion } from 'framer-motion';

function BlockSelectionCard() {
	const ref = useRef(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['1 3', '1 1'],
	});

	return (
		<motion.div
			ref={ref}
			style={{ scale: scrollYProgress, opacity: scrollYProgress }}
			transition={{
				duration: 0.5,
			}}
			className='main__card-integrations'>
			<SectionWithTitle
				type='center'
				title='Integrations'
				subtitle='Seamless Integrations for Enhanced Management'
				info='We offers seamless compatibility with various payment gateways to maximize efficiency and streamline your operations.'
			/>
			<div className='main__card-block-firma'>
				{firmaContentList.map(item => (
					<CardContentList key={item.name} item={item} />
				))}
			</div>
			<MyButton style={{ position: 'absolute', bottom: '55px', zIndex: 2 }} type='secondary'>
				View All Integrations
			</MyButton>
			<div className='main__shadow'></div>
		</motion.div>
	);
}

export default BlockSelectionCard;
