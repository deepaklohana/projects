import React from 'react'
import Section3HeroSection from './Section3HeroSection'
import Section3Cards from './Section3Cards'

const Section3 = () => {
  return (
    <div>
      <div className='flex items-center justify-center gap-4 h-[50vh] w-full'>
        <Section3HeroSection/>
      </div>
      <Section3Cards/>
    </div>

  )
}

export default Section3
