import React from 'react'
import Section4Left from './Section4Left'
import Section4Right from './Section4Right'

const Section4 = () => {
  return (
        <div className='bg-[#DDDDDD2E] flex items-center justify-center gap-4 h-[296px] w-full'>
            <div className='flex items-start'>
                <Section4Left/>
                <Section4Right/>
            </div>
        </div>
  )
}

export default Section4
