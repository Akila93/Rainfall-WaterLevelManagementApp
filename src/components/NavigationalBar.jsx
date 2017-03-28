import React from 'react';
import Header from '../Components/Header.jsx';

export default class NavigationalBar extends React.Component {

	constructor(){
		super();
		this.state={
			navigation: 1
		}
	}

	handleNavigationCallback(index){
		let self=this;
		this.setState({navigation: index},function(){
			self.props.callback(index);
		}.bind(self));

	}
	renderLi(option,key){
		console.log("name:",option.name,"  live: ",option.live);
		if(option.live==true){
		console.log("name:",option.name,"  live:    ",option.live);
			return (
				<li key={key}><a href={option.link} className="active"><u>{option.name}</u></a></li>
			);
		}else{
			return (
				<li key={key}><a href={option.link}>{option.name}</a></li>
			);
		}

	}
	generateOptionsForBread(){
		let listOfOption=[];
		let item={}

		return listOfOption;
	}
	renderBreadcrumb(){

		let options=[
			{
				name:"Home",
				live: false,
				link: "#"
			},
			{
				name:"Library",
				live: false,
				link: "#"
			},
			{
				name:"Library",
				live: true,
				link: "#"
			}
		];
		let self=this;
		return (
			<ol className="breadcrumb">
				{options.map(function(option,key){
					return (
						self.renderLi(option,key)
					);
				})}
			</ol>
		);
	}

	render(){
		let optionsForHeader=[
			{
				name:"Home",
				live: true,
				link: "#"
			},
			{
				name:"View Map",
				live: false,
				link: "#"
			},
			{
				name:"Weather data",
				live: false,
				link: "#"
			},
			{
				name:"Contact us",
				live: false,
				link: "#"
			}
		];
		let self=this;
		return (
			<div className="container-fluid">
				<Header options={optionsForHeader} callback={self.handleNavigationCallback.bind(self)}/>
				{self.renderBreadcrumb()}
			</div>
		);
	}
}
