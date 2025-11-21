import React from 'react'
import Section2CardBottomLeft from './Section2CardBottomLeft'
import Section2CardBottomRight from './Section2CardBottomRight'

const Section2CardBottom = () => {
  return (
    <div className='flex justify-between '>
      <Section2CardBottomLeft/>
      <Section2CardBottomRight/>
    </div>
  )
}

export default Section2CardBottom
