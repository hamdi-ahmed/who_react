// ** React Imports
import React from 'react'

// ** Imgs
import facebook from '../../img/facebook.jpg'
import youtube from '../../img/youtube.png'
import twitter from '../../img/twitter.jpg'
import signal from '../../img/signal.png'
import footerLogo from '../../img/footerLogo.png'

const Footer = () => {
	return (
		<footer id="footer">
			<div className="container-chart">
				<div className="row">
					<div className="footer-1 col-lg-3 col-md-12 col-sm-12">
						<img id="logoFooter" src={footerLogo} alt='' />
						<div className="icons mt-3 mb-3">
							<a
								href="https://www.youtube.com/channel/UC07-dOwgza1IguKA86jqxNA"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img src={youtube} alt="Youtube" />
							</a>
							<a href="http://www.emro.who.int/rss-feeds.html" rel="noreferrer" target="_blank">
								<img src={signal} alt="Signal" />
							</a>
							<a href="https://twitter.com/whoemro" target="_blank" rel="noreferrer">
								<img src={twitter} alt="Twitter" />
							</a>
							<a
								href="https://www.facebook.com/WHO/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img src={facebook} alt="Facebook" />
							</a>
						</div>
					</div>
					<hr />
					<div className="col-lg-3 col-md-12 col-sm-12">
						<h3>Site Map</h3>
						<h5>Home</h5>
						<h5>Emergency Information</h5>
						<h5>COVID-19 map</h5>
						<h5>Event map</h5>
						<h5>Administrative Boundaries</h5>
						<h5>Dashboards</h5>
					</div>
					<hr />
					<div className="col-lg-3 col-md-12 col-sm-12">
						<h3>Help & Services</h3>
						<h5>Career</h5>
						<h5>Copyright</h5>
						<h5>Privacy</h5>
						<h5>Contact us</h5>
						<h5>ACyber Security</h5>
					</div>
					<hr />
					<div className="col-lg-3 col-md-12 col-sm-12">
						<h3>WHO offices</h3>
						<h5>WHO headquarter</h5>
						<h5>WHO african region</h5>
						<h5>WHO Region of the American</h5>
						<h5>WHO South-East Asia Region </h5>
						<h5>WHO European Region</h5>
						<h5>WHO Western Pacific Region</h5>
					</div>
				</div>
				<div className="row">
					<h3 style={{padding: "1rem 2rem"}}>&copy; WHO 2021</h3>
				</div>
			</div>
		</footer>
	)
}

export default Footer
