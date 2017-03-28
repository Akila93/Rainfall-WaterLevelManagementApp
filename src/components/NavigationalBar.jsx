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
		let optionsForHeader=this.props.optionsForHeader;
		let listOfOption=[];
		let item={};
		let currentNevigation=this.state.navigation;
		if(currentNevigation==1){
			item=optionsForHeader[0];
			listOfOption.push(item);
		}else{
			item=optionsForHeader[0];
			item.live=false;
			listOfOption.push(item);
			item=optionsForHeader[currentNevigation-1];
			item.live=true;
			listOfOption.push(item);
		}

		return listOfOption;
	}
	renderBreadcrumb(){

		let options=this.generateOptionsForBread();
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
		let optionsForHeader=this.props.optionsForHeader;
		let self=this;
		return (
			<div className="container-fluid">
				<Header options={optionsForHeader} callback={self.handleNavigationCallback.bind(self)}/>
				{self.renderBreadcrumb()}
			</div>
		);
	}
}
