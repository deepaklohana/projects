import React from 'react'
import Section3HeroHeading from './Section3HeroHeading'
import Section3HeroParagraph from './Section3HeroParagraph'

const Section3Hero = () => {
  return (
    <div className='text-center flex flex-col items-center gap-5 max-w-full'>
      <Section3HeroHeading/>
      <Section3HeroParagraph/>
    </div>
  )
}

export default Section3Hero
