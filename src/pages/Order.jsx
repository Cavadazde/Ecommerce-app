import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'

const Order = () => {
  const { products, currency } = useContext(ShopContext)

  return (
    <div className='border-t pt-16'>
      <div className='text-2xl'>
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>
      <div>
        {products.slice(1, 4).map((item, index) => (
          <div key={index} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row items-center'>
            
            <div className='flex items-start gap-6 text-sm w-1/3 min-w-0'>
              <img src={item.image[0]} alt="" className='w-16 sm:w-20' />
              <div className='overflow-hidden'>
                <p className='sm:text-base font-medium truncate'>{item.name}</p>
                <div className='flex items-center gap-3 mt-2 text-base text-gray-700'>
                  <p>{currency}{item.price}</p>
                  <p>Quantity: 1</p>
                  <p>Size: M</p>
                </div>
                <p>Date: <span className='text-gray-400'>24, Jul,2024</span></p>
              </div>
            </div>

            <div className='w-1/3 flex justify-center items-center gap-2'>
              <p className='w-2 h-2 rounded-full bg-green-500'></p>
              <p className='text-sm md:text-base whitespace-nowrap'>Ready to ship</p>
            </div>

            <div className='w-1/3 flex justify-end'>
              <button className='border px-4 py-2 text-sm font-medium rounded-sm'>
                Track Order
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default Order
