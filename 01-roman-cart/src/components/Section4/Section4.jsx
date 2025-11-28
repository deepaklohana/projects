import React from 'react'
import Section4Left from './Section4Left'
import Section4Right from './Section4Right'

const Section4 = () => {
  return (
        <div className='bg-[#DDDDDD2E] flex  items-center justify-center  lg:px-[150px] lg:py-20 w-full '>
            <div className='flex flex-col lg:flex-row  gap-10 text-center lg:text-start p-6'>
                <Section4Left/>
                <Section4Right/>
            </div>
        </div>
  )
}

export default Section4
