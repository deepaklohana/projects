import React from 'react'
import SubFooterHeading from './SubFooterHeading'
import SubFooterBtn from './SubFooterBtn'
import SubFooterSubHeading from './SubFooterSubHeading'

const SubFooter = () => {
  return (
    <div className='flex flex-col items-center justify-center max-w-full py-10 p-8 relative top-37.5'>
        <div className='flex bg-[#0c3382] flex-col items-center justify-center lg:w-5xl rounded-xl py-[50px] gap-5 text-white text-center p-4'>
            <SubFooterHeading/>
            <SubFooterBtn/>
            <SubFooterSubHeading/>
        </div>
    </div>
  )
}

export default SubFooter
