import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem';
import Title from './Title';

const LatestCollection = () => {

    const { products } =useContext(ShopContext);
    const[latestProducts,setLatestProducts]=useState([])

    useEffect(()=>{
setLatestProducts(products.slice(0,10));
    },[])
  return (
    <div className='my-10'>
<div className='text-center py-8 text-3xl'>
    <Title text1={'Latest'} text2={'COLLECTIONS'}/>
    <p className='w-3/4 m-auto text-4xl sm:text-sm md:text-base text-600'>
    The Subtle Beauty of Little Things, Elevating Your Wardrobe with Every Thoughtfully Designed Piece</p>
</div>
{/* Rendering Products */}
<div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
    {
        latestProducts.map((item,index)=>(
            <ProductItem key={index} id={item._id} image={item.image[0]} price={item.price} name={item.name}/>
        ))
    }
</div>
    </div>
  )
}

export default LatestCollection