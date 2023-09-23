import React from 'react'
import Card from './home/Card'
import { useSelector } from 'react-redux'
import CartCard from './cart/CartCard';
import { totalPrice } from '../utills/helpers';

const Cart = () => {
    const {cart}= useSelector(store=>store.reducer);
    const total= totalPrice(cart);
  return (
    <div>
        <div className='w-[85%] m-auto py-8 flex items-center justify-between'>
            <h1 className='text-4xl'>Your cart</h1>
            <span className='text-blue-900 hover:underline cursor-pointer'>Continue shopping</span>
        </div>
       
        <div className='w-[85%] m-auto'>
           {
            cart && cart.length>0?<>
             <div className='flex xs:invisible sm:visible items-center justify-between text-gray-700 py-3'>
                <span>Products</span>
                <span>Quantity</span>
                <span>Total</span>
            </div>
            <div className='flex flex-col gap-2'>
                {
                    cart.map((el)=>{
                        return <CartCard key={el.id} {...el} />
                    })
                }
            </div>
            <div className=' py-5 flex sm:flex-row  xs:flex-col-reverse items-center justify-between'>
                <div className='text-md text-gray-700'>
                    <p>Order special instructions</p>
                    <textarea className='border-2 my-2 rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl 
                    border-gray-500' cols="40" rows="5"></textarea>
                </div>
                <div className='flex flex-col gap-4 text-right'>
                    <h1 className='text-md  '>Estimated total ₹ {total.toFixed(2)}</h1>
                    <p className='text-xs'>Tax included and shipping and discounts calculated at <br/> checkout</p>
                    <button className=' bg-[#08255F] py-2 cursor-pointer hover:bg-[#0b2e72]  text-white'>Check out</button>
                </div>
            </div>
            </>:<div className='py-10 flex items-center justify-center'>
            <h1 className='text-5xl text-gray-300'>No Items Selected !</h1>
            </div>
           }
        </div>
    </div>
  )
}

export default Cart