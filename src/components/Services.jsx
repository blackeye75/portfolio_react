import React from 'react'

const services = () => {
  return (
   <>
   <div className="services mt-3 py-4">
    <h1 className='text-3xl text-center underline font-semibold'>My Services</h1>
    <div className="services-container flex mt-10 gap-8 px-6">
      <div className= 'cursor-pointer hover:bg-zinc-300 bg-slate-200 p-5 text-center shadow-2xl rounded-xl space-y-5'>
      <i class="ri-global-line text-3xl  text-white bg-black p-2 rounded-full"></i>
        <h1 className='text-2xl'>Web Development</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime fugiat voluptatibus animi aperiam culpa aliquid magni cumque aliquam distinctio eius!</p>
        <button className='px-4 py-1 bg-orange-600 text-xl font-semibold rounded-full'>Check</button>
      </div>
      <div className='cursor-pointer hover:bg-zinc-300 bg-slate-200 p-5 text-center shadow-2xl rounded-xl space-y-5'>
      <i class="ri-android-line text-3xl text-white bg-black p-2 rounded-full"></i>
        <h1 className='text-2xl'>Android Development</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime fugiat voluptatibus animi aperiam culpa aliquid magni cumque aliquam distinctio eius!</p>
        <button className='px-4 py-1 bg-orange-600 text-xl font-semibold rounded-full'>Check</button></div>
      <div className='cursor-pointer hover:bg-zinc-300 bg-slate-200 p-5 text-center shadow-2xl rounded-xl space-y-5'>
      <i class="ri-server-line text-3xl text-white bg-black p-2 rounded-full"></i>
        <h1 className='text-2xl'>Fullstack Development</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime fugiat voluptatibus animi aperiam culpa aliquid magni cumque aliquam distinctio eius!</p>
        <button className='px-4 py-1 bg-orange-600 text-xl font-semibold rounded-full'>Check</button></div>
    </div>
   </div>
   </>
  )
}

export default services
