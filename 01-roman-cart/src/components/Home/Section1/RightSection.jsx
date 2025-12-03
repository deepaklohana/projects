import React from 'react'
import BgImg from '../../../assets/Frame 305.png'
import NotificationIcon from './NotificationIcon'
import ShirtBox from './ShirtBox'
import ImageBarBox from './ImageBarBox'

const RightSection = () => {
  return (
    <div className='relative max-w-[495px] h-[367px] flex items-center justify-center'>
      <img src={BgImg} alt="" />
      <NotificationIcon/>
      <ShirtBox/>
      <div className='absolute lg:right-0 lg:bottom-0 lg:scale-100 scale-75 -right-6  bottom-0'>
        <ImageBarBox/>
      </div>
      

    </div>
  )
}

export default RightSection
