import React from 'react'
import { animated, useSpring } from 'react-spring'

const Info = () => {
	// ** Animation
	const styles = useSpring({
		delay: 3000,
		from: {
			marginTop: -20000,
			transition: 'easeIn 1000 all'
		},
		to: {
			marginTop: 0,
			transition: 'easeIn 1000 all'
		}
	})
	return (
		<section id="info" className="text-center">
			<div className="container">
				<animated.h1 style={styles}>
					Health Emergency Information and Risk Assessment (HIM)
				</animated.h1>
				<animated.p style={styles}>
					The World Health Organization (WHO) is the directing and coordinating
					authority for public health within the United Nations system. The WHO
					Regional Office for the Eastern Mediterranean is one of WHO’s 6
					regional offices around the world. It serves the WHO Eastern
					Mediterranean Region, which comprises 21 Member States and occupied
					Palestinian territory (including East Jerusalem), with a population of
					nearly 679 million people.
				</animated.p>
			</div>
		</section>
	)
}

export default Info
