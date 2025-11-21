import React from 'react'
import HeroHeading from './HeroHeading'
import HeroParagraph from './HeroParagraph'
import HeroBtn from './HeroBtn'

const HeroSection = () => {
  return (
    <div className=' flex flex-col gap-6'>
      <HeroHeading/>
      <HeroParagraph/>
      <HeroBtn/>
    </div>
  )
}

export default HeroSection
