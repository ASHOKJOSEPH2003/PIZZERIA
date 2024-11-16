import React, { useState, useEffect } from 'react';
import './product.css';

import { CartState } from '../../../context/Context';
import axios from 'axios';
import Product from './product';

function Pizzas() {
  const {
    state: { products },
  } = CartState(); // Assuming 'products' is available in the context

  // Fetch pizzas if they are not already in context
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    if (products.length === 0) {
      // Fetch pizzas from the backend if products is empty
      axios.get('http://localhost:8800/pizzas')
        .then(response => {
          setPizzas(response.data);
        })
        .catch(error => {
          console.error('Error fetching pizzas:', error);
        });
    } else {
      setPizzas(products);
    }
  }, [products]);

  console.log(pizzas); // Logging the pizzas to see if it's being fetched

  return (
    <div className="pizzamenu">
      <div className="menutitle">
        <h1>AJ's PIZZAS</h1>
      </div>
      
      <div>
        {pizzas.map((pizza) => (
          <Product key={pizza.id} data={pizza} /> // Pass pizza data to Product component
        ))}
      </div>
    </div>
  );
}

export default Pizzas;

