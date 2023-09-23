import React, { useEffect, useState } from 'react'
import { data } from '../../utills/data'
import Card from './Card'
import { shallowEqual, useSelector } from 'react-redux'
import { filterData } from '../../utills/helpers'

const Products = () => {
    const {cart}= useSelector(store=>store.reducer,shallowEqual);
    const [products,setProducts]= useState(data);
    useEffect(()=>{
        setProducts(filterData(data,cart));
    },[cart])
  return (
    <div>
        <div className='flex items-center justify-center py-6'>
            <h1 className='text-xl tracking-wide font-bold text-gray-900'>Chocolate's Packs</h1>
        </div>
        <div  className='py-4 flex items-center justify-end mr-24 gap-5 font-thin'> 
            <div className=' flex   items-center '>
            <span>Sort by:</span>
            <select className='border-none outline-none pl-3 pr-5'>
                <option value="">Featured</option>
                <option value="">Best Selling</option>
            </select>
            </div>
            <span>
                3 products
            </span>
        </div>
        <div className='w-[85%] m-auto'>
            <div className='grid grid-cols-4 gap-4'>
                {
                    products.map((el)=>{
                        return <Card key={el.id} {...el} />
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Products