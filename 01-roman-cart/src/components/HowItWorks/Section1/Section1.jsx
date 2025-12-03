import React from 'react'
import BgDesign from './../assets/BgDesign.png'
import LeftSection from './LeftSection'
import RightSection from './RightSection'
import BgImg from '../../../assets/banner1 1.png'
const Section1 = () => {
  return (
    <div   style={{ backgroundImage: `url(${BgDesign}),url(${BgImg})`
    , backgroundPosition: 'center center, right center',
    backgroundSize: 'cover, auto 100%',
    backgroundRepeat: 'no-repeat,no-repeat' }} 
    className='flex lg:flex-row flex-col-reverse lg:justify-center gap-30 bg-[#1313131A] lg:py-[130px] rounded-b-2xl lg:rounded-b-none'  >
      <LeftSection/>
      <RightSection/>

    </div>
  )
}

export default Section1
