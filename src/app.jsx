import React from 'react';
import NavigationalBar from './Components/NavigationalBar.jsx';
import Map from './pages/Map.jsx';
import Home from './pages/Home.jsx';
import WeatherData from './pages/WeatherData.jsx';
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
			return <Home/>;
		}
		if(this.state.navi==2){
		return (
			<Map/>
		);
		}
		if(this.state.navi==3){
			return <WeatherData/>;
		}
		if(this.state.navi==4){
			return <div className="container-fluid"> tel: 087-8838455<br/>321,<br/>colombo 10</div>;
		}
	}
  render() {
  	let self= this;
    return (
      <div className="container-fluid">
      	<NavigationalBar callback={self.handleNavigationCallback.bind(self)}/>
				{this.renderContent()}
      </div>
    )
  }
}


