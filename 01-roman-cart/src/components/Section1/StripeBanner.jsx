import React from 'react'
import StripeLogo from '../../assets/stripe.png'

const StripeBanner = () => {
  return (
    <div className='gap-1 px-3 py-0.5 rounded-[40px] flex justify-between content-center bg-white w-[213px] h-10'>
      <img src={StripeLogo} alt="" />
      <h4 className='content-center italic text-[#ee950a] font-medium' >Verified Partners</h4>
    </div>
  )
}

export default StripeBanner
