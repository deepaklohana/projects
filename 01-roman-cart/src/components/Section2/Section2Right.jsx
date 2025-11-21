import React from 'react'
import Navbar from '../Navbar/Navbar'
import Section2Heading from './Section2Heading'
import Section2Paragraph from './Section2Paragraph'
import Section2btn from './Section2btn'

const Section2Right = () => {
  return (
    <div className='flex flex-col gap-10 w-[558px]'>
      <Section2Heading/>
      <Section2Paragraph/>
      <Section2btn/>
    </div>
  )
}

export default Section2Right
