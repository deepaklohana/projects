import React from 'react'
import NavbarLogo from './NavbarLogo'
import NavbarMenu from './NavbarMenu'
import NavbarBtns from './NavbarBtns'

const Navbar = () => {
  return (
    <div className='flex items-center justify-around px-25 py-5'>
      <NavbarLogo/>
      <NavbarMenu/>
      <NavbarBtns/>
    </div>
  )
}

export default Navbar
