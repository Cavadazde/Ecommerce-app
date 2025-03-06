import React from 'react'
import { assets } from '../assets/assets'
import{Link} from 'react-router-dom'
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
          <img src={assets.logo} className='mb-5 w-32' alt="" />
          <p className='w-full md:w-2/3 text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae possimus aliquam tempore numquam perferendis omnis error, excepturi consectetur, nam placeat unde quaerat nihil! Dolorum voluptatem, molestiae eos laborum debitis tempora necessitatibus, mollitia impedit, ad voluptatum aliquam deserunt fuga earum nisi est repellendus veritatis laboriosam minima!
          </p>
        </div>
        <div className='mt-5'>
          <p className='text-xl font-medium mb-5 '>COMPANY </p>
          <ul className='flex flex-col gap-1 text-gray-600'>
           <Link to={'/'}> <li >Home</li></Link>
           <Link to={'/about'}> <li>About Us </li></Link>
           <Link to={'/order'}><li>Delivery </li></Link> 
           <Link to={'/login'}><li>Privacy policy</li></Link>  

          </ul>
        </div>

        <div className='mt-5'>
          <p className='text-xl font-medium mb-5 '>GET IN TOUCH</p>
          <ul className=' flex flex-col gap-1 text-gray-600'>
            <li>+1-212-456-7890</li>
             <li>contact@iseel.com</li>
           <div className='flex  items-center gap-4 text-xl mt-2 '>
           <Link to={'https://www.instagram.com/aiselcavadzade/'}><li><AiFillInstagram /></li></Link>
           <Link to={'https://www.facebook.com/profile.php?id=100092902744815'}><li><FaFacebook /> </li></Link>   
           <Link><li><FaTwitter /></li></Link> 
            </div>   
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright2024@iseel.com</p>
      </div>

    </div>
  )
}

export default Footer