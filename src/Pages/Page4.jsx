import React from 'react'

const Page4 = () => {
  return (
    <div className='container mx-auto m-32'>
      <div className=' text-center '>
        <h2 className='text-[20px] font-normal py-[10px]'>CONTACT UC</h2>
        <h1 className='text-[48px] font-semibold py-[10px]'>Let’s Start a Conversation</h1>
        <p className='text-[#6D6E76] py-[10px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
      </div>

      <div className='bg-[#592EA9] w-[67%] flex justify-center gap-[50px] p-[30px] mx-auto mt-[70px]'>
        <div className='w-[40%]'>
         <h1 className='text-[#b3b2b2] py-[10px]'>Working hours</h1>
         <hr />
         <h1 className='text-[#ffffff] font-semibold py-[10px]'>Monday To Friday <br />9:00 AM to 8:00 PM </h1>
         <p className='text-[#b2acb6]'>Our Support Team is available 24/7</p>
        </div>
        <div className='w-[40%]'>
        <h1 className='text-[#b3b2b2] py-[10px]'>Contact Us</h1>
         <hr className='text-[#FFFFFF] ' />
         <h1 className='text-[#ffffff] font-semibold py-[10px]'>020 7993 2905</h1>
         <p className='text-[#b2acb6]'>hello@finsweet.com</p>
        </div>
      </div>


     {/* Input pages Contackt */}
      <div className='w-[67%] mx-auto mt-[50px] flex flex-col gap-[20px]'>
      <input className='border w-full placeholder-black p-[20px] outline-none' type="text" placeholder='Full Name' />
      <input className='border w-full placeholder-black p-[20px] outline-none' type="text" placeholder='Your Email' />
      <select className='border w-full p-[20px] outline-none'>
        <option className='' value="">Query Related  </option>
        <option className='' value="">Query Related  </option>
        <option className='' value="">Query Related  </option>
        <option className='' value="">Query Related  </option>
      </select>
      <textarea className=' outline-none placeholder-black border w-full p-[20px]' placeholder="Your Message" rows={3}></textarea>

      </div>
    </div>
  )
}

export default Page4
