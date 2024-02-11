import { motion, useAnimation } from 'framer-motion'
import { useState } from 'react'
import { RxCross1, RxHamburgerMenu } from 'react-icons/rx'
import MyButton from '../../UI/MyButton/index'
import './Header.scss'
const listNavigate = ['Home', 'Products', 'About', 'Pricing', 'Docs']

function Header() {
	const [active, setActive] = useState(false)
	const animationControls = useAnimation()

	const handleActive = () => {
		if (active) {
			setActive(!active)
			animationControls.start({ left: '0%' })
		} else {
			setActive(true)
			animationControls.start({ left: '-100%' })
		}
	}

	return (
		<header>
			<nav>
				<div className='logo'>
					<h1>Oritsu</h1>
				</div>
				<motion.div
					style={{ left: !active ? '0' : '-100%' }}
					initial={{ left: '-100%' }}
					animate={animationControls}
					className='center__header'
				>
					<ul>
						{listNavigate.map(item => (
							<li className='active' key={item}>
								<a href='#'>{item}</a>
							</li>
						))}
						<div onClick={handleActive} className='close'>
							<RxCross1 />
						</div>
					</ul>
				</motion.div>
				<div className='right'>
					<MyButton type='secondary'>Get Started</MyButton>
				</div>
				<div onClick={handleActive} className='burger'>
					<RxHamburgerMenu />
				</div>
			</nav>
		</header>
	)
}

export default Header
