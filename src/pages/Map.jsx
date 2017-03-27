import React from 'react';

export default class Map extends React.Component {
	constructor(){
		super();
	}

	render(){
  		return (
  			<div className="app-container container-fluid" >
  					<div className="row container-fluid">
  						<div className="col col-sm-6 locationDiv" id="map">
  							<img src="http://srilankamap.facts.co/srilankamapof/SriLankaBlankMap.png" />
  						</div>
  						<div className="col col-sm-6 descriptionDiv" id="locationDetails">
  							<div className="row container-fluid">
  								<div className="col col-sm-5">
  									<h4>
  									Location
  									</h4>
  								</div>
  								<div className="col col-sm-2">
  								<h4>
  								:
  								</h4>
  								</div>
  								<div className="col col-sm-5">
  								<h4>
  								Randenigala
  								</h4>
  								</div>
  							</div>
  							<div className="row container-fluid">
  								<div className="col col-sm-5">
  									<h4>
  									height from sea level
  									</h4>
  								</div>
  								<div className="col col-sm-2">
  								<h4>
  								:
  								</h4>
  								</div>
  								<div className="col col-sm-5">
  								<h4>
  								1345m
  								</h4>
  								</div>
  							</div>
  							<div className="row container-fluid">
  								<div className="col col-sm-5">
  									<h4>
  									water level
  									</h4>
  								</div>
  								<div className="col col-sm-2">
  								<h4>
  								:
  								</h4>
  								</div>
  								<div className="col col-sm-5">
  								<h4>
  								55m
  								</h4>
  								</div>
  							</div>
  							<div className="row container-fluid">
  								<div className="col col-sm-5">
  									<h4>
  									Rainfall
  									</h4>
  								</div>
  								<div className="col col-sm-2">
  								<h4>
  								:
  								</h4>
  								</div>
  								<div className="col col-sm-5">
  								<h4>
  								13mm
  								</h4>
  								</div>
  							</div>

  						</div>
  					</div>
  			</div>
  		);
  	}
}
