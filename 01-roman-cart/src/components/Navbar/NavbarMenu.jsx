import { Menu, X } from 'lucide-react'
import React, { useState } from 'react'
import NavbarBtn2 from './NavbarBtn2'
import { Link } from 'react-router-dom'

const NavbarMenu = () => {
  const[isOpen, setIsOpen]= useState(false)

  const toggleNavBar = ()=>{
    setIsOpen(!isOpen)
  }
  return (
    <>
    
      <nav className='md:flex w-full justify-between hidden '>
        <Link className=' hover:text-[#EE950A] ' to='/' >Home</Link>
        <Link className=' hover:text-[#EE950A]' to='/howitworks' >How it works?</Link>
        <Link className=' hover:text-[#EE950A]' to='/productdemo' >Product Demo</Link>
        <Link className=' hover:text-[#EE950A]' to='/Pricing' >Pricing Plans</Link>
        <Link className=' hover:text-[#EE950A]' to='/resoucres' >Resources</Link>
        
      </nav>
      <div className='md:hidden flex items-center'>
        <button onClick={toggleNavBar}>
          {isOpen ? <X/> : <Menu/>}
        </button>
      </div>
    
    {isOpen && (
      <div className='flex flex-col basis-full items-center text-sm font-medium text-[rgba(19,19,19,0.50)] gap-2 fixed top-20 left-5 w-[calc(100%-40px)]   z-10 py-5 bg-white'>
        <Link className=' hover:text-[#EE950A]' to='/' >Home</Link>
        <Link className=' hover:text-[#EE950A]' to='/howitworks' >How it works?</Link>
        <Link className=' hover:text-[#EE950A]' to='/productdemo' >Product Demo</Link>
        <Link className=' hover:text-[#EE950A]' to='/Pricing' >Pricing Plans</Link>
        <Link className=' hover:text-[#EE950A]' to='/resoucres' >Resources</Link>
        <NavbarBtn2/>
      </div>
    )}
    </>
    
  )
}

export default NavbarMenu
