import React from 'react'
import { FaFacebook, FaGoogle, FaVideo } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa6'
import VerifiedTag from './VerifiedTag'
import { IoMdAttach } from 'react-icons/io'
import { GoSmiley } from 'react-icons/go'
import { IoGiftOutline } from 'react-icons/io5'
import { CiPhone, CiVideoOn } from 'react-icons/ci'
import { RiSendPlaneLine } from 'react-icons/ri'


const MessageBox = () => {
  const verification=[
    {
      icon: <FaFacebook />,
      title: 'Verified by Facebook'
    },
    {
      icon: <FaGoogle />,
      title: 'Verified by Goggle'
    },
    {
      icon: <FaPhone />,
      title: 'Verified by Phone'
    },
    {
      icon: <FaVideo />,
      title: 'Verified by Video'
    }
  ]
  const messageBoxIcons=[
    <IoMdAttach size={20}/>,
    <GoSmiley size={20}/>,
    <IoGiftOutline size={20}/>,
    <CiPhone size={20}/>,
    <CiVideoOn size={20}/>
  ]
  return (
    <div className='bg-white backdrop-blur-[14px] rounded-xl flex flex-col p-3 gap-5'>
      <div className='lg:flex grid grid-cols-2 gap-3'>
        {verification.map((item,id)=>(
          <VerifiedTag key={id} item={item} />
        ))}
      </div>
      <div className='flex flex-col gap-3'>
        <textarea className='w-full  border-b border-[#0000001A]' placeholder='Write trump a message....' name="" id=""></textarea>
        <div className='flex justify-between items-end'>
          <div className='flex gap-1 lg:gap-2'>
            <button className='w-7 h-7 flex items-center justify-center'>{messageBoxIcons[0]}</button>
            <button className='w-7 h-7 flex items-center justify-center'>{messageBoxIcons[1]}</button>
            <button className='w-7 h-7 flex items-center justify-center'>{messageBoxIcons[2]}</button>
            <button className='w-7 h-7 flex items-center justify-center'>{messageBoxIcons[3]}</button>
            <button className='w-7 h-7 flex items-center justify-center'>{messageBoxIcons[4]}</button>
          </div>
          <button className='bg-[#023668] text-[#52C2AB] w-11 h-11 flex items-center justify-center rounded-full'>
            <RiSendPlaneLine size={16}/>
          </button>
        </div>
      </div>
    
    </div>
  )
}

export default MessageBox
