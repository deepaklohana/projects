import React from 'react'
import Flag from '../../assets/iamges/usa.png'
import { MdKeyboardArrowDown } from 'react-icons/md'
const CountryBtn = ({className}) => {
  return (
    <div className={`flex lg:gap-2 gap-1 items-center ${className}`}>
        <div className='flex items-center gap-1'>
            <img className='rounded-full lg:w-7 lg:h-7 w-3 h-3 border border-white' src={Flag} alt="" />
            <h6 className='font-normal lg:text-sm text-xs'>EN</h6>
        </div> 
        <MdKeyboardArrowDown className='lg:size-6 size-4' />
    </div>
    
  )
}

export default CountryBtn
