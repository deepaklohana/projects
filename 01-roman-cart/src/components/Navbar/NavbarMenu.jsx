import { Menu, X } from 'lucide-react'
import React, { useState } from 'react'
import NavbarBtn2 from './NavbarBtn2'

const NavbarMenu = () => {
  const[isOpen, setIsOpen]= useState(false)

  const toggleNavBar = ()=>{
    setIsOpen(!isOpen)
  }
  return (
    <>
    
      <div className='md:flex w-full justify-between hidden '>
        <a className=' hover:text-[#EE950A]' href="#">Home</a>
        <a className=' hover:text-[#EE950A]' href="#">How it works?</a>
        <a className=' hover:text-[#EE950A]' href="#">Product Demo</a>
        <a className=' hover:text-[#EE950A]' href="#">Pricing Plans</a>
        <a className=' hover:text-[#EE950A]' href="#">Resources</a>
      </div>
      <div className='md:hidden flex items-center'>
        <button onClick={toggleNavBar}>
          {isOpen ? <X/> : <Menu/>}
        </button>
      </div>
    
    {isOpen && (
      <div className='flex flex-col basis-full items-center text-sm font-medium text-[rgba(19,19,19,0.50)] gap-2 fixed top-20 left-5 w-[calc(100%-40px)]   z-10 py-5 bg-white'>
        <a className=' hover:text-[#EE950A]' href="#">Home</a>
        <a className=' hover:text-[#EE950A]' href="#">How it works?</a>
        <a className=' hover:text-[#EE950A]' href="#">Product Demo</a>
        <a className=' hover:text-[#EE950A]' href="#">Pricing Plans</a>
        <a className=' hover:text-[#EE950A]' href="#">Resources</a>
        <NavbarBtn2/>
      </div>
    )}
    </>
    
  )
}

export default NavbarMenu
