import React from 'react'
import Section4Hero from './Section4Hero'
import CardGridSection from './CardGridSection'

const Section4 = () => {
  return (
    <div className='flex flex-col items-center  p-6 lg:py-17 lg:px-[150px] gap-10'>
      <Section4Hero/>
      <CardGridSection/>
    </div>
  )
}

export default Section4
