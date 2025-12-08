import React from 'react'
import { IoGiftOutline } from 'react-icons/io5'

const GiftCounterBox = ({item,className}) => {
  return (
    
      <div className={` rounded-xl py-3 px-4 flex justify-between items-center border-2 border-[#FFFFFF4D] shadow-[0px_0px_8px_0px_#52C2ABE5] lg:w-1/2 ${className}`}>
        <div className='flex flex-col gap-2'>
          <h5 className='font-normal text-[14px] leading-normal tracking-[-0.01em]'>{item.title}</h5>
          <h2 className='font-bold text-[40px] leading-none tracking-[-0.01em]'>{item.gift}</h2>
        </div>
        <IoGiftOutline size={50}/>
      </div>
  )
}

export default GiftCounterBox
