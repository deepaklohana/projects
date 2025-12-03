import React from 'react'
import BgDesign from './../assets/BgDesign.png'
import Section3Hero from './Section3Hero'
import CardGridSection from './CardGridSection'
const Section3 = () => {
 
  return (
    <div style={{backgroundImage:`url(${BgDesign})`}} className='bg-[#1313131a] flex flex-col items-center  p-6 lg:py-20 gap-10'>
      <Section3Hero/>
      <CardGridSection/>
    </div>
  )
}

export default Section3
