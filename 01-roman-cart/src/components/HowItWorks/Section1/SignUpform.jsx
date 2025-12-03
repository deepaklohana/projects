import React from 'react'

const SignUpform = () => {
  return (

    <div className='max-w-[460px] max-h-full flex-col px-5 py-8 bg-white gap-6 rounded-xl border border-[#1313131A] '>
    <h2 className='text-[25px] mb-6  lg:text-[28px] leading-tight md:leading-snug text-center text-[#131313]'><span className='font-bold text-[#ee960a]'>Sign Up</span> For Free</h2>
      <form action="" className='space-y-3'>
       <input className='bg-[#D9D9D944] p-4 rounded-xl w-full' type="text" placeholder='Name' />
       <input className='bg-[#D9D9D944] p-4 rounded-xl w-full ' type="emai" placeholder='Email' />
       <button className='w-full  inline-flex items-center justify-center gap-2 bg-[#0C3382] text-white rounded-xl px-3 py-3 md:px-6 md:py-4 text-sm md:text-base '>
        Start Selling
        <span className='bg-[#ee950a] w-5 h-5 md:w-6 md:h-6 p-0.5 rounded-full flex items-center justify-center '>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 md:w-4 md:h-4 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </span>
      </button>
      </form>
    </div>
  )
}

export default SignUpform
