import React, { useRef } from 'react';
import './scss/Main.scss';
import Card from './Card';
import CardInfo from './CardInfo';
import { cardBlockInfo, AccordionInfo } from './Data/data';
import SectionWithTitle from './UI/SectionWithTitle';
import MyButton from './UI/MyButton/index';
import TextBlockCardTwo from './UI/TextBlockCardTwo/index';
import Accordion from './UI/Accordion/index';
import { useScroll, motion } from 'framer-motion';
import BlockSelectionCard from './BlockSelectionCard';

function Main() {
	const centerCardRef = useRef(null);
	const accordionBlockRef = useRef(null);

	const { scrollYProgress: centerCardProgress } = useScroll({
		target: centerCardRef,
		offset: ['1 3', '1 1'],
	});

	const { scrollYProgress: accordionBlockProgress } = useScroll({
		target: accordionBlockRef,
		offset: ['1 3', '1 1'],
	});

	return (
		<main className='main'>
			<section className='main__content_text'>
				<motion.span
					ref={centerCardRef}
					style={{ scale: centerCardProgress, opacity: centerCardProgress }}
					transition={{
						duration: 0.3,
					}}>
					<SectionWithTitle
						type='center'
						title='All-in-one'
						subtitle='Total Finance Empowerment'
						info='We serve a complete solution for businesses seeking a unified platform to elevate their finance.'
					/>
				</motion.span>
				<div className='main__center-card'>
					{cardBlockInfo.map(item => (
						<Card key={item.icon} item={item} />
					))}
				</div>
			</section>
			<section className='main__card-block-info'>
				<CardInfo type='leftCard' />
				<CardInfo type='rightCard' />
			</section>
			<BlockSelectionCard />
			<motion.section
				ref={accordionBlockRef}
				style={{
					scale: accordionBlockProgress,
					opacity: accordionBlockProgress,
					transition: accordionBlockProgress,
				}}
				transition={{
					duration: 0.5,
				}}
				className='main__accordion-block'>
				<div className='main__left-accordion'>
					<TextBlockCardTwo
						type='leftTextBlock'
						title='Frequently Asked Questions'
						subtitle="Got Questions? We've Got Answers"
						info="Still didn't find what you're looking for? Click the 'Contact Us' button below to get in touch."
					/>
					<MyButton style={{ marginTop: 20 }} type='secondary'>
						Contact Us
					</MyButton>
				</div>
				<aside className='main__right-accordion'>
					{AccordionInfo.map(acc => (
						<Accordion info={acc} key={acc.id} />
					))}
				</aside>
			</motion.section>
		</main>
	);
}

export default Main;
