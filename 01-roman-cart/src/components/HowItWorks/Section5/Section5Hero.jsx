import React from 'react'
import Section5HeroHeading from './Section5HeroHeading'
import Section5HeroParagraph from './Section5HeroParagraph'

const Section5Hero = () => {
  return (
    <div className='text-center flex flex-col items-center gap-5 max-w-full'>
      <Section5HeroHeading/>
      <Section5HeroParagraph/>
    </div>
  )
}

export default Section5Hero
