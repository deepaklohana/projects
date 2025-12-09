import React from 'react'
import { AiOutlineGlobal } from 'react-icons/ai'
import { CiLocationOn } from 'react-icons/ci'
import { FaBookBible, FaCheck, FaStar } from 'react-icons/fa6'
import { GiBodyHeight, GiSittingDog } from 'react-icons/gi'
import { ImCancelCircle, ImMan } from 'react-icons/im'
import { MdKeyboardArrowDown, MdOutlineEngineering } from 'react-icons/md'
import { PiCheersDuotone, PiCigarette } from 'react-icons/pi'
import { RiRunLine } from 'react-icons/ri'
import { TbMoodBoy } from 'react-icons/tb'
import Tag from '../../common/Tag'

const BioDataScrollBox = () => {
  // REFACTOR: Changed structure to use an array 'items' instead of 'tag' and 'tagTwo'
  const bioData = [
    {
      title: 'Address',
      items: [
        { tagIcon: <CiLocationOn />, tagTitle: 'Lagos, Lagos: (12.85 mi)' },
        { tagIcon: <AiOutlineGlobal />, tagTitle: 'Middle Eastern' }
      ]
    },
    {
      title: 'Religion',
      items: [
        { tagIcon: <FaBookBible />, tagTitle: 'Christian' }
      ]
    },
    {
      title: 'Education',
      items: [
        { tagIcon: <MdOutlineEngineering />, tagTitle: 'Engineer' }
      ]
    },
    {
      title: 'Family',
      items: [
        { tagIcon: <TbMoodBoy />, tagTitle: 'No Children' }
      ]
    },
    {
      title: 'Habits',
      items: [
        { tagIcon: <PiCigarette />, tagTitle: 'Social Smoker' },
        { tagIcon: <PiCheersDuotone />, tagTitle: 'Drinks, Occasionally' }
      ]
    },
    {
      title: 'Physical',
      items: [
        { tagIcon: <GiBodyHeight />, tagTitle: '5.8' },
        { tagIcon: <RiRunLine />, tagTitle: 'Athletic' }
      ]
    },
    {
      title: 'Preferences',
      items: [
        { tagIcon: <ImMan />, tagTitle: 'Looking for Men' }
      ]
    },
    {
      title: 'Languages',
      items: [
        { tagIcon: <AiOutlineGlobal />, tagTitle: 'English, Yoruba' }
      ]
    },
    {
      title: 'Occupation',
      items: [
        { tagIcon: <MdOutlineEngineering />, tagTitle: 'Software Developer' }
      ]
    },
    {
      title: 'Career Level',
      items: [
        { tagIcon: <FaStar />, tagTitle: 'Mid-level' }
      ]
    },
    {
      title: 'Lifestyle',
      items: [
        { tagIcon: <RiRunLine />, tagTitle: 'Active, Outdoorsy' }
      ]
    },
    {
      title: 'Pets',
      items: [
        { tagIcon: <GiSittingDog />, tagTitle: 'No Pets' }
      ]
    },
    {
      title: 'Zodiac',
      items: [
        { tagIcon: <FaStar />, tagTitle: 'Gemini' }
      ]
    }
  ]

  return (
    <div className='flex flex-col '>
      {/* FIX: Added 'flex flex-col' here so 'gap-4' actually works */}
      <div className='bg-[#F7F7F7] flex flex-col overflow-y-auto w-full h-[350px] lg:h-[558px] rounded-[10px] p-2.5 gap-4 relative'>
        {/* Request Cancel and Accpet option */}
        <div className='absolute flex gap-2 bottom-3 right-3'>
          <button className='text-white flex items-center justify-center border-2 border-[#FFFFFF4D] shadow-[0px_0px_8px_0px_#DC5656E5] bg-[#DC5656] w-12 h-12 rounded-full'>
            <ImCancelCircle size={20}/>
          </button>
          <button className='text-white flex items-center justify-center w-12 h-12 rounded-full 
            border-2 border-[#FFFFFF4D] 
            bg-linear-to-r from-[#023668] to-[#00866A] 
            shadow-[0px_0px_8px_0px_#52C2ABE5]'>
            <FaCheck size={20}/>
          </button>
        </div>
        {/* Header Section */}
        <div className='flex justify-between'>
          <div className='flex gap-4'>
            <h2 className='text-[20px] font-medium leading-normal tracking-[1%]'>Bio</h2>
            <div className='bg-[#34A48C33] py-0.5 px-2 flex items-center gap-2 rounded-[42px]'>
              <h5 className='text-[#34A48C] text-sm font-medium leading-normal tracking-[0.2px]'>Verified</h5>
              <FaStar className='text-[#F2C658]' />
            </div>
          </div>
          <div className='bg-[#0000001A] text-[#1C1C1C] py-0.5 px-2 flex items-center gap-2 rounded-[42px] cursor-pointer'>
            <h5 className='text-sm font-medium leading-normal tracking-[0.2px]'>Action</h5>
            <MdKeyboardArrowDown />
          </div>
        </div>
        {/* Data Mapping Section */}
        {bioData.map((data, index) => (
          <div key={index} className='flex flex-col gap-1'>
            <h6 className='text-sm font-medium leading-normal tracking-[0.2px]'>{data.title}</h6>
            {/* FIX: Map through the new 'items' array to render multiple tags if they exist */}
            <div className='flex flex-wrap gap-2'>
              {data.items.map((item, i) => (
                <Tag key={i} tag={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* spark and echo bar */}
      <div className='w-full px-3 flex border-2 text-white mt-3'>
        <div className='bg-[#11816A] py-1 w-1/2 text-center rounded-l-xl'>
          <h5 className='text-sm font-light leading-normal tracking-[0.2px]'>71% Spark</h5>
        </div>
        <div className='bg-[#52C2AB] py-1 w-1/2 text-center rounded-r-xl'>
          <h5 className='text-sm font-light leading-normal tracking-[0.2px]'>49% Echo</h5>
        </div>
      </div>
    </div>
  )
}

export default BioDataScrollBox