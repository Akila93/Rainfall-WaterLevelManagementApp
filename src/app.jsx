import React from 'react';
import Header from './Components/Header.jsx'
import '../styles/index.scss';
import '../styles/bootstrap-3.3.7-dist/css/bootstrap.min.css';
import $ from '../jquery/jquery-3.1.1.min.js';
export default class App extends React.Component {

	constructor(){
		super();
		this.state={navi:1};
	}
	handleNavigationCallback(index){
		this.setState({navi:index})
	}
	renderContent(){
		if(this.state.navi==1){
			return <div className="container-fluid"> home page detail ....</div>;
		}
		if(this.state.navi==2){
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
		if(this.state.navi==3){
			return <div className="container-fluid"> no data to show ....</div>;
		}
		if(this.state.navi==4){
			return <div className="container-fluid"> tel: 087-8838455<br/>321,<br/>colombo 10</div>;
		}
	}
  render() {
  	let self= this;
    return (
      <div className="container-fluid">
      	<Header callback={self.handleNavigationCallback.bind(self)}/>
				{this.renderContent()}
      </div>
    )
  }
}


