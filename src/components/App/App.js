import React from 'react';
import Counter from '../Counter';
import Random from '../Random';
import Basket from '../Basket';
import Product from '../Product';
import classes from './App.module.css';

const App = () => (
  <div className={classes.container}>
    <Product
      id='item_beans'
      name="Beans"
      url="https://mysupermarket.s3-eu-west-1.amazonaws.com/beans.png"
      promotion="Get 3 for 2!"
      unitPrice={0.50}
      priceByItem
    />
    <Product
      id='item_coke'
      name="Coke"
      url="https://mysupermarket.s3-eu-west-1.amazonaws.com/coke.jpg"
      promotion="Get 2 for 1!"
      unitPrice={0.70}
      priceByItem
    />
    <Product
      id='item_orange'
      name="Oranges"
      url="https://mysupermarket.s3-eu-west-1.amazonaws.com/oranges.jpg"
      unitPrice={1.99}
      priceByWeight
      weight={0}
    />
    <Basket />
  </div>
);

export default App;
