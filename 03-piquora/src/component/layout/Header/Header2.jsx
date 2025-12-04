import React from 'react'
import HeaderLogo from './HeaderLogo'
import Logo from '../../../assets/logo/piquora_white.png'
import HeaderMenu from './HeaderMenu'
import CountryBtn from '../../common/CountryBtn'
import ProfileIcon from '../../../assets/icon/ProfileIcon.png'
import CustomIcon from '../../common/CustomIcon'
import { IoSettingsOutline } from 'react-icons/io5'


const Header2 = () => {
  
  return (
    <div className='bg-[#52C2AB] text-white flex items-center justify-between  pl-5 pt-2 pb-2 pr-2 shadow-[0px_4px_34px_0px_#0000000D] rounded-2xl'>
      <HeaderLogo Img={Logo}/>
      <div className='flex items-center gap-7'>
        <CountryBtn className='bg-[#00000033] rounded-4xl p-2'/>
        <HeaderMenu className=' flex gap-4'/>
        <div className='flex items-center gap-3'>
          <img src={ProfileIcon} alt="" />
          <CustomIcon  icon={<IoSettingsOutline size={20} />}/>
        </div>
      </div>
    </div>
  )
}

export default Header2
