import React, { useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { addToCart, decreaseQuantity, increaseQuantity } from '../../redux/actions';
import { AlertMsg } from '../AlertMsg';
const Card = ({id,image,name,price,quantity}) => {
    const dispatch= useDispatch();
    const [status,setStatus]= useState({msg:null,color:null})
    const {cart}= useSelector(store=>store.reducer);

    const handleCart=(id)=>{
        const data= {id,name,image,price}
        if(cart.length<8){
            dispatch(addToCart(data));
            setStatus({msg:"Item added to the cart !",color:"bg-green-500"})
            setTimeout(()=>{
             setStatus({msg:null,color:null})
            },1500)
        }else{
           setStatus({msg:"Cann't add more than 8 items !",color:"bg-red-500"})
           setTimeout(()=>{
            setStatus({msg:null,color:null})
           },1500)
        }
    }

    const handleIncrese=(id)=>{
        dispatch(increaseQuantity(id))
    }
    const handleDecrese=(id)=>{
        dispatch(decreaseQuantity(id))
    }
  return (
    <div className='cursor-pointer mb-1'>
        <div className='w-full overflow-hidden rounded-2xl'>
        <img src={image} className=' hover:scale-105 transition-all duration-700 aspect-square object-cover' alt="" />
        </div>
        <div className=' text-md py-3 font-light flex flex-col items-center justify-center '>
            <p className=' hover:border-b-[1px] hover:border-black my-1' >{String(name).split(" ").splice(0,5).join(" ")}</p>
        <p>₹ {price}</p>
        </div>
       
        {!quantity&&<button onClick={()=>handleCart(id)} className='w-full bg-[#08255F] text-white rounded-full py-3 font-bold'>Add to cart</button>}

       {quantity&& <div className='flex items-center justify-center gap-3'>
            <button onClick={()=>handleDecrese(id)} className='flex items-center justify-center w-8 h-8 bg-[#08255F] text-white rounded-full py-3 font-bold' >-</button>
            <span>{quantity}</span>
            <button  onClick={()=>handleIncrese(id)} className=' flex items-center justify-center w-8 h-8 bg-[#08255F] text-white rounded-full py-3 font-bold'>+</button>
        </div>}
        {status.msg&&<AlertMsg msg={status.msg} color={status.color} />}

    </div>
  )
}

export default Card