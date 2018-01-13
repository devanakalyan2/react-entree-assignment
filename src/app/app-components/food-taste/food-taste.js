import React from 'react';
import spicy from '../../../images/chilli.png';
import { bool } from 'prop-types';

class FoodTaste extends React.Component {

	static propTypes = {
		spicy : bool
	}


	render() {
		if(!this.props.spicy){
			return '';
		}
		return (
				<div>
					<img src={spicy} width="15" height="15" alt="spicy food"/>
	                <span className="margin-left2px">Spicy</span>
				</div>
			);
	}
}

export default FoodTaste;