// ** React Imports
import React, { useRef } from 'react'
import { animated, useSpring } from 'react-spring'
import { Link } from 'react-router-dom'

// ** Components
import logo from '../../img/logo.png'

const Header = () => {
	// ** Refs
	const n = useRef(0)

	// ** Animation
	const styles = useSpring({
		loop: () => 3 > n.current++,
		delay: 100,
		from: {
			opacity: 0,
			transition: 'easeIn 1000 all'
		},
		to: {
			opacity: 1,
			transition: 'easeIn 1000 all'
		}
	})

	// ** Links
	const href = '#'
	return (
		<header id="navbar">
			<animated.div style={styles} className="navbar__logo">
				<Link to="/">
					<img src={logo} alt="Logo" />
				</Link>
				<h1>WHO EMRO / GIS Health Emergency</h1>
			</animated.div>
			<nav className="navbar navbar-expand-lg navbar-light" id="nav_sticky">
				<div className="container">
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<div
								className="collapse navbar-collapse"
								id="navbarSupportedContent"
							>
								<ul className="navbar-nav mr-auto">
									{/* <li className="nav-item">
										<a href={href}>
											<img src={footerLogo} alt="Logo" />
										</a>
									</li> */}
									<li className="nav-item">
										<a className="nav-link" href={href}>
											Covid Dashboard
										</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href={href}>
											Event Dashboard
										</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href={href}>
											Map Stories
										</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href={href}>
											Geographical Data
										</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href={href}>
											Dashboards
										</a>
									</li>
								</ul>
							</div>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	)
}

export default Header
