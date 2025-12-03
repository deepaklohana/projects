import React from 'react'
import Section6Hero from './Section6Hero'
import CardGridSection from './CardGridSection'

const Section6 = () => {
  return (
    <div className='flex flex-col items-center  p-6 lg:py-27.5  lg:px-[150px] gap-10'>
      <Section6Hero/>
      <CardGridSection/>
    </div>
  )
}

export default Section6
