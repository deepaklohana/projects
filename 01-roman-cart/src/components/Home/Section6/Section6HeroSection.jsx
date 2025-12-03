import React from 'react'
import Section6Heading from './Section6Heading'
import Section6HeroText from './Section6HeroText'

const Section6HeroSection = () => {
  return (
    <div className='flex flex-col items-center gap-8 w-full max-w-[674px] text-center px-4'>
      <Section6Heading />
      <Section6HeroText/>
    </div>
  )
}

export default Section6HeroSection
