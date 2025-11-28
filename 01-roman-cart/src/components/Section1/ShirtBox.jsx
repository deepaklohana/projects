import React from 'react'
import Shirt1 from '../../assets/Shirt img1.png'
import ShirtBoxBottom from './ShirtBoxBottom'

const ShirtBox = () => {
  return (
    <div className='absolute lg:top-0 lg:-left-2 px-1.5 pt-1.5 pb-3.5 lg:scale-100 scale-75 top-0 -left-6 rounded-md bg-white flex flex-col gap-2'>
      <img src={Shirt1} alt="" />
      <ShirtBoxBottom/>
    </div>
  )
}

export default ShirtBox
