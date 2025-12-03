import React from 'react'
import Section4HeroHeading from './Section4HeroHeading'
import Section4HeroParagraph from './Section4HeroParagraph'


const Section4Hero = () => {
  return (
    <div className='text-center flex flex-col items-center gap-5 max-w-full'>
      <Section4HeroHeading/>
      <Section4HeroParagraph/>
    </div>
  )
}

export default Section4Hero
