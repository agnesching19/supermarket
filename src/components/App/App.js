import React from 'react';
import Counter from '../Counter';
import Random from '../Random';
import Basket from '../Basket';
import Product from '../Product';
import classes from './App.module.css';

const App = () => (
  <div className={classes.container}>
    <Product
      name="Beans"
      url="https://mysupermarket.s3-eu-west-1.amazonaws.com/beans.png"
      unitPrice={0.50}
      priceByItem
      discount={{ text: 'Get 3 for 2!', calc: () => {}}}
    />
    <Product
      name="Coke"
      url="https://mysupermarket.s3-eu-west-1.amazonaws.com/coke.jpg"
      unitPrice={0.70}
      priceByItem
    />
    <Product
      name="Oranges"
      url="https://mysupermarket.s3-eu-west-1.amazonaws.com/oranges.jpg"
      unitPrice={1.99}
      priceByWeight
    />
    <Basket />
  </div>
);

export default App;