import React from 'react'
import HeaderLogo from './HeaderLogo'
import Logo from '../../../assets/logo/piquora_white.png'
import HeaderMenu from './HeaderMenu'
import CountryBtn from '../../common/CountryBtn'
import ProfileIcon from '../../../assets/icon/ProfileIcon.png'
import CustomIcon from '../../common/CustomIcon'
import { IoChatbubbleEllipsesOutline, IoSettingsOutline } from 'react-icons/io5'
import { CiBellOn, CiMenuBurger } from 'react-icons/ci'
import Sidebar from '../Sidebar/Sidebar'


const Header2 = () => {
  
  return (
    <div>
      <div className='bg-[#52C2AB] text-white hidden lg:flex items-center justify-between  pl-5 pt-2 pb-2 pr-2 shadow-[0px_4px_34px_0px_#0000000D] rounded-2xl'>
        <HeaderLogo Img={Logo}/>
        <div className='flex items-center gap-7'>
          <CountryBtn className='bg-[#00000033] rounded-4xl px-1.5 py-1 lg:p-2'/>
          <HeaderMenu className=' flex gap-4'/>
          <div className='flex items-center gap-3'>
            <img src={ProfileIcon} alt="" />
            
            <CustomIcon  icon={<IoSettingsOutline size={20} />}/>
          </div>
        </div>
      </div>
      <div className='bg-[#52C2AB] text-white flex lg:hidden items-center gap-2.5 lg:gap-0 lg:justify-between  pl-5 pt-2 pb-2 pr-2 shadow-[0px_4px_34px_0px_#0000000D] rounded-2xl'>
        <button className='w-8 h-8 rounded-full bg-[#0000001A] inline-flex justify-center items-center'><CiMenuBurger size={20} /> </button>
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
            <img src={ProfileIcon} alt="" />
            
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Header2
