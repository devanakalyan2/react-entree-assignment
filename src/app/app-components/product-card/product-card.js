
import React  from 'react';
import ImageLoader from '../image-loader/image-loader.js';
import FoodType from '../food-type/food-type.js';
import FoodTaste from '../food-taste/food-taste.js';
import { Link } from 'react-router-dom';
import { object } from 'prop-types';





class ProductCard extends React.Component{
	
	  static propTypes = {
	    properties: object.isRequired
	  }

	constructor(props){
	    super();
	    this.state = {
			name : props.properties.name,
			imageLoading : true
		};
	}

	render(){

		return(
				<div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 medium-device-column large-device-column ">	              
					<div className="product">
			              <div className="img-container">
							<ImageLoader image={this.props.properties.image} />
			              </div>

			              <h4 className="h4 text-left food-name">{this.props.properties.name}</h4>
			              
			              <div className="product-spec-container clearfix">		                   
			                <div className="pull-left display-inline vertical-middle-align">
				               <FoodType nonVeg={this.props.properties.nonVeg} />
			                </div>
			                <div className="pull-left margin-left4px display-inline vertical-middle-align">
			                	<FoodTaste spicy={this.props.properties.spicy} />
			                </div>

			                <Link to={{pathname:"/"+this.props.properties.name.replace(/ /g,'_')}}>
			                	<button className="btn btn-sm btn-warning pull-right product-details-btn">view details</button>
			               	</Link>
			             </div>
		            </div>  
	            </div>
			);
	}
}

export default ProductCard;