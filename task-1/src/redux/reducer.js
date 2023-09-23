import { ADD_TO_CART, DECREASE_QUANTITY, INCREASE_QUANTITY, REMOVE_FROM_CART } from "./actionTypes";

const init={
    cart:[],

}

export const reducer=(state=init,{type,payload})=>{


    switch(type){

        case ADD_TO_CART:
            return {...state,cart:[...state.cart,{...payload,quantity:1}]}
        case REMOVE_FROM_CART:
            return {...state,cart:[...state.cart.filter((el)=>el.id!==payload)]}
        case INCREASE_QUANTITY:
            return {...state,cart:state.cart.map((el)=>{
                if(el.id==payload){
                    el.quantity=el.quantity+1
                }
                return el;
            })}
            case DECREASE_QUANTITY:
                return {...state,cart:state.cart.filter((el)=>{
                    if(el.id==payload){
                        if(el.quantity==1){
                            return null;
                        }else{
                            el.quantity=el.quantity-1
                        }
                    }
                    return el;
                })}
        default:
            return state;
    }
}