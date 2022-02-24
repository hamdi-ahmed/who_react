// ** React Imports
import React from 'react'
import map from "../../img/map1.png"

const Emro = () => {
	return (
		<div className="container-fluid" style={{padding: "0"}}>
			<div id="map" className="row" style={{margin: "0"}}>
				<div className="col-xl-3">
					<div className="map__content">
						<h1>
							GIS Administrative Boundaries - WHO for Eastern Mediterranean.
						</h1>
						<p>Level 0, 1, 2 - View or Download</p>
					</div>
				</div>
				<div className="col-xl-9">
					<div className="row">
						<div className="borderOnDiv col-lg-3 col-md-6 col-sm-12  col-xs-12">
							<div className="map__img">
								<img src={map} alt="" />
								<h1>EMRO_LEVEL 0</h1>
								<p>
									This dataset contains Eastern Mediterranean WHO countries
									(total features 47).
								</p>
								<button className="info__button">Explore</button>
							</div>
						</div>
						<div className="borderOnDiv col-lg-3 col-md-6 col-sm-12  col-xs-12">
							<div className="map__img">
								<img src={map} alt="" />
								<h1>EMRO_LEVEL 1</h1>
								<p>
									Level 1 Boundaries: States/Provinces (919 features) - Updated
									December 2019
								</p>
								<button className="info__button">Explore</button>
							</div>
						</div>
						<div className="borderOnDiv col-lg-3 col-md-6 col-sm-12  col-xs-12">
							<div className="map__img">
								<img src={map} alt="" />
								<h1>EMRO_LEVEL 2</h1>
								<p>
									Level 1 Boundaries: States/Provinces (919 features) - Updated
									December 2019
								</p>
								<button className="info__button">Explore</button>
							</div>
						</div>
						<div className="borderOnDiv col-lg-3 col-md-6 col-sm-12  col-xs-12">
							<div className="map__img">
								<img src={map} alt="" />
								<h1>EMRO_LEVEL 3</h1>
								<p>
									Level 1 Boundaries: States/Provinces (919 features) - Updated
									December 2019
								</p>
								<button className="info__button">Explore</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Emro
