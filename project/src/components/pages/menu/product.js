// import React from "react";
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import './product.css';
// import { CartState } from "../../../context/Context";
// function Product(props)
// {   
    
//     const {id,name,price,pizzaimg}=props.data;
//     const {
//         state:{cart},
//         dispatch,
//     }=CartState();
//     return (
//         <Card style={{ width: '18rem',display: 'inline-flex'}} className="card">
//       <Card.Img variant="top" src={pizzaimg} />
//       <Card.Body>
//         <Card.Title>{name}</Card.Title>
//         <Card.Text>
//         A hugely popular margherita, with a deliciously tangy single cheese topping.
//         Price: {price}
//         </Card.Text>
//         {
//             cart.some(p=>p.id===id)?(
//                 <Button variant="danger" onClick={() => {
//                     dispatch({
//                         type: "REMOVE_FROM_CART",
//                         payload: props.data
//                     })
//                 }}>Remove from cart</Button>
//             ):(
//                 <Button variant="primary" className="addtocartbtn" onClick={() => {
//                     dispatch({
//                         type: "ADD_TO_CART",
//                         payload: props.data
//                     })
//                 }}>Add To Cart</Button>
//             )
//         }
//       </Card.Body>
//     </Card>
//     );
// }
// export default Product;


// import React from "react";
// import { Button, Card } from 'react-bootstrap';

// function Product({ data }) {
//   const { id, name, price, pizzaimg } = data;

//   const handleAddToCart = () => {
//     fetch('http://localhost:8800/cart', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         pizza_id: id,
//         qty: 1,
//       }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("Added to cart:", data);
//       })
//       .catch((err) => console.error("Error adding pizza to cart:", err));
//   };

//   return (
//     <Card style={{ width: '18rem', display: 'inline-flex' }} className="card">
//       <Card.Img variant="top" src={`http://localhost:8800/images/${pizzaimg}`} />
//       <Card.Body>
//         <Card.Title>{name}</Card.Title>
//         <Card.Text>Price: ₹ {price}</Card.Text>
//         <Button variant="primary" onClick={handleAddToCart}>
//           Add To Cart
//         </Button>
//       </Card.Body>
//     </Card>
//   );
// }

// export default Product;

import React from "react";
import { Button, Card } from 'react-bootstrap';
import { CartState } from '../../../context/Context';

function Product({ data }) {
  const { id, name, price, pizzaimg } = data;
  const { dispatch } = CartState();

  const handleAddToCart = () => {
    
    fetch('http://localhost:8800/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        pizza_id: id,
        qty: 1,
      }),
    })
      .then((response) => response.json())
      .then((backendData) => {
        console.log("Added to backend cart:", backendData);

        // Step 2: Dispatch to update front-end state
        dispatch({
          type: "ADD_TO_CART",
          payload: { id, name, price, pizzaimg },
        });
      })
      .catch((err) => console.error("Error adding pizza to backend cart:", err));
  };

  return (
    <Card style={{ width: '18rem', display: 'inline-flex' }} className="card">
      <Card.Img variant="top" src={`http://localhost:8800/images/${pizzaimg}`} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Price: ₹ {price}</Card.Text>
        <Button variant="primary" onClick={handleAddToCart}>
          Add To Cart
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Product;



