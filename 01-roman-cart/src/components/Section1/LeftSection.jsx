import React from 'react'
import StripeBanner from './StripeBanner'
import HeroSection from './HeroSection'

const LeftSection = () => {
  return (
    <div className=' w-[627px] h-[352px] flex flex-col gap-6'>
     <StripeBanner/>
     <HeroSection/>
    </div>
  )
}

export default LeftSection
