import React from 'react'

const Card = ({card}) => {
  return (
    <div className='bg-white flex flex-col max-w-[362px]  gap-7 rounded-xl shadow-[0_0_16px_rgba(16,16,16,0.08)] items-start '>
        <div>
            <img src={card.img} alt="" />
        </div>
        
        <div className='flex flex-col gap-5 px-5 pb-5 '>
            <div className='flex flex-col gap-3'>
                <h3 className='text-2xl font-medium'>{card.title}</h3>
                <p className='text-[#13131380] text-base '>{card.detail}</p>
            </div>
            <button className='max-w-full md:w-auto inline-flex items-center justify-center gap-2 bg-[#0C3382] text-white rounded-xl px-4 py-3 md:px-6 md:py-4 text-sm md:text-base'>
        View Demo
        <span className='bg-[#ee950a] w-5 h-5 md:w-6 md:h-6 p-0.5 rounded-full flex items-center justify-center'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 md:w-4 md:h-4 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </span>
      </button>
        </div>
    </div>
  )
}

export default Card
