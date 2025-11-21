import React from 'react'
import BoxBottomLeft from './BoxBottomLeft'
import BoxBottomRight from './BoxBottomright'

const ShirtBoxBottom = () => {
  return (
    <div className='flex justify-between '>
      <BoxBottomLeft/>
      <BoxBottomRight/>
    </div>
  )
}

export default ShirtBoxBottom
