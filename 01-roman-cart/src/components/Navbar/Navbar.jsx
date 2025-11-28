import React from 'react'
import NavbarLogo from './NavbarLogo'
import NavbarMenu from './NavbarMenu'
import NavbarBtns from './NavbarBtns'
import NavbarBtn1 from './NavbarBtn1'
import NavbarBtn2 from './NavbarBtn2'

const Navbar = () => {
  return (
    <>
    <div className='hidden md:flex flex-wrap w-full items-center justify-around px-25 py-5 '>
      <div className=''>
        <NavbarLogo/>
      </div>
      <div className='flex text-sm font-medium text-[rgba(19,19,19,0.50)] w-1/3 '>
        <NavbarMenu/>
      </div>
      <div className='flex gap-4'>
        <NavbarBtn1/>
        <NavbarBtn2/>
      </div>
    </div>
    <div className='md:hidden flex  justify-between p-6 '>
      <div className='flex items-center'>
        <NavbarLogo/>
      </div>
      <div className='flex gap-2 '>
        <NavbarBtn1/>
        <NavbarMenu/>
      </div>
    </div>
    </>
    
  )
}

export default Navbar
