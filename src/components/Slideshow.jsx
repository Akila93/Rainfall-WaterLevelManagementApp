import React from 'react';
import $ from '../../jquery/jquery-3.1.1.min.js';


export default class Slideshow extends React.Component {
	constructor(){
		super();
		let theList=
		[
			{
				status:true,
				alternative:"failed to load..",
				image: "http://www.aqualegion.com/wp-content/uploads/Water-droplet-image-Water-sampling-and-water-testing-in-London-copy.jpg"
			},
			{
				status:false,
				alternative:"failed to load..",
				image: "http://www.genesisoilandgas.com/assets/images/pictures/services/pic_water_management.jpg"
			},
			{
				status:false,
				alternative:"failed to load..",
				image: "https://s-media-cache-ak0.pinimg.com/originals/32/7d/ed/327dedd99a950f6d6edabaa7b51a4e08.jpg"
			}
		]
		this.state={items:theList};
	}
	renderListItem(option,key){
		return (
			<div key={key} className={"item"+(option.status?" active":"")}>
				<img style={{height:'auto',width:'auto',maxWidth:'1080px',maxHeight:'800px'}} src={option.image} alt={option.alternative}/>
				<div className="carousel-caption">
					...
				</div>
			</div>
		);
	}
	renderListBox(options) {
		let self=this;
		let key=0;
		return (
			<div className="carousel-inner" role="listbox">
				{
					options.map(function(option,key){
						return self.renderListItem(option,key);
					})
				}
				<div className="item ">
					<img src="http://www.genesisoilandgas.com/assets/images/pictures/services/pic_water_management.jpg" alt="..."/>
					<div className="carousel-caption">
						...
					</div>
				</div>
				...
			</div>
		);
	}
	handleClickPrevious(){
		let itemsToChange=this.state.items;
		let item;
		let self=this;


		for(let i = 0;i<itemsToChange.length;i++){
			item = itemsToChange[i];
			if(i==0 && item.status==true){
				item.status=false;
				itemsToChange[i]=item;
				item=itemsToChange[itemsToChange.length-1];
				item.status=true;
				itemsToChange[itemsToChange.length-1]=item;
				break;
			}else if(item.status==true){
				item.status=false;
				itemsToChange[i]=item;
				item=itemsToChange[i-1];
				item.status=true;
				itemsToChange[i-1]=item;
			}
		}

		this.setState({items:itemsToChange});
	}
	handleClickNext(){
		let itemsToChange=this.state.items;
		let item;
		let self=this;

		for(let i = 0;i<itemsToChange.length;i++){
			item = itemsToChange[i];
			if(i==itemsToChange.length-1 && item.status==true){
				item.status=false;
				itemsToChange[i]=item;
				item=itemsToChange[0];
				item.status=true;
				itemsToChange[0]=item;
			}else if(item.status==true){
				item.status=false;
				itemsToChange[i]=item;
				item=itemsToChange[i+1];
				item.status=true;
				itemsToChange[i+1]=item;
				break;
			}
		}

		this.setState({items:itemsToChange});
	}
	render(){
		let self=this;
		let options=this.state.items;
		return (
      <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
          <li data-target="#carousel-example-generic" data-slide-to="1"></li>
          <li data-target="#carousel-example-generic" data-slide-to="2"></li>
        </ol>

        {self.renderListBox(options)}

        <a className="left carousel-control" href="#carousel-example-generic" role="button" onClick={self.handleClickPrevious.bind(self)}>
          <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#carousel-example-generic" role="button" onClick={self.handleClickNext.bind(self)}>
          <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
		);
	}
}
