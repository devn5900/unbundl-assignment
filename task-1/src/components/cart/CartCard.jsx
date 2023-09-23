import React, { useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import {RiDeleteBin5Line} from 'react-icons/ri'
import {  decreaseQuantity, increaseQuantity, removeFromCart } from '../../redux/actions';
const CartCard = ({id,image,name,price,quantity}) => {
    const {cart}= useSelector(store=>store.reducer);
    const dispatch= useDispatch();


    const handleIncrese=(id)=>{
        if(cart.length<8){
            dispatch(increaseQuantity(id))
        }
    }
    const handleDecrese=(id)=>{
        dispatch(decreaseQuantity(id))
    }
    const handleRemove=(id)=>{
        dispatch(removeFromCart(id))
    }
  return (
    <div className='cursor-pointer mb-1 xs:flex xs:items-center xs:justify-center xs:flex-col sm:grid xs:grid-cols-1 sm:grid-cols-3  '>
        <div className=' xs:block sm:flex md:flex-row xs:flex-col sm:flex-col gap-2'>

        <div className='xs:w-full sm:w-[5rem] w-[6rem]  overflow-hidden rounded-2xl'>
        <img src={image} className=' hover:scale-105 transition-all duration-700 aspect-square object-cover' alt="" />
        </div>
        <div className=' lg:text-lg md:text-md sm:text-sm xs:text-xs  font-light flex flex-col   '>
            <p className=' hover:border-b-[1px] hover:border-black my-1' >{String(name).split(" ").splice(0,4).join(" ")}</p>
        <p>₹ {price}</p>

        </div>
        </div>
       <div className='flex xs:py-2 sm:py-0 items-center xs:justify-normal sm:justify-center gap-3'>
            <button onClick={()=>handleDecrese(id)} className='flex items-center justify-center w-8 h-8 bg-[#08255F] text-white rounded-full py-3 font-bold' >-</button>
            <span>{quantity}</span>
            <button  onClick={()=>handleIncrese(id)} className=' flex items-center justify-center w-8 h-8 bg-[#08255F] text-white rounded-full py-3 font-bold'>+</button>
            <RiDeleteBin5Line onClick={()=>handleRemove(id)} className='text-xl ml-3 text-gray-500 hover:text-gray-700'/>
        </div>
        <div className='flex items-center xs:justify-normal sm:justify-end '>
        <p>₹ {(Number(price)*quantity).toFixed(2)}</p>

        </div>
    </div>
  )
}

export default CartCard