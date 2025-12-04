import React from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { FaRegShareFromSquare } from 'react-icons/fa6'
import { TbSettings } from 'react-icons/tb'
import CountryBtn from '../../common/CountryBtn'
const HeaderRightSection = () => {
  return (
    <div className='flex gap-3 text-[#475569]'>
        <CountryBtn/>
        <button className='hidden md:inline-flex bg-white  rounded-2xl px-3 py-3 '><FaRegShareFromSquare size={24} /></button>
        <button className='hidden md:inline-flex bg-white rounded-2xl px-3 py-3 '><TbSettings size={24}/></button>
        <button className=' bg-[#34A48C] text-white py-2 px-5 rounded-[42px]'>Advanced</button>
    </div>
  )
}

export default HeaderRightSection
