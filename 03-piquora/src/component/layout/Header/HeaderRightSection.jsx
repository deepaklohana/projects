import React from 'react'
import Flag from '../../../assets/iamges/usa.png'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { FaRegShareFromSquare } from 'react-icons/fa6'
import { TbSettings } from 'react-icons/tb'
const HeaderRightSection = () => {
  return (
    <div className='flex gap-3 text-[#475569]'>
        <div className='flex gap-2 items-center'>
        <div className='flex gap-1'>
            <img className='rounded-full w-7 h-7' src={Flag} alt="" />
            <h6 className='font-normal'>EN</h6>
        </div>
            <MdKeyboardArrowDown className='' size={24}/>
        </div>
        <button className='hidden md:inline-flex bg-white  rounded-2xl px-3 py-3 '><FaRegShareFromSquare size={24} /></button>
        <button className='hidden md:inline-flex bg-white rounded-2xl px-3 py-3 '><TbSettings size={24}/></button>
        <button className=' bg-[#34A48C] text-white py-2 px-5 rounded-[42px]'>Advanced</button>
    </div>
  )
}

export default HeaderRightSection
