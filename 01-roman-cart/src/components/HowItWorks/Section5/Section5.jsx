import React from 'react'
import Section5Hero from './Section5Hero'
import CardSection from './CardSection'

const Section5 = () => {
  return (
    <div className='flex flex-col items-center  p-6 lg:py-20 bg-[#1313131a] lg:px-[150px] gap-10'>
      <Section5Hero/>
      <CardSection/>
    </div>
  )
}

export default Section5
