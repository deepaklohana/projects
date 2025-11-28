import React from 'react'
import LeftSection from './LeftSection'
import RightSection from './RightSection'

const Section1 = () => {
  return (
    <div className='flex lg:flex-row flex-col-reverse justify-center items-center h-[75vh] gap-4 px-6'>
      <LeftSection/>
      <RightSection/>
    </div>
  )
}

export default Section1
