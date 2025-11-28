import React from 'react'
import FooterTopSection from './FooterTopSection'
import FooterBottomSection from './FooterBottomSection'

const Footer = () => {
  return (
    <div className='bg-[#131313] text-white h-[50vh] lg:h-[40vh] flex items-end justify-center '>
        <div className='w-6xl pb-5'>
            <FooterTopSection/>
            <FooterBottomSection/>
        </div>
    </div>
  )
}

export default Footer
