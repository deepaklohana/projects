import React from 'react'
import Section3HeroHeading from './Section3HeroHeading'
import Section3HeroParagraph from './Section3HeroParagraph'

const Section3HeroSection = () => {
  return (
    <div className='flex flex-col items-center gap-8 max-w-[674px] max-h-[167px] text-center'>
      <Section3HeroHeading/>
      <Section3HeroParagraph/>
    </div>
  )
}

export default Section3HeroSection
