// import pizza1 from '../images/pizzasimgs/Margherita.jpg';
// import pizza2 from '../images/pizzasimgs/Corn_&_Cheese.jpg';
// import pizza3 from '../images/pizzasimgs/Peppy_Paneer.jpg';
// import pizza4 from '../images/pizzasimgs/Farmhouse.jpg';
// import pizza5 from '../images/pizzasimgs/Pepper_Barbeque_&_Onion.jpg';
// import pizza6 from '../images/pizzasimgs/chickendominator.png';
// import pizza7 from '../images/pizzasimgs/chicksausage.png';
// import pizza8 from '../images/pizzasimgs/chickenpepperoni.png';
// export const PIZZAS=[
//     {
//         id: 1,
//         name: "Margherita",
//         price: 300.0,
//         pizzaimg: pizza1
//     },
//     {
//         id: 2,
//         name: "Corn And Cheese",
//         price: 350.0,
//         pizzaimg: pizza2
//     },
//     {
//         id: 3,
//         name: "Peppy Paneer",
//         price: 400.0,
//         pizzaimg: pizza3
//     },
//     {
//         id: 4,
//         name: "Farmhouse",
//         price: 450.0,
//         pizzaimg: pizza4
//     },
//     {
//         id: 5,
//         name: "Pepper Barbecque Chicken",
//         price: 340.0,
//         pizzaimg: pizza5
//     },
//     {
//         id: 6,
//         name: "Chicken Dominator",
//         price: 600.0,
//         pizzaimg: pizza6
//     },
//     {
//         id: 7,
//         name: "Chicken Sausage",
//         price: 400.0,
//         pizzaimg: pizza7
//     },
//     {
//         id: 8,
//         name: "Chicken Pepperoni",
//         price: 700.0,
//         pizzaimg: pizza8
//     }
    

// ]



// export default pizzalist


import { useEffect, useState } from 'react';
import axios from 'axios';
import Product from './menu/product';

function Pizzalist() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8800/pizzas')
      .then(response => {
        setPizzas(response.data);
      })
      .catch(error => {
        console.error('Error fetching pizzas:', error);
      });
  }, []);

  return (
    <div className='pizzamenu'>
      <div className='menutitle'>
        <h1>AJ's PIZZAS</h1>
      </div>
      <div>{pizzas.map((pizza) => (<Product key={pizza.id} data={pizza} />))}</div>
    </div>
  );
}


export default Pizzalist;