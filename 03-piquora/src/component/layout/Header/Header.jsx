import React from 'react'
import HeaderLogo from './HeaderLogo'
import HeaderRightSection from './HeaderRightSection'
import Logo from '../../../assets/logo/piquora.png'

const Header = () => {
  return (
    <div className='w-full flex justify-between items-center max-h-15.5  py-2 pr-4 pl-3'>
      <HeaderLogo Img={Logo}/>
      <HeaderRightSection/>
    </div>
  )
}

export default Header
