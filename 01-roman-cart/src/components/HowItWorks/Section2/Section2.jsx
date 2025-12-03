import React from 'react'
import Section2Hero from './Section2Hero'
import Section2Cards from './Section2Cards'

const Section2 = () => {
  return (
    <div className='flex flex-col items-center  p-6 lg:py-35 gap-10'>
      <Section2Hero/>
      <Section2Cards/>
    </div>
  )
}

export default Section2
