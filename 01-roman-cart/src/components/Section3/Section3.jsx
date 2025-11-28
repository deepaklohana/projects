import React from 'react'
import Section3HeroSection from './Section3HeroSection'
import Section3Cards from './Section3Cards'
// import CardImg1 from '../../assets/Section3Card1.png'
// import CardImg2 from '../../assets/Section3Card2.png'
// import CardImg3 from '../../assets/Section3Card3.png'

const Section3 = () => {
  return (
    <div>
      <div className='flex items-center justify-center gap-4 h-[50vh] w-full p-6'>
        <Section3HeroSection/>
      </div>
      <Section3Cards/>
    </div>

  )
}

export default Section3
