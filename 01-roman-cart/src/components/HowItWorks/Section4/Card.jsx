import React from 'react'

const Card = ({card}) => {
  return (
    <div className='bg-white flex flex-col p-5 max-w-[367px]  gap-3 rounded-xl shadow-[0_0_16px_rgba(16,16,16,0.08)] items-start '>
        <div className='flex flex-col items-center justify-center text-center  px-2 w-18 h-18 bg-[#ee950a] rounded-full '>
            <h6 className='text-white text-2xl'>{card.num}</h6> 
        </div>
        <div className='flex flex-col gap-3'>
            <h3 className='text-2xl font-medium'>{card.title}</h3>
            <p className='text-[#13131380] text-base font-normal'>{card.detail}</p>
        </div>
    </div>
  )
}

export default Card
