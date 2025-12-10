import React, { useState } from 'react'
import HeaderLogo from './HeaderLogo'
import Logo from '../../../assets/logo/piquora_white.png'
import HeaderMenu from './HeaderMenu'
import CountryBtn from '../../common/CountryBtn'
import ProfileIcon from '../../../assets/icon/ProfileIcon.png'
import CustomIcon from '../../common/CustomIcon'
import { IoChatbubbleEllipsesOutline, IoSettingsOutline } from 'react-icons/io5'
import { CiBellOn, CiMenuBurger } from 'react-icons/ci'
import Sidebar from '../Sidebar/Sidebar'
import { IoMdClose } from 'react-icons/io'


const Header2 = () => {
  const [isProfileOpen,setIsProfileOpen]=useState(false)
  const [isMenuOpen,setIsMenuOpen]=useState(false)
  const isProfileToggle =()=>{
    setIsProfileOpen(!isProfileOpen)
  }
  const isMenuToggle=()=>{
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <div>
      <div className='bg-[#52C2AB] text-white hidden lg:flex items-center justify-between  pl-5 pt-2 pb-2 pr-2 shadow-[0px_4px_34px_0px_#0000000D] rounded-2xl'>
        <HeaderLogo Img={Logo}/>
        <div className='flex items-center gap-7'>
          <CountryBtn className='bg-[#00000033] rounded-4xl px-1.5 py-1 lg:p-2'/>
          <HeaderMenu className='hidden md:flex md:gap-4'/>
          <div className='flex items-center gap-3'>
            <img src={ProfileIcon} alt="" />
            
            <CustomIcon  icon={<IoSettingsOutline size={20} />}/>
          </div>
        </div>
      </div>
      <div className='bg-[#52C2AB] text-white flex lg:hidden items-center gap-2.5 lg:gap-0 lg:justify-between  pl-5 pt-2 pb-2 pr-2 shadow-[0px_4px_34px_0px_#0000000D] rounded-2xl'>
        <button onClick={isMenuToggle}
        className='w-8 h-8 rounded-full bg-[#0000001A] inline-flex justify-center items-center'>
          {isMenuOpen?<IoMdClose size={20} /> : <CiMenuBurger size={20} /> }
        </button>
        {isMenuOpen &&(<div className='fixed z-10 left-0 top-18.5 '>
          <Sidebar/>
        </div>)}
        <HeaderLogo Img={Logo}/>
        <div className='flex items-center gap-2 lg:gap-7'>
          <CountryBtn className='bg-[#00000033] rounded-4xl p-2 '/>
          <HeaderMenu className='hidden lg:flex gap-4'/>
          <div className='flex items-center gap-2 lg:gap-3'>
            <CustomIcon className={'w-8 h-8  bg-[#FFFFFF24] flex items-center justify-center rounded-full'}  icon={<IoChatbubbleEllipsesOutline className='size-5' />}/>
            <div className='flex justify-center items-center w-8 h-8 bg-[#FFFFFF24] rounded-full relative'>
              <button><CiBellOn size={20} /></button>
              <div className='w-2 h-2 bg-[#F5F5F5] rounded-full absolute top-0 right-0'></div>
            </div>
            <button onClick={isProfileToggle}><img src={ProfileIcon} alt="" /></button>
            {isProfileOpen && (<HeaderMenu 
            className={'flex flex-col basis-full items-center text-sm font-medium text-[#52C2AB] hover:text-black gap-2 rounded-b-2xl fixed top-19 right-6 w-[calc(100%-280px)]   z-10 py-3 bg-white'}/>)}
            {/* <img onClick={isToggle} src={ProfileIcon} alt="" /> */}
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header2
