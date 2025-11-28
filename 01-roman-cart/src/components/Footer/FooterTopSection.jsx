import React from 'react'
import FooterMenu from './FooterMenu'
import FooterSocialIcon from './FooterSocialIcon'

const FooterTopSection = () => {
  return (
    <div className='border-b border-white/20 pb-4'>
      <div className='flex flex-col md:flex-row items-center md:items-start justify-between gap-4'>
        <div className='w-full md:w-auto'>
          <FooterMenu />
        </div>
        <div className='w-full md:w-auto flex justify-center md:justify-end'>
          <FooterSocialIcon />
        </div>
      </div>
    </div>
  )
}

export default FooterTopSection
