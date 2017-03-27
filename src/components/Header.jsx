import React from 'react';
import '../../styles/bootstrap-3.3.7-dist/css/bootstrap.min.css';
import $ from '../../jquery/jquery-3.1.1.min.js';

export default class Header extends React.Component{
	constructor(){
		super();
		this.state={
			navigation: 1
		}
	}
	handleClick(index){
		let self= this;
		console.log("index ",index,this.state);
		this.setState({navigation: index},function(){
			self.props.callback(index);
		}.bind(self));
	}

	renderLi(name,index,context){
		if(context.state.navigation==index){
			return (
				<li role="presentation" className="active" onClick={context.handleClick.bind(context,index)}><a href="#">{name}</a></li>
			);
		}
		return (
			<li role="presentation" onClick={context.handleClick.bind(context,index)}><a href="#">{name}</a></li>
		);
	}

	render(){
		let self= this;
		return (
			<div className="page-header">
				<h1>Water Management System <small>Rainfall and water level prediction</small></h1>
				<br/>
				<ul className="nav nav-pills">
					{self.renderLi("Home",1,self)}
					{self.renderLi("View Map",2,self)}
					{self.renderLi("Weather data",3,self)}
					{self.renderLi("Contact us",4,self)}
				</ul>
			</div>
		);
	}
}
