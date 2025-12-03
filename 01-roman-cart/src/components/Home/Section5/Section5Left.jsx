import React from 'react'
import Section5Heading from './Section5Heading'
import Section5Paragraph from './Section5Paragraph'
import Section5List from './Section5List'
import Section5Btn from './Section5Btn'

const Section5Left = () => {
  return (
    <div className=" flex flex-col px-2 py-8 gap-8 sm:px-4 text-center lg:">
        <Section5Heading/>
        <Section5Paragraph/>
        <Section5List/>
        <Section5Btn/>
    </div>
  )
}

export default Section5Left
