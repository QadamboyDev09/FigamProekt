import React from 'react'
import stay from "../assets/Know more image.png"
import imagee from "../assets/Image.png"


const Page3 = () => {
  return (
    <div>
      
        <div className="container mx-auto mx-24">
          <div className="flex justify-between items-center p-[50px]">
            {/* 1 */}
            <div className="py-[70px] leading-[50px]">
              <h2 className="text-black  py-[10px] text-[20px]">
              ABOUT US
              </h2>
              <h1 className="font-semibold text-black py-[10px leading-[80px] text-[46px]">
              We are a team of <br /> content writers who <br /> share their learnings
              </h1>
            </div>
            {/* 2 */}
            <div className='w-[50%]'>
             <h1>Lorem ipsum dolor sit amet, consectetur br adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h1>
            </div>
          </div>

    <div className='flex flex-col gap-[200px]'>
    <div className='flex justify-between items-center'>
            <div className='w-[50%]'>
             <h1 className='text-[36px] font-bold py-[10px]'>Our team of creatives</h1>
             <h2 className='text-[24px] font-normal py-[10px]'>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor <br /> incididunt.</h2>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
            </div>
            <div>
              <img src={stay} alt="" />
            </div>
          </div>
          <div className='flex justify-between items-center'>
          <div>
              <img src={imagee} alt="" />
            </div>
            <div className='w-[50%]'>
             <h1 className='text-[36px] font-bold py-[10px]'>Why we started this Blog</h1>
             <h2 className='text-[24px] font-normal py-[10px]'>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor <br /> incididunt.</h2>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
            </div>
          
          </div>
    </div>
        </div>
      </div>

  )
}

export default Page3
