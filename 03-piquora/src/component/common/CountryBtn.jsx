import React from 'react'
import Flag from '../../assets/iamges/usa.png'
import { MdKeyboardArrowDown } from 'react-icons/md'
const CountryBtn = ({className}) => {
  return (
    <div className={`flex gap-2 items-center ${className}`}>
        <div className='flex gap-1'>
            <img className='rounded-full w-7 h-7' src={Flag} alt="" />
            <h6 className='font-normal'>EN</h6>
        </div> 
        <MdKeyboardArrowDown className='' size={24}/>
    </div>
    
  )
}

export default CountryBtn
