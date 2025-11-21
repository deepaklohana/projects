import React from 'react'

const HeroBtn = () => {
  return (
    <div className=''>
      <button className=' flex  gap-2 bg-[#0C3382] text-white rounded-xl px-6 py-4'>View Demo <span className=' bg-[#ee950a] w-5 h-5 p-0.5 rounded-full'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>

</span> </button>
    </div>
  )
}

export default HeroBtn
