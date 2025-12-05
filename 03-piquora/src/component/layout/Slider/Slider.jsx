import React from 'react'
import ImageSlider from './ImageSlider'
import BioDataScrollBox from './BioDataScrollBox'

const Slider = () => {
  return (
    <div className='bg-[#FFFFFF] p-3 flex gap-3 shadow-[0px_4px_34px_0px_#0000000D] rounded-2xl'>
      <ImageSlider/>
      <BioDataScrollBox/>
    </div>
  )
}

export default Slider
