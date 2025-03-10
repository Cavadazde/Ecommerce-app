import React, { useState, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { IoBagOutline } from "react-icons/io5";
import { TbMenuDeep } from "react-icons/tb";
import { IoChevronDownSharp } from "react-icons/io5";
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount, logout, user } = useContext(ShopContext);

  const closeSidebar = () => setVisible(false);

  return (
    <div className='flex items-center justify-between py-5 font-medium '>
      <Link to={'/'}><img src={assets.logo} className='w-36' alt="" /></Link>

      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <NavLink exact to='/' activeClassName='text-black' className='flex flex-col items-center gap-1'>
          <p>HOME</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink exact to='/collection' activeClassName='text-black' className='flex flex-col items-center gap-1'>
          <p>COLLECTION</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink exact to='/about' activeClassName='text-black' className='flex flex-col items-center gap-1'>
          <p>ABOUT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink exact to='/contact' activeClassName='text-black' className='flex flex-col items-center gap-1'>
          <p>CONTACT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
      </ul>

      <div className='flex items-center gap-6'>
        <CiSearch className='w-5 text-2xl cursor-pointer' onClick={() => setShowSearch(true)} />

        <div className='group relative'>
          <Link to='/login'>
            <IoPersonOutline />
          </Link>
          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
              <p className='cursor-pointer hover:text-black'>My profile</p>
              <Link to={'/order'}>
                <p className='cursor-pointer hover:text-black'>Orders</p>
              </Link>
              {user ? (
                <p onClick={logout} className='cursor-pointer hover:text-black'>
                  Logout
                </p>
              ) : (
                <Link to='/login'>
                  <p className='cursor-pointer hover:text-black'>Login</p>
                </Link>
              )}
            </div>
          </div>
        </div>

        <Link to='/cart' className='relative'>
          <IoBagOutline className='w-5 min-w-5' />
          <p className='absolute right-[-5px] bottom-[-5px] w-3 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
        </Link>
        <TbMenuDeep onClick={() => setVisible(true)} className='w-5 cursor-pointer sm:hidden' />
      </div>

      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
        <div className='flex flex-col text-gray-600'>
          <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
            <IoChevronDownSharp className='h-4 rotate-90' />
            <p>Back</p>
          </div>
          <NavLink exact to='/' onClick={closeSidebar} activeClassName='text-black' className='py-2 pl-6 border'>
            HOME
          </NavLink>
          <NavLink exact to='/collection' onClick={closeSidebar} activeClassName='text-black' className='py-2 pl-6 border'>
            COLLECTION
          </NavLink>
          <NavLink exact to='/about' onClick={closeSidebar} activeClassName='text-black' className='py-2 pl-6 border'>
            ABOUT
          </NavLink>
          <NavLink exact to='/contact' onClick={closeSidebar} activeClassName='text-black' className='py-2 pl-6 border'>
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
