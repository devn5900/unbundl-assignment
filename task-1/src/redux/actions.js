import { ADD_TO_CART, DECREASE_QUANTITY, INCREASE_QUANTITY, REMOVE_FROM_CART } from "./actionTypes"


export const addToCart=(data)=>(dispatch)=>{
    dispatch({type:ADD_TO_CART,payload:data})
}

export const increaseQuantity=(id)=>(dispatch)=>{
    dispatch({type:INCREASE_QUANTITY,payload:id})
}

export const decreaseQuantity=(id)=>(dispatch)=>{
    dispatch({type:DECREASE_QUANTITY,payload:id})
}

export const removeFromCart=(id)=>(dispatch)=>{
    dispatch({type:REMOVE_FROM_CART,payload:id})
}