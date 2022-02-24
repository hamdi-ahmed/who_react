// ** React Imports
import React from 'react'
import chart from '../../img/chart.png'
import { animated, useSpring } from "react-spring"

// ** Links
const href = '#'

const Active = () => {
	// ** Animation
	const styles = useSpring({
		from: {
			rotateZ: 0,
		},
		to: {
			rotateZ: 360,
		},
		delay: 9000
	})

	return (
		<div id="activeOnline">
			<h1 className="text-center">Active online interactive dashboards and apps</h1>
			<div className="container-chart">
				<div className="row" style={{ margin: '0', marginBottom: '3rem' }}>
					<animated.div style={styles} className="col-lg-6 col-md-12 activeOnline__content">
						<img src={chart} alt="" />
						<div className="contents">
							<h2>
								<a href={href} className="text-primary">
									COVID-19 updates in the WHO Eastern Mediterranean Region
								</a>
							</h2>
							<p className="lead">
								Dashboard showing the epidemiological situation of COVID-19 in
								the WHO Eastern Mediterranean Region.
							</p>
						</div>
					</animated.div>

					<animated.div style={styles} className="col-lg-6 col-md-12 activeOnline__content">
						<img src={chart} alt="" />
						<div className="contents">
							<h2>
								<a href={href} className="text-primary">
									COVID-19 updates in the WHO Eastern Mediterranean Region
								</a>
							</h2>
							<p className="lead">
								Dashboard showing the epidemiological situation of COVID-19 in
								the WHO Eastern Mediterranean Region.
							</p>
						</div>
					</animated.div>

				</div>

				<div className="row" style={{ margin: '0', marginBottom: '3rem' }}>
					<animated.div style={styles}className="col-lg-6 col-md-12 activeOnline__content">
						<img src={chart} alt="" />
						<div className="contents">
							<h2>
								<a href={href} className="text-primary">
									COVID-19 updates in the WHO Eastern Mediterranean Region
								</a>
							</h2>
							<p className="lead">
								Dashboard showing the epidemiological situation of COVID-19 in
								the WHO Eastern Mediterranean Region.
							</p>
						</div>
					</animated.div>

					<animated.div style={styles}className="col-lg-6 col-md-12 activeOnline__content">
						<img src={chart} alt="" />
						<div className="contents">
							<h2>
								<a href={href} className="text-primary">
									COVID-19 updates in the WHO Eastern Mediterranean Region
								</a>
							</h2>
							<p className="lead">
								Dashboard showing the epidemiological situation of COVID-19 in
								the WHO Eastern Mediterranean Region.
							</p>
						</div>
					</animated.div>
				</div>
			</div>
		</div>
	)
}

export default Active
