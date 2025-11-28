import React from 'react'

const SubFooterBtn = () => {
  return (
    <div>
      <button className='w-full md:w-auto inline-flex items-center justify-center gap-2  bg-[#ee950a] text-white rounded-xl px-4 py-3 md:px-6 md:py-4 text-sm md:text-base'>
        Try for free
        <span className='bg-[#0C3382] w-5 h-5 md:w-6 md:h-6 p-0.5 rounded-full flex items-center justify-center'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 md:w-4 md:h-4 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </span>
      </button>
    </div>
  )
}

export default SubFooterBtn
