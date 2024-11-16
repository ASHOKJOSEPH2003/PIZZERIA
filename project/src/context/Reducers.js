import React from "react";
// export const cartReducer = (state, action) => {
//     switch (action.type) {
//       case "ADD_TO_CART":
//         return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
//       case "REMOVE_FROM_CART":
//         return {
//           ...state,
//           cart: state.cart.filter((c) => c.id !== action.payload.id),
//         };
//         case "CHANGE_CART_QTY":
//             return {
//                 ...state,
//                 cart: state.cart.map((c) =>
//                     c.id === action.payload.id
//                         ? { ...c, qty: c.qty + parseInt(action.payload.qty) }
//                         : c
//                 ),
//             };
//       default:
//         return state;
//     }
//   };

export const cartReducer = (state, action) => {
  switch (action.type) {
      case "SET_PRODUCTS":
          return { ...state, products: action.payload };
      case "ADD_TO_CART":
          return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
      case "REMOVE_FROM_CART":
          return {
              ...state,
              cart: state.cart.filter((c) => c.id !== action.payload.id),
          };
      case "CHANGE_CART_QTY":
          return {
              ...state,
              cart: state.cart.map((c) =>
                  c.id === action.payload.id ? { ...c, qty: action.payload.qty } : c
              ),
          };
      default:
          return state;
  }
};
