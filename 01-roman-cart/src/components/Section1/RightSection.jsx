import React from 'react'
import BgImg from '../../assets/Frame 305.png'
import NotificationIcon from './NotificationIcon'
import ShirtBox from './ShirtBox'
import ImageBarBox from './ImageBarBox'

const RightSection = () => {
  return (
    <div className='relative w-[495px] h-[367px] flex items-center justify-center'>
      <img src={BgImg} alt="" />
      <NotificationIcon/>
      <ShirtBox/>
      <div className='absolute right-0 bottom-0'>
        <ImageBarBox/>
      </div>
      

    </div>
  )
}

export default RightSection
