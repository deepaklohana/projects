import React from 'react'
import HeroBtn from './HeroBtn'
import HeroHeading from './HeroHeading'
import HeroParagraph from './HeroParagraph'

const LeftSection = () => {
  return (
    <div className='lg:flex flex-col max-w-[500px] gap-6 hidden'>
      <HeroHeading/>
      <HeroParagraph/>
      <HeroBtn/>
    </div>
  )
}

export default LeftSection
