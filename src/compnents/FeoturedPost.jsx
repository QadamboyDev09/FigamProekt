import React from 'react'
import uy from "../assets/uy.png"

const FeoturedPost = () => {
  return (
    <div className='container mx-24 mx-auto'>
      <div className='flex justify-between gap-[50px]'>
        {/* 1 */}
       <div className='w-[50%]'>
        <h1 className='text-[40px] font-bold  my-[50px]'>Featured Post</h1>
        <div>
            {/* img */}
            <div className='p-[30px] border border-[#f5f5f5]'>
                <img className='w-[100%] py-[30px]' src={uy} alt="" />
                <span className='py-[20px]'>By <span className='text-[#041075] py-[20px]'>John Doe </span>  l   May 23, 2022</span>
                <h1 className='text-[30px] py-[20px] font-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</h1>
                <p className='py-[20px]'>Duis aute irure dolor in reprehenderit in e velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
        <button className='text-black py-[8px] bg-[#e6ab2d] px-[30px] hover:bg-white hover:border hover:border-[#e6ab2d] hover:text-[#e6ab2d] transition'>Read More</button>
               
            </div>
        </div>
        </div>
        {/* 2 */}
        <div>
            <div>
               <div className='flex justify-between w-[100%] items-center '>
                <div>
        <h1 className='text-[40px] font-bold  my-[50px]'>All Posts</h1>
                </div>
                <div>
                    <p className='text-[#592EA9]'>View All</p>
                </div>
               </div>
               <div className='m-[10px] p-[40px] w-[600px]'>
               <span>By <span className='text-[#041075]'>John Doe </span>  l   May 23, 2022</span>
               <h1 className='text-[30px] font-black'>8 Figma design systems that you can download for free today.</h1>
               </div>
               <div  className='m-[10px]  p-[40px] bg-[#FBF6EA] w-[600px]'>
               <span>By <span className='text-[#041075]'>John Doe </span>  l   May 23, 2022</span>
               <h1 className='text-[30px] font-black'>8 Figma design systems that you can download for free today.</h1>
               </div>
               <div className='m-[10px] p-[40px] w-[600px]'>
               <span>By <span className='text-[#041075]'>John Doe </span>  l   May 23, 2022</span>
               <h1 className='text-[30px] font-black'>8 Figma design systems that you can download for free today.</h1>
               </div>
               <div className='m-[10px] p-[40px] w-[600px]'>
               <span>By <span className='text-[#041075]'>John Doe </span>  l   May 23, 2022</span>
               <h1 className='text-[30px] font-black'>8 Figma design systems that you can download for free today.</h1>
               </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default FeoturedPost
