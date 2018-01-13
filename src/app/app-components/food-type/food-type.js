import React from 'react';
import { bool } from 'prop-types';

class FoodType extends React.Component {

		static propTypes = {
			nonVeg : bool
		}

	render() {
		return (
				<div>
					<div className={'veg food-type '+(this.props.nonVeg ? 'non-veg' : '')}>
		                	
		            </div>
		            <span>{this.props.nonVeg ? 'Non Veg' : 'Veg'}</span>
				</div>
			);
	}
}

export default FoodType;