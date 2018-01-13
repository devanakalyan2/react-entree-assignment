import React, { Component } from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';

import ProductsGrid from './app-components/products-grid/products-grid';
import ProductDetails from './app-components/product-details/product-details';

class App extends Component {

  render() {
    
    return (
      <div className="App">
     
        <div className="container-fluid">
          
          <Switch>
            <Route exact path='/' component={ProductsGrid}/>
            <Route path='/:dish' component={ProductDetails}/>
          </Switch>
          

        </div>
      </div>
    );
  }
}

export default App;

