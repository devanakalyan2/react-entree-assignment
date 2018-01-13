import React from 'react';
import loading from '../../../images/filters-load.gif';
import { string } from 'prop-types';

class ImageLoader extends React.Component {

	static propTypes = {
	    image: string
	}

	constructor(props){
		super();

		this.state = {
			imageLoading : true
		}
	}

	 _revealImage(event){
	  	this.setState({imageLoading : !this.state.imageLoading});
	  }

	render() {

		let imageToBeShown =  this.state.imageLoading ? <img className="img-responsive" src={loading} alt="loading..."/> : '';

		return (
			<div>
				{imageToBeShown}
	            <img className="img-thumbnail" onLoad={this._revealImage.bind(this)} src={this.props.image} alt='food'/>
	        </div>
		);
	}
}

export default ImageLoader;