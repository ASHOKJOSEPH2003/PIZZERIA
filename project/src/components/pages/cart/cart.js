// import React from 'react'
// import { useEffect, useState } from "react";
// import { CartState } from '../../../context/Context'
// import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
// import { AiFillDelete } from "react-icons/ai";
// import './cart.css';
// export const Cart = () => {

//     const {
//         state:{cart},
//         dispatch,
//     }=CartState();
//     const [total, setTotal] = useState();

//   useEffect(() => {
//     setTotal(
//       cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
//     );
//   }, [cart]);
 

//   const handleIncrementQty = (id) => {
//     dispatch({ type: 'CHANGE_CART_QTY', payload: { id, qty: '+1' } });
//   };

//   const handleDecrementQty = (id) => {
//     dispatch({ type: 'CHANGE_CART_QTY', payload: { id, qty: '-1' } });
//   };
//   return (
//     <div className="pizzamenu">
//         <div className='menutitle futura'>
//                 <h1>CART</h1> 
//             </div>
//       <div className="productContainer">
//         <ListGroup>
//           {cart.map((prod) => (
//             <ListGroup.Item key={prod.id}>
//               <Row>
//                 <Col md={2}>
//                   <Image src={prod.pizzaimg} alt={prod.name} fluid rounded />
//                 </Col>
//                 <Col md={2}>
//                   <span className='futura'>{prod.name}</span>
//                 </Col>
//                 <Col md={2} className='futura'>₹ {prod.price}</Col>
                
//                 <Col md={2}>
//                 <div className="quantity-selector">
//                   <Button variant="danger" onClick={() => handleDecrementQty(prod.id)} className='futura'>
//                     -
//                   </Button>
//                   <span>{prod.qty}</span>
//                   <Button  onClick={() => handleIncrementQty(prod.id)} className='futura'>
//                     +
//                   </Button>
//                 </div>
//                 </Col>
//                 <Col md={2}>
//                   <Button 
//                     type="button"
//                     variant="light"
//                     onClick={() =>
//                       dispatch({
//                         type: "REMOVE_FROM_CART",
//                         payload: prod,
//                       })
//                     }
//                   >
//                     <AiFillDelete fontSize="20px" />
//                   </Button>
//                 </Col>
//               </Row>
//             </ListGroup.Item>
//           ))}
//         </ListGroup>
//       </div>
//       <div className="filters summary">
//         <span className="title">Subtotal ({cart.length}) items</span>
//         <span style={{ fontWeight: 700, fontSize: 20 }}>Total: ₹ {total}</span>
//         <Button type="button" disabled={cart.length === 0}>
//           Proceed to Checkout
//         </Button>
//       </div>
//     </div>
//   )
// };


// import React, { useState, useEffect } from 'react';
// import { Button, ListGroup, Row, Col, Image } from 'react-bootstrap';
// import { AiFillDelete } from "react-icons/ai";

// export const Cart = () => {
//   const [cart, setCart] = useState([]);
//   const [total, setTotal] = useState(0);

//   // Fetch cart items when the component mounts
//   useEffect(() => {
//     fetchCartItems();
//   }, []);

//   const fetchCartItems = () => {
//     fetch('http://localhost:8800/cart')
//       .then((response) => response.json())
//       .then((data) => {
//         setCart(data);
//         calculateTotal(data);
//       })
//       .catch((err) => console.error("Error fetching cart:", err));
//   };

//   const calculateTotal = (cartData) => {
//     const totalAmount = cartData.reduce((acc, curr) => acc + curr.qty * curr.price, 0);
//     setTotal(totalAmount);
//   };

//   // Delete item from cart
//   const handleDelete = (id) => {
//     fetch(`http://localhost:8800/cart/${id}`, {
//       method: 'DELETE',
//     })
//       .then(() => {
//         fetchCartItems(); // Refresh cart after deletion
//       })
//       .catch((err) => console.error("Error deleting item:", err));
//   };

//   // Update quantity in cart
//   const handleQuantityChange = (id, newQty) => {
//     if (newQty < 1) return; // Prevent qty less than 1

//     fetch(`http://localhost:8800/cart/${id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ qty: newQty }),
//     })
//       .then(() => {
//         fetchCartItems(); // Refresh cart after update
//       })
//       .catch((err) => console.error("Error updating quantity:", err));
//   };

//   return (
//     <div className="cart">
//       <h1>Your Cart</h1>
//       <ListGroup>
//         {cart.map((item) => (
//           <ListGroup.Item key={item.id}>
//             <Row>
//               <Col md={2}>
//                 <Image src={`http://localhost:8800/images/${item.pizzaimg}`} alt={item.name} fluid rounded />
//               </Col>
//               <Col md={2}>
//                 <span>{item.name}</span>
//               </Col>
//               <Col md={2}>₹ {item.price}</Col>
//               <Col md={2}>
//                 <Button onClick={() => handleQuantityChange(item.id, item.qty - 1)}>-</Button>
//                 <span style={{ margin: '0 10px' }}>{item.qty}</span>
//                 <Button onClick={() => handleQuantityChange(item.id, item.qty + 1)}>+</Button>
//               </Col>
//               <Col md={2}>
//                 <Button variant="light" onClick={() => handleDelete(item.id)}>
//                   <AiFillDelete fontSize="20px" />
//                 </Button>
//               </Col>
//             </Row>
//           </ListGroup.Item>
//         ))}
//       </ListGroup>
//       <div className="summary">
//         <h3>Total: ₹ {total}</h3>
//         <Button disabled={cart.length === 0}>Proceed to Checkout</Button>
//       </div>
//     </div>
//   );
// };

