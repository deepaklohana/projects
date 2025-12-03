import React from 'react'
import { Info } from 'lucide-react'

const Card = ({ card }) => {
  return (
    <div className='bg-white flex flex-col px-5 py-8 max-w-[367px] max-h-full gap-5 rounded-xl shadow-[0_0_16px_rgba(16,16,16,0.08)] items-center justify-between '>
      <div className='flex flex-col items-center text-center gap-8 px-2 '>
        <div className='flex flex-col gap-3 items-center'>
          <h4 className='text-[#131313] text-2xl max-w-[235px]'>{card.title}</h4>
          <p className='text-[#13131380] lg:text-sm'>{card.detail}</p>
        </div>
      </div>
       <button className='w-full md:w-auto inline-flex items-center justify-center gap-2 bg-[#0C3382] text-white rounded-xl px-4 py-3 md:px-6 md:py-4 text-sm md:text-base'>
        {card.btnTitle}
        <span className='bg-[#ee950a] w-5 h-5 md:w-6 md:h-6 p-0.5 rounded-full flex items-center justify-center'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 md:w-4 md:h-4 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </span>
      </button>
    </div>
  )
}

export default Card
