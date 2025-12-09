import React, { useEffect, useState } from 'react'
import Img1 from '../../../assets/iamges/ImageSlider1.png'
import Img2 from '../../../assets/iamges/ImageSlider2.png'
import Img3 from '../../../assets/iamges/ImageSlider3.png'
import Img4 from '../../../assets/iamges/ImageSlider4.png'
import Img5 from '../../../assets/iamges/ImageSlider5.png'

import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md'
import { FaStar } from 'react-icons/fa'
import { IoIosFlash } from 'react-icons/io'
import { IoInformationCircleOutline } from 'react-icons/io5'
import { RiSendPlaneLine } from 'react-icons/ri'

const profileDetail=[
        {
            username: 'Trump_42',
            age: '22 Years',
            icon: <FaStar size={20} />,
            tagTitle:'Boost Profile' ,
            tagIcon: <IoIosFlash />,
            
        }
    ]
    const img =[
        Img1,
        Img2,
        Img3,
        Img4,
        Img5,
    ]
const ImageSlider = () => {
    
    const [index,setIndex]= useState(0)
    const previusImg=()=>{
        setIndex((currentImg)=>
            currentImg=== 0? img.length-1:  currentImg-1
        )
    }
    const nextImg=()=>{
        setIndex((currentImg)=>
            currentImg===img.length-1? 0: currentImg+1 
        )
    }
    const getBarStyle=(currentImg)=>{
        return currentImg===index? 'bg-[#52C2AB] transition-all rounded-full w-2/5 transition-all durtion-3000  ease-in-out':'bg-[#FFFFFF1A] rounded-full w-1/5 transition-all durtion-3000  ease-in-out'
    }
    useEffect(()=>{
            const interval = setInterval(()=>{
                setIndex(prev=>{
                    if (prev===0) return 1;
                    if (prev===1) return 2;
                    if (prev===2) return 3;
                    if (prev===3) return 4;
                    return 0;
                })
            },5000)
            return ()=> clearInterval(interval)
        },[]) 
    return (
    <div className='flex flex-col gap-3  text-white lg:w-2/5'>
        <div style={{ backgroundImage: `url(${img[index]})` }}
            className='w-full rounded-[10px] h-[536px] 
            relative bg-no-repeat bg-cover bg-center
            flex flex-col justify-between py-5 px-5'>
            <button onClick={previusImg} 
            className='bg-[#FFFFFF33] border-[0.8px] border-solid 
            [border:linear-gradient(180deg,#FFFFFF_0%,rgba(255,255,255,0)_100%)_1]  
            absolute p-3 top-1/2 rounded-full left-5'>
                <MdNavigateBefore size={20}/>
            </button>
            <button onClick={nextImg}
            className='bg-[#FFFFFF33] border-[0.8px] border-solid 
            [border:linear-gradient(180deg,#FFFFFF_0%,rgba(255,255,255,0)_100%)_1]  
            absolute p-3 top-1/2 rounded-full right-5 '>
                <MdNavigateNext size={20}/>
            </button>
            <div className='flex flex-col gap-3'>
                <div className='flex gap-1 h-[5px]'>
                    <div className={`${getBarStyle(0)}`}></div>
                    <div className={`${getBarStyle(1)}`}></div>
                    <div className={`${getBarStyle(2)}`}></div>
                    <div className={`${getBarStyle(3)}`}></div>
                    <div className={`${getBarStyle(4)}`}></div>
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
