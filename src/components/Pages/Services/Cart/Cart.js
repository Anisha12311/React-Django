import React, {createContext,useReducer, useEffect} from 'react'
import './Cart.css'
import { products } from './Products';
import ContextCart from './ContextCart';
import {reducer} from './Reducer'
export const CartContext  = createContext();


const initialState = {
    item: products,
    totalAmount : 0,
    totalItem : 0,
}

 const Cart = () => {
  const [state,dispatch] = useReducer(reducer,initialState)
    // const [item, setItem] = useState(products);



    //Delete the items of the cart
    const removeItem = (id) => {
      return dispatch ({
        type : "REMOVE_ITEM",
        payload : id,
      })
    }


    //Clear the cart 

    const clearCart = () => {
      return dispatch({type  : "CLEAR_CART"});
    }

    //increment cart

    const increment = (id) => {
      return dispatch({
        type : "INCREMENT",
        payload : id,
      })
    }

      //decrement cart

      const decrement = (id) => {
        return dispatch({
          type : "DECREMENT",
          payload : id,
        })
      }

      useEffect(() => {
        dispatch({ type: "GET_TOTAL" });
      
      }, [state.item]);

    return (
        <CartContext.Provider value = {{...state,removeItem, clearCart,increment,decrement}}>
          <ContextCart/>
        </CartContext.Provider>
    )
}
export default Cart