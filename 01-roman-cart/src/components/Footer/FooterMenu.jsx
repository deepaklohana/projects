import React from 'react'

const FooterMenu = () => {
  return (
    <nav>
      <ul className='flex flex-col items-center lg:flex-row justify-center md:justify-start gap-3 md:gap-6 text-sm md:text-[16px] text-white'>
        <li><a href="#" className='hover:underline'>Home</a></li>
        <li><a href="#" className='hover:underline'>How it works?</a></li>
        <li><a href="#" className='hover:underline'>Product Demo</a></li>
        <li><a href="#" className='hover:underline'>Pricing Plans</a></li>
        <li><a href="#" className='hover:underline'>Resources</a></li>
      </ul>
    </nav>
  )
}

export default FooterMenu
