import React from 'react'
import StripeBanner from './StripeBanner'
import HeroSection from './HeroSection'

const LeftSection = () => {
  return (
    <div className=' max-w-[627px] lg:items-start  items-center flex flex-col gap-6'>
     <StripeBanner/>
     <HeroSection/>
    </div>
  )
}

export default LeftSection
