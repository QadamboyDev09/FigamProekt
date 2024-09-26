import React from 'react'


const Banner = () => {
  return (
    <div id='bgimgs' className='' >
      <div className='container mx-24 mx-auto '>
      <div className='py-[100px] leading-[50px]'>
        <h2 className='text-white font-black py-[30px] text-[26px]'>Posted on startup</h2>
        <h1 className='font-black text-white py-[20px] w-[900px] leading-[70px] text-[56px]'>Step-by-step guide to choosing great font pairs</h1>
        <span className='text-white text-[16px]'>By <span className='text-[#e6ab2d]'>James West</span>  |  May 23, 2022 </span>
        <p className='text-white w-[600px] text-[16px] leading-6 py-[20px]'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
        <button className='text-black py-[8px] bg-[#e6ab2d] mt-[20px] px-[30px] hover:bg-white hover:border hover:border-[#e6ab2d] hover:text-[#e6ab2d] transition'>Read More</button>
      </div>
      </div>
    </div>
  )
}

export default Banner
