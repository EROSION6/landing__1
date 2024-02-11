import { motion, useScroll } from 'framer-motion'
import React, { useRef, useState } from 'react'
import MyButton from '../../UI/MyButton/index'
import SectionWithTitle from '../../UI/SectionWithTitle'
import TextBlockCardTwo from '../../UI/TextBlockCardTwo/index'
import BlockSelectionCard from '../BlockSelectionCard/BlockSelectionCard'
import Card from '../Card/Card'
import CardInfo from '../CardInfo/CardInfo'
import { AccordionInfo, cardBlockInfo } from '../Data/data'
import './Main.scss'

function Main() {
	const centerCardRef = useRef(null)
	const [isAccordion, setAccordion] = useState(0)

	const handleAccordion = i => {
		isAccordion === i ? setAccordion(null) : setAccordion(i)
	}

	const { scrollYProgress: centerCardProgress } = useScroll({
		target: centerCardRef,
		offset: ['1 3', '1 1'],
	})

	return (
		<main className='main'>
			<section className='main__content_text'>
				<motion.span
					ref={centerCardRef}
					style={{ scale: centerCardProgress, opacity: centerCardProgress }}
					transition={{
						duration: 0.3,
					}}
				>
					<SectionWithTitle
						type='center'
						title='All-in-one'
						subtitle='Total Finance Empowerment'
						info='We serve a complete solution for businesses seeking a unified platform to elevate their finance.'
					/>
				</motion.span>
				<div className='main__center-card'>
					{cardBlockInfo.map((item, i) => (
						<Card key={i} item={item} />
					))}
				</div>
			</section>
			<section className='main__card-block-info'>
				<CardInfo type='leftCard' />
				<CardInfo type='rightCard' />
			</section>
			<BlockSelectionCard />
			<motion.section className='main__accordion-block'>
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
					{AccordionInfo.map((acc, i) => (
						<div key={i} className='accordion__item'>
							<button
								className='accordion__item__btn'
								onClick={() => handleAccordion(i)}
							>
								{acc.title}
							</button>
							<div
								className={`accordion__item__text ${
									isAccordion === i ? 'openTab' : ''
								}`}
							>
								{acc.text}
							</div>
						</div>
					))}
				</aside>
			</motion.section>
		</main>
	)
}

export default Main
