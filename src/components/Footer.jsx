import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='footer-main pt-7 flex justify-between '>
      <h1 className=' footer-txt text-l px-5'>@2024 Priyanshu raj <span className='font-semibold'>ALl right reserved</span></h1>
      <div className='footer-link space-x-4 font-semibold px-4'>
        <a className='hover:underline' href="">About</a>
        <a className='hover:underline' href="">Privacy policy</a>
        <a className='hover:underline' href="">Lisencing</a>
        <a className='hover:underline' href="">Contact</a>
      </div>
    </div>
    </>
  )
}

export default Footer
