// ** React Imports
import React from 'react'
import slider from '../../img/slider-1.png'
const Slider = ({ offsetY }) => {
	return (
		<div
			id="carouselExampleCaptions"
			className="carousel slide"
			data-bs-ride="carousel"
		>
			<div className="carousel-indicators">
				<button
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide-to="0"
					className="active"
					aria-current="true"
					aria-label="Slide 1"
				></button>
				<button
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide-to="1"
					aria-label="Slide 2"
				></button>
				<button
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide-to="2"
					aria-label="Slide 3"
				></button>
			</div>
			<div className="carousel-inner">
				<div
					style={{ transform: `translateY(${offsetY * 0.6}px)` }}
					className="carousel-item active"
				>
					<img src={slider} className="d-block w-100" alt="..." />
					<div className="carousel-caption">
						<p>
							is platform for exploring and sharing GIS data, products and
							documents in World Health Organization Regional Office for Eastern
							Mediterranean.
						</p>
					</div>
				</div>
				<div
					style={{ transform: `translateY(${offsetY * 0.6}px)` }}
					className="carousel-item"
				>
					<img src={slider} className="d-block w-100" alt="Img" />
					<div className="carousel-caption">
						<p>
							is platform for exploring and sharing GIS data, products and
							documents in World Health Organization Regional Office for Eastern
							Mediterranean.
						</p>
					</div>
				</div>
				<div
					style={{ transform: `translateY(${offsetY * 0.6}px)` }}
					className="carousel-item"
				>
					<img src={slider} alt="Img_Slider" className="d-block w-100" />
					<div className="carousel-caption">
						<p>
							is platform for exploring and sharing GIS data, products and
							documents in World Health Organization Regional Office for Eastern
							Mediterranean.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Slider
