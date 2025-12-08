import React from 'react'

const VerifiedTag = ({item}) => {
  return (
    <div className='bg-[#E5E5E5]  py-1 px-2 gap-1 flex items-center rounded-full text-[#1C1C1C]'>
      <span className='text-[14px] leading-normal tracking-[-0.01em]'>{item.icon}</span>
      <h5 className='text-[14px] leading-normal tracking-[-0.01em]'>{item.title}</h5>
    </div>
  )
}

export default VerifiedTag
