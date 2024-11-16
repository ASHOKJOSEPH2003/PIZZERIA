// import React, { createContext, useContext, useReducer, useEffect } from 'react';
// import Pizzalist, { PIZZAS } from '../components/pages/pizzalist';
// import { cartReducer } from './Reducers';

// const Cart = createContext();

// const Context = ({ children }) => {
//     const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart')) || [];

//     const [state, dispatch] = useReducer(cartReducer, {
//         products: Pizzalist,
//         cart: cartFromLocalStorage,
//     });

//     useEffect(() => {
//         localStorage.setItem('cart', JSON.stringify(state.cart));
//     }, [state.cart]);

//     return (
//         <Cart.Provider value={{ state, dispatch }}>
//             {children}
//         </Cart.Provider>
//     );
// };

// export const CartState = () => {
//     return useContext(Cart);
// };

// export default Context;

import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { cartReducer } from './Reducers';

const Cart = createContext();

const Context = ({ children }) => {
    const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart')) || [];

    const [state, dispatch] = useReducer(cartReducer, {
        products: [],   // Initialize with an empty array, products should come from API
        cart: cartFromLocalStorage,
    });

    useEffect(() => {
        // Fetch products from backend and update context state
        fetch('http://localhost:8800/pizzas')
            .then((response) => response.json())
            .then((data) => {
                dispatch({ type: 'SET_PRODUCTS', payload: data });
            })
            .catch((error) => console.error('Error fetching pizzas:', error));
    }, []);

    useEffect(() => {
        // Save cart to localStorage whenever it changes
        localStorage.setItem('cart', JSON.stringify(state.cart));
    }, [state.cart]);

    return (
        <Cart.Provider value={{ state, dispatch }}>
            {children}
        </Cart.Provider>
    );
};

export const CartState = () => useContext(Cart);

export default Context;
