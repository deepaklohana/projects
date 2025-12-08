import React from 'react'
import Img from '../../../assets/iamges/ImageSlider.png'
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md'
import { FaStar } from 'react-icons/fa'
import { IoIosFlash } from 'react-icons/io'
import { IoInformationCircleOutline } from 'react-icons/io5'
import { RiSendPlaneLine } from 'react-icons/ri'

const ImageSlider = () => {
    const profileDetail=[
        {
            username: 'Trump_42',
            age: '22 Years',
            icon: <FaStar size={20} />,
            tagTitle:'Boost Profile' ,
            tagIcon: <IoIosFlash />
        }
    ]
    return (
    <div className='flex flex-col gap-3  text-white lg:w-2/5'>
        <div style={{ backgroundImage: `url(${Img})` }}
            className='w-full rounded-[10px] h-[536px] 
            relative bg-no-repeat bg-cover bg-center
            flex flex-col justify-between py-5 px-5'>
            <button className='bg-[#FFFFFF33] border-[0.8px] border-solid 
            [border:linear-gradient(180deg,#FFFFFF_0%,rgba(255,255,255,0)_100%)_1]  
            absolute p-3 top-1/2 rounded-full left-5'>
                <MdNavigateBefore size={20}/>
            </button>
            <button className='bg-[#FFFFFF33] border-[0.8px] border-solid 
            [border:linear-gradient(180deg,#FFFFFF_0%,rgba(255,255,255,0)_100%)_1]  
            absolute p-3 top-1/2 rounded-full right-5 '>
                <MdNavigateNext size={20}/>
            </button>
            <div className='flex flex-col gap-3'>
                <div className='flex gap-1 h-[5px]'>
                    <div className='bg-[#52C2AB] rounded-full w-2/5'></div>
                    <div className='bg-[#FFFFFF1A] rounded-full w-1/5'></div>
                    <div className='bg-[#FFFFFF1A] rounded-full w-1/5'></div>
                    <div className='bg-[#FFFFFF1A] rounded-full w-1/5'></div>
                    <div className='bg-[#FFFFFF1A] rounded-full w-1/5'></div>
                </div>
                <div className='flex gap-0.5 items-center bg-[#FFFFFF1A] backdrop-blur-[14px] w-[120px] py-1 px-2 border-[0.5px] border-white rounded-full'>
                    <span className='text-[#F2C658]'>{profileDetail[0].tagIcon}</span>
                    <h4 className=' font-normal  text-sm leading-[150%] tracking-[0.2px]'>{profileDetail[0].tagTitle}</h4> 
                </div>
            </div>
            <div className='flex justify-between items-end '>
                <div>
                    <h2 className='font-bold text-3xl leading-[150%] tracking-[0.2px]'>{profileDetail[0].username}</h2>
                    <div className='flex gap-1 bg-[#FFFFFF1A] backdrop-blur-[14px] w-20 py-1 px-2 items-center rounded-[10px]'>
                        <h4 className='font-normal text-xs leading-[150%] tracking-[0.2px]'>{profileDetail[0].age}</h4>
                        <div className='w-2 h-2 rounded-full bg-[#52c2ab]'></div>
                    </div>
                </div>
                <div className='bg-white p-2.5 rounded-full backdrop-blur-[10px]'>
                    <span className='text-[#F2C658]'>{profileDetail[0].icon}</span>
                </div>
            </div>
        </div>
        <div className='flex lg:justify-between justify-center gap-3 w-full '>
            <button className='lg:flex hidden items-center w-2/4  gap-2 py-3 px-4 rounded-[42px] bg-[#0000001A] text-[#1C1C1C] font-normal text-sm leading-[150%] tracking-[0.2px]'>
                <span className='text-[#858688]'>
                    <IoInformationCircleOutline size={16}/>
                </span>
                <h6>Qsync Meter</h6>
            </button>
            <button className=' w-full lg:w-4/5 flex items-center lg:justify-start justify-center gap-2 py-3 px-4 rounded-[42px] bg-[linear-gradient(91.84deg,#023668_4.69%,#00866A_95.31%)]  font-medium text-sm leading-[150%] tracking-[0.2px]'>
                <span className='w-7 h-7 rounded-full inline-flex items-center justify-center bg-[#52C2AB]'>
                    <RiSendPlaneLine size={16} />  
                </span>
                <h6>Send Connection Request</h6>
            </button>
        </div>
        
    </div>
    )
}

export default ImageSlider
