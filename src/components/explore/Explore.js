import React from 'react'
import { useNavigate } from 'react-router-dom'
import moon from '../../img/moon.png'
import { animated, useSpring } from 'react-spring'

const Explore = () => {
	// ** Router
	const history = useNavigate()

	// ** Animation
	const styles = useSpring({
		from: {
			opacity: 0,
			transition: 'all easeIn 5000'
		},
		to: {
			opacity: 1,
			transition: 'all easeIn 5000'
		},
		delay: 7000
	})

	// ** login
	const handleLogin = () => {
		localStorage.getItem('token') === null
			? history('/login')
			: window.location.replace(
					'https://www.arcgis.com/apps/dashboards/93070e9f00424cb0988c70a3cb51f54b'
			  )
	}
	return (
		<animated.section style={styles} id="explore">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-md-6">
						<h1>
							Explore Map of early detection, assessment, and response to acute
							public health Events
						</h1>
						<button
							onClick={handleLogin}
							id="login_page"
							className="info__button"
						>
							Explore The Map
						</button>
					</div>
				</div>
			</div>

			<img src={moon} alt="" />
		</animated.section>
	)
}

export default Explore