// import React, { useEffect } from 'react';
// import { Button, ListGroup, Row, Col, Image } from 'react-bootstrap';
// import { AiFillDelete } from "react-icons/ai";
// import { CartState } from '../../../context/Context';

// export const Cart = () => {
//   const {
//     state: { cart },
//     dispatch,
//   } = CartState();

//   const total = cart.reduce((acc, curr) => acc + curr.qty * curr.price, 0);

//   const handleDelete = (id) => {
    
//     dispatch({ type: 'REMOVE_FROM_CART', payload: { id } });
    
//   };

//   const handleQuantityChange = (id, newQty) => {
//     dispatch({ type: 'CHANGE_CART_QTY', payload: { id, qty: newQty } });
//   };

//   return (
//     <div className="cart">
//       <h1>Your Cart</h1>
//       <ListGroup>
//         {cart.map((item) => (
//           <ListGroup.Item key={item.id}>
//             <Row>
//               <Col md={2}>
//                 <Image src={`http://localhost:8800/images/${item.pizzaimg}`} alt={item.name} fluid rounded />
//               </Col>
//               <Col md={2}>
//                 <span>{item.name}</span>
//               </Col>
//               <Col md={2}>₹ {item.price}</Col>
//               <Col md={2}>
//                 <Button onClick={() => handleQuantityChange(item.id, item.qty - 1)} disabled={item.qty <= 1}>-</Button>
//                 <span style={{ margin: '0 10px' }}>{item.qty}</span>
//                 <Button onClick={() => handleQuantityChange(item.id, item.qty + 1)}>+</Button>
//               </Col>
//               <Col md={2}>
//                 <Button variant="light" onClick={() => handleDelete(item.id)}>
//                   <AiFillDelete fontSize="20px" />
//                 </Button>
//               </Col>
//             </Row>
//           </ListGroup.Item>
//         ))}
//       </ListGroup>
//       <div className="summary">
//         <h3>Total: ₹ {total}</h3>
//         <Button disabled={cart.length === 0}>Proceed to Checkout</Button>
//       </div>
//     </div>
//   );
// };

import React, { useEffect } from 'react';
import { Button, ListGroup, Row, Col, Image } from 'react-bootstrap';
import { AiFillDelete } from "react-icons/ai";
import { CartState } from '../../../context/Context';

export const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const total = cart.reduce((acc, curr) => acc + curr.qty * curr.price, 0);

  // Delete item from cart (frontend and backend)
  const handleDelete = (id) => {
    fetch(`http://localhost:8800/cart/pizza/${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((backendData) => {
        console.log("Deleted from backend cart:", backendData);
        dispatch({ type: 'REMOVE_FROM_CART', payload: { id } });
      })
      .catch((err) => console.error("Error deleting pizza from backend cart:", err));
  };

  // Change quantity of item in cart (frontend and backend)
  const handleQuantityChange = (id, newQty) => {
    fetch(`http://localhost:8800/cart/pizza/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ qty: newQty }),
    })
      .then((response) => response.json())
      .then((backendData) => {
        console.log("Updated backend cart item quantity:", backendData);
        dispatch({ type: 'CHANGE_CART_QTY', payload: { id, qty: newQty } });
      })
      .catch((err) => console.error("Error updating cart item quantity:", err));
  };

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      <ListGroup>
        {cart.map((item) => (
          <ListGroup.Item key={item.id}>
            <Row>
              <Col md={2}>
                <Image src={`http://localhost:8800/images/${item.pizzaimg}`} alt={item.name} fluid rounded />
              </Col>
              <Col md={2}>
                <span>{item.name}</span>
              </Col>
              <Col md={2}>₹ {item.price}</Col>
              <Col md={2}>
                <Button onClick={() => handleQuantityChange(item.id, item.qty - 1)} disabled={item.qty <= 1}>-</Button>
                <span style={{ margin: '0 10px' }}>{item.qty}</span>
                <Button onClick={() => handleQuantityChange(item.id, item.qty + 1)}>+</Button>
              </Col>
              <Col md={2}>
                <Button variant="light" onClick={() => handleDelete(item.id)}>
                  <AiFillDelete fontSize="20px" />
                </Button>
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <div className="summary">
        <h3>Total: ₹ {total}</h3>
        <Button disabled={cart.length === 0}>Proceed to Checkout</Button>
      </div>
    </div>
  );
};

