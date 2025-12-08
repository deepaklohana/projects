import React from 'react'
import ImageSlider from './ImageSlider'
import BioDataScrollBox from './BioDataScrollBox'
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md'

const Slider = () => {
  return (
    <div className='bg-[#FFFFFF] p-3 flex flex-col lg:flex-row gap-3 shadow-[0px_4px_34px_0px_#0000000D] rounded-2xl relative'>
      <ImageSlider/>
      <div className='lg:w-3/5 lg:block hidden'><BioDataScrollBox/></div>
      <div className='w-full px-2 flex lg:hidden border-2 text-white mt-3'>
        <div className='bg-[#11816A] py-1 w-1/2 text-center rounded-l-xl'>
          <h5 className='text-sm font-light leading-normal tracking-[0.2px]'>71% Spark</h5>
        </div>
        <div className='bg-[#52C2AB] py-1 w-1/2 text-center rounded-r-xl'>
          <h5 className='text-sm font-light leading-normal tracking-[0.2px]'>49% Echo</h5>
        </div>
      </div>
      {/* Previous Btn */}
      <button className='bg-[#52C2AB] hidden lg:flex border-4 border-[#F4F6FA]
      absolute p-3 top-3/5 rounded-full -left-5'>
        <MdNavigateBefore size={20}/>
      </button>
      <button className='bg-[#52C2AB] hidden lg:flex border-4 border-[#F4F6FA]
      absolute p-3 top-3/5 rounded-full -right-5 '>
        <MdNavigateNext size={20}/>
      </button>
    </div>
  )
}

export default Slider
