import React, { useRef } from 'react'
import { animated, useSpring } from 'react-spring'

// ** Links
const href1 =
	'https://www.arcgis.com/apps/dashboards/91e730323624453090d3b8076273ae35'
const href2 =
	'https://www.arcgis.com/apps/dashboards/be0050d5495d432a8436435cd709f56e'

const Outbreak = () => {
	// ** Refs
	const n = useRef(0)
	// ** Animation
	const styles = useSpring({
		loop: () => 2 > n.current++,
		delay: 800,
		from: {
			opacity: 0,
			transition: 'easeIn 1000 all'
		},
		to: {
			opacity: 1,
			transition: 'easeIn 1000 all'
		}
	})

	const styles1 = useSpring({
		// loop: () => 2 > n.current++,
		delay: 5000,
		from: {
			marginRight: -3000,
			transition: 'easeIn 1000 all'
		},
		to: {
			marginRight: 0,
			transition: 'easeIn 1000 all'
		}
	})

	const styles2 = useSpring({
		// loop: () => 2 > n.current++,
		delay: 5000,
		from: {
			marginLeft: -3000,
			transition: 'easeIn 1000 all'
		},
		to: {
			marginLeft: 0,
			transition: 'easeIn 1000 all'
		}
	})

	return (
		<section className="outbreak container-fluid text-center">
			<animated.h1 style={styles} className="mt-3">
				Outbreaks and other emergencies in the WHO Eastern Mediterranean Region
			</animated.h1>
			<div className="row" style={{ margin: '0' }}>
				<div className="col-md-6 col-sm-12" id="ovarlay">
					<animated.div style={styles2} className="info__contnet text-center">
						<h1>National COVID</h1>
						<p>Outbreaks in the WHO Eastern Mediterranean Region</p>
						<button className="info__button">
							<a target="_blank" href={href1} rel="noreferrer">
								Explore The National COVID Map
							</a>
						</button>
					</animated.div>
				</div>
				<div className="col-md-6 col-sm-12" id="ovarlay1">
					<animated.div style={styles1}  className="info__contnet text-center">
						<h1>Sub / National COVID</h1>
						<p>Outbreaks in the WHO Eastern Mediterranean Region</p>
						<button className="info__button">
							<a target="_blank" href={href2} rel="noreferrer">
								Explore The Sub / National COVID Map
							</a>
						</button>
					</animated.div>
				</div>
			</div>
		</section>
	)
}

export default Outbreak
