import React from 'react';

export default class WeatherData extends React.Component {

	render(){
		return (
			<div className="container-fluid">
				<h4><b>this is a WeatherData</b></h4>
				<div className="container-fluid">
					<div className="row" style={{border:'1px solid', padding:'20px',margin:'10px'}}>
						<div className="media">
							<div className="media-left">
								<a href="#">
									<img className="media-object" src="http://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/256/Status-weather-showers-scattered-night-icon.png" alt="..."/>
								</a>
							</div>
							<div className="media-body">
								<h4 className="media-heading"><b>Rainfall data</b></h4>
									The realtime rainfall data.
							</div>
						</div>
					</div>
					<div className="row" style={{border:'1px solid', padding:'20px',margin:'10px'}}>
						<div className="media">
							<div className="media-left">
								<a href="#">
									<img className="media-object" src="https://www.sunucuturkiye.com/images/bandwidth.png" alt="..."/>
								</a>
							</div>
							<div className="media-body">
								<h4 className="media-heading"><b>Water level data</b></h4>
									The realtime Water level data.
							</div>
						</div>
					</div>
				</div>

			</div>
		);
	}
}
