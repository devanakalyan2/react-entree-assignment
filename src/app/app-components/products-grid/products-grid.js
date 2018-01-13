import React from 'react';
import ProductCard from '../product-card/product-card';
import foodDataService from  '../../app-services/dataService';

class ProductsGrid extends React.Component{

	  constructor(){
    super();

    this.state = {
      dishes : []
    }
  }

  buildProductCards(){
    return this.state.dishes.map((x) => <ProductCard properties={x}/>);
  } 

  _getData(event){
    var scope = this;
    fetch('http://texpertise.in/data.php').then(function(response){
      if(response.ok){
        response.json().then(function(data){
        scope.setState({dishes : scope.state.dishes.concat(data)});   
        foodDataService.foodData = data;
        })
      }
    });

  }

   componentWillMount(){
     this._getData();
   }
	render(){
		return (
				<div className="row">
		            {this.buildProductCards()}
		         </div>
			);
	}
}

export default ProductsGrid;