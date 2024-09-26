import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-[#232536]'>
      <div className='container mx-24 mx-auto'>
<div className='flex justify-between py-[30px] text-white'>
          {/* 1 web site name */}
          <div>
         <h1 className='text-[40px]'>{`{Finsweet`}</h1>
         </div>
         {/* 2 navbar */}
         <div className='flex gap-[40px] items-center'>
            <NavLink className={"relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#e6ab2d] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"} to={'/'}>Home</NavLink>
            <NavLink className={"relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#e6ab2d] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"} to={'page2'}>Blog</NavLink>
            <NavLink className={"relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#e6ab2d] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"} to={'page3'}>About Us</NavLink>
            <NavLink className={"relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#e6ab2d] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"} to={'page4'}>Contact us</NavLink>
            <button className='bg-[white] text-black p-[10px] hover:bg-[#e6ab2d] hover:text-white transition-all'>
            Subscribe
            </button>
         </div>
</div>
      </div>
    </div>
  )
}

export default Navbar
