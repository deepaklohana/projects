import React from 'react'

const Tag = ({tag}) => {
  return (
    <div className='flex items-center gap-2.5 bg-white p-2 rounded-[10px]'>
        <span className='text-[#34A48C]'>{tag.tagIcon}</span>
        <h6 className='text-sm font-normal leading-normal tracking-[0.2px]'>{tag.tagTitle}</h6>
    </div>
  )
}

export default Tag
