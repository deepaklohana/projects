import React from 'react'
import Section7HeroHeading from './Section7HeroHeading'
import Section7HeroText from './Section7HeroText'

const Section7HeroSection = () => {
  return (
    <div className='flex flex-col items-center gap-6 w-full max-w-3xl text-center px-4 md:gap-8'>
      <Section7HeroHeading/>
      <Section7HeroText/>
    </div>
  )
}

export default Section7HeroSection
