import React from 'react'
import { RiExchangeFundsFill } from "react-icons/ri";
import { PiSealCheckFill } from "react-icons/pi";
import { BiSupport } from "react-icons/bi";


const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
        <div>
        <RiExchangeFundsFill  className='w-7 text-3xl m-auto mb-5 text-center'/>
            <p className='font-semibold'>Easy Exchange Policy</p>
            <p className='text-gray-400'>We offer free exchange policy</p>
        </div>
        <div>
        <PiSealCheckFill  className='w-7 text-3xl m-auto mb-5 text-center'/>
            <p className='font-semibold'>7 Days Return Policy</p>
            <p className='text-gray-400'>We provide 7 days free return policy</p>
        </div>
        <div>
        <BiSupport className='w-7 text-3xl m-auto mb-5 text-center'/>
            <p className='font-semibold'>Best customer support</p>
            <p className='text-gray-400'>We provide 24/7 customer support </p>
        </div>
    </div>
  )
}

export default OurPolicy