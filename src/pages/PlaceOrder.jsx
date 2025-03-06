import React from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { useState } from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {

  const [method,setMethod]=useState('cod')
const {navigate}=useContext(ShopContext);
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-8 pt-5 sm:pt-14 min-h-[80vh] border-t'>
        {/* Left Side */}
        <div className='flex flex-col gap-4 w-full sm:max-w-[500px]'>
             <div className='text-xl sm:text-2xl my-3'>
              <Title text1={'DELIVERY'} text2={'INFORMATION'}/>
             </div>

             <div className='flex gap-3'>
              <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='First name' type="text" />
              <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Last name' type="text" />
             </div>

             <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Email address' type="email" />
             <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Street' type="text" />

             <div className='flex gap-3'>
              <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='City' type="text" />
              <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='State' type="text" />
             </div>

             <div className='flex gap-3'>
              <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Zipcode' type="number" />
              <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Country' type="text" />
             </div>

             <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Phone' type="number" />
        </div>

        {/* Right Side */}
        <div className='w-full sm:w-[50%] mt-8'>
          <div className='mt-8 min-w-80'>
            <CartTotal/>
          </div>

          <div className='mt-12'>
            <Title text1={'PAYMENT'} text2={'METHOD'}/>
            {/* Payment Method */}
            <div className='flex gap-3 flex-col lg:flex-row'>
              <div onClick={ ()=>setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                <p className={`w-3.5 h-3.5 border rounded- ${method=== 'stripe' ? 'bg-green-400' :''}`}></p>
                <img src={assets.stripe} alt="Stripe" className="h-5 mx-4" />
              </div>

              <div  onClick={ ()=>setMethod('visa')}className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                <p className={`w-3.5 h-3.5 border rounded- ${method=== 'visa' ? 'bg-green-400' :''}`}></p>
                <img src={assets.visa} alt="Visa" className="h-5 mx-4" />
              </div>

              <div  onClick={ ()=>setMethod('cod')}className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                <p className={`w-3.5 h-3.5 border rounded- ${method=== 'cod' ? 'bg-green-400' :''}`}></p>
                <p className='text-gray-500 text-sm font-medium mx-4 '>CASHON DELIVERY</p>
              </div>
            </div>

            <div className='w-full text-en mt-8 '>
              <button onClick={()=>navigate('/order')} className=' bg-black text-white px-16 py-3 text-sm'>PLACE ORDER</button>

            </div>
          </div>
        </div>
    </div>
  )
}

export default PlaceOrder
