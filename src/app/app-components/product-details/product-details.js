import React from 'react';
import ImageLoader from '../image-loader/image-loader.js';
import FoodType from '../food-type/food-type';
import FoodTaste from '../food-taste/food-taste.js';
import foodDataService from  '../../app-services/dataService';

import { Redirect } from 'react-router-dom'
import { object } from 'prop-types';

class ProductDetails extends React.Component {

	static propTypes = {
	    properties: object.isRequired
	 }

	constructor(props){
		super();
	}

	getFoodItem(name){
		let foodData = foodDataService.foodData;
		if(foodData){
                for(var i=0;i<foodData.length;i++){
                    if(foodData[i].name.replace(/ /g,'_') === name){
                        return foodData[i];
                    }
                }
            }
            return false;
	}

	componentWillMount(){
		this.props = this.getFoodItem(this.props && this.props.match && this.props.match.params && this.props.match.params.dish)
	}
	render() {

		if(!this.props || !this.props.name){
			return (<Redirect to='/'/>);
		}


		return (
				<div className="row product">
					<div className="col-sm-12 col-md-4">
						<ImageLoader image={this.props.image} />
					</div>
					<div className="col-sm-12 col-md-8 product-spec-container">
						<h2 className="text-left h2">{this.props.name} </h2>
						<p className="product-description" dangerouslySetInnerHTML={{__html:this.props.description}}>
							
						</p>
						<div className="pull-left">
							<FoodType nonVeg={this.props.nonVeg}/>
						</div>
						<div className="pull-left margin-left4px">
							<FoodTaste spicy={this.props.spicy} />
						</div>
					</div>
				</div>
			);
	}
}

export default ProductDetails;