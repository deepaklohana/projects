import React from 'react'
import ImageSlider from './ImageSlider'
import BioDataScrollBox from './BioDataScrollBox'
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md'

const Slider = () => {
  return (
    <div className='bg-[#FFFFFF] p-3 flex  gap-3 shadow-[0px_4px_34px_0px_#0000000D] rounded-2xl relative'>
      <ImageSlider/>
      <div className='w-3/5 '><BioDataScrollBox/></div>
      {/* Previous Btn */}
      <button className='bg-[#52C2AB] border-4 border-[#F4F6FA]
      absolute p-3 top-3/5 rounded-full -left-5'>
        <MdNavigateBefore size={20}/>
      </button>
      <button className='bg-[#52C2AB]  border-4 border-[#F4F6FA]
      absolute p-3 top-3/5 rounded-full -right-5 '>
        <MdNavigateNext size={20}/>
      </button>
    </div>
  )
}

export default Slider
