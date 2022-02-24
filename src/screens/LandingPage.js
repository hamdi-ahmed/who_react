// ** React Imports
import React, { Fragment, useEffect, useState } from 'react'

// ** Components
import Info from '../components/information/Info'
import Outbreak from '../components/outbreak/Outbreak'
import Slider from '../components/slider/Slider'
import Explore from '../components/explore/Explore'
import Emro from '../components/emro/Emro'
import Active from '../components/active/Active'

const LandingPage = () => {
	// ** States
	const [offsetY, setOffsetY] = useState(0)

	// ** Sticky Navbar
	const stickyNavbar = () => {
    const navElement = document.getElementById('nav_sticky')
		// ** Sticky Navbar
		if (window.scrollY >= 167) {
			navElement.classList.add('nav_fixed')
		} else {
			navElement.classList.remove('nav_fixed')
		}
	}

	// ** Para Scroll
	const handleScroll = () => setOffsetY(window.pageYOffset)

	// ** Sticky Navbar Event
	useEffect(() => {
		window.addEventListener('scroll', stickyNavbar)
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	})

	return (
		<Fragment>
			<Slider offsetY={offsetY}/>
			<Info />
			<Outbreak offsetY={offsetY}/>
			<Explore offsetY={offsetY}/>
			<Emro />
			<Active />
		</Fragment>
	)
}

export default LandingPage
