import React from 'react'
import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'

const Section2Cards = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-5'>
      <Card1/>
      <Card2/>
      <Card3/>
    </div>
  )
}

export default Section2Cards
