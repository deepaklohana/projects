import React from 'react'
import Section2HeroHeading from './Section2HeroHeading'
import Section2HeroParagraph from './Section2HeroParagraph'

const Section2Hero = () => {
  return (
    <div className='text-center flex flex-col items-center gap-5 max-w-full'>
      <Section2HeroHeading/>
      <Section2HeroParagraph/>
    </div>
  )
}

export default Section2Hero
