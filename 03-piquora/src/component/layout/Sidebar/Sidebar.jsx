import React, { useState } from 'react'
import { FaFilter, FaToggleOn } from 'react-icons/fa'
import { CiSearch, CiUser } from "react-icons/ci"
import { LuCrown, LuMessageCircleMore } from "react-icons/lu"
import { IoEyeOutline, IoInformationCircleOutline, IoSettingsOutline } from "react-icons/io5"
import { PiHandshakeThin, PiShareNetworkThin } from "react-icons/pi"
import SidebarOptionBtn from '../../common/SidebarOptionBtn'
import { MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'
import PiquoraPicksBox from './PiquoraPicksBox'
import AccountPrivacy from './AccountPrivacy'

import Logo from '../../../assets/logo/piquora_icon_logo.png'
import CustomIcon from '../../common/CustomIcon'

const optionsMenu1 = [
    {
        icon: <FaFilter size={16} />,
        title: 'Match Preferences'
    },
    {
        icon: <CiSearch size={16} />,
        title: 'Search'
    },
    {
        icon: <LuMessageCircleMore size={16} />,
        title: 'Chat Rooms'
    },
    {
        icon: <IoEyeOutline size={16} />,
        title: 'Viewed You'
    },
    {
        icon: <PiShareNetworkThin size={16} />,
        title: 'Connection'
    }
]
const optionsMenu2 = [
    {
        icon: <CiUser size={16} />,
        title: 'Online Now'
    },
    {
        icon: <LuCrown size={16} />,
        title: 'Premium Quest'
    },
    {
        icon: <PiHandshakeThin size={16} />,
        title: 'INteliMatch'
    },
    {
        icon: <IoEyeOutline size={16} />,
        title: 'Recently Viewed'
    }
]
const profileSettingBtn = {
    title: 'Profile Settings',
    icon: <IoSettingsOutline />
}
const premiumBtn = {
    title: 'Premiun',
    icon: <LuCrown size={16} />
}
const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true)
    const onToggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <div className=''>
                {isOpen ? <div className='flex  flex-col gap-5 max-w-[230px]'>
                    <div className='bg-white shadow-[0px_4px_34px_0px_rgba(0,0,0,0.05)] p-3 flex flex-col gap-3 rounded-2xl  text-[#000000B2]'>
                        <div className=' flex justify-between items-center'>
                            <div className='text-center md:text-start'>
                                <h5 className='font-normal text-sm'>Signed in as:</h5>
                                <h3 className='font-bold text-sm '>Administrator: 40</h3>
                            </div>
                            <button className='bg-[#0000001A] backdrop-blur-lg hidden  rounded-xl p-3 text-[#11816A] md:inline-flex' onClick={onToggle}>
                                <MdOutlineKeyboardDoubleArrowLeft size={20} />
                            </button>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <div className='flex flex-col gap-3'>
                                <div className='flex flex-col gap-3 pt-2 border-b pb-1 border-[#0000001A]'>
                                    <div className='flex flex-col gap-2'>
                                        {optionsMenu1.map((option, index) => (
                                            <SidebarOptionBtn className={'rounded-xl p-2.5 hover:backdrop-blur-[14px] hover:bg-[#52C2AB33] hover:text-[#52C2AB] active:bg-[#52C2AB33] active:text-[#52C2AB] active:backdrop-blur-[14px]'} key={index} option={option} />
                                        ))}
                                    </div>
                                </div>
                                <div className='flex flex-col gap-3 border-b pb-1 border-[#0000001A]'>
                                    <div className='flex flex-col gap-2'>
                                        {optionsMenu2.map((option, index) => (
                                            <SidebarOptionBtn className={'rounded-xl p-2.5 hover:backdrop-blur-[14px] hover:bg-[#52C2AB33] hover:text-[#52C2AB] active:bg-[#52C2AB33] active:text-[#52C2AB] active:backdrop-blur-[14px]'} key={index} option={option} />
                                        ))}
                                    </div>
                                </div>
                                <SidebarOptionBtn className={'rounded-xl p-2.5 hover:backdrop-blur-[14px] hover:bg-[#52C2AB33] hover:text-[#52C2AB] active:bg-[#52C2AB33] active:text-[#52C2AB] active:backdrop-blur-[14px]'} option={profileSettingBtn} />
                            </div>
                            <SidebarOptionBtn className={'justify-center bg-[#11816A] text-white py-1   rounded-2xl shadow-[0_0_8px_0px_#52C2ABE5]'} option={{ title: '100% Complete' }} />
                        </div>
                        <SidebarOptionBtn IconCss={'bg-[#52C2AB] w-7 h-7 rounded-full inline-flex items-center justify-center'} className={'mt-5 text-white border-2 border-[#FFFFFF4D] py-3 rounded-full bg-[linear-gradient(91.84deg,#023668_4.69%,#00866A_95.31%)] justify-center'} option={premiumBtn} />
                    </div>
                    <div className='hidden gap-5 md:flex flex-col'>
                        <PiquoraPicksBox />
                        <AccountPrivacy />
                    </div>
                    
                    
                </div>
                    :
                    <div className='hidden md:flex flex-col gap-5 w-fit'>
                        <div className='flex flex-col gap-6 p-2  bg-white shadow-[0px_4px_34px_0px_rgba(0,0,0,0.05)] rounded-2xl'>
                            <button className='bg-[#0000001A] backdrop-blur-lg rounded-xl p-3 text-[#11816A] inline-flex' onClick={onToggle}>
                                <MdOutlineKeyboardDoubleArrowRight size={20} />
                            </button>
                            <div className='flex flex-col gap-8'>
                                <div className='flex flex-col gap-2'>
                                    {optionsMenu1.map((item, id) => (
                                        <button className='p-3 rounded-xl inline-flex justify-center items-center hover:text-[#52C2AB] backdrop-blur-[14px] bg-[#FFFFFF80] text-[#858688] hover:bg-[#023668]' key={id}>{item.icon}</button>
                                    ))}
                                </div>
                                <div className='flex flex-col gap-2'>
                                    {optionsMenu2.map((item, id) => (
                                        <button className='p-3 rounded-xl inline-flex justify-center items-center hover:text-[#52C2AB] backdrop-blur-[14px] bg-[#FFFFFF80] text-[#858688] hover:bg-[#023668]' key={id}>{item.icon}</button>
                                    ))}
                                </div>
                                <button className='p-3 rounded-xl inline-flex justify-center items-center hover:text-[#52C2AB] backdrop-blur-[14px] bg-[#FFFFFF80] text-[#858688] hover:bg-[#023668]' >{profileSettingBtn.icon}</button>
                            </div>
                            <button className='p-3 rounded-full inline-flex justify-center items-center
                    hover:text-white  backdrop-blur-[14px] hover:bg-[linear-gradient(91.84deg,#00866A_4.69%,#023668_95.31%)]
                    hover:border-[#FFFFFF80] hover:shadow-[0px_0px_12px_0px_#52C2ABFF] 
                    text-[#858688] hover:bg-[#023668]' >
                                {premiumBtn.icon}
                            </button>
                        </div>
                        <div className='p-3 bg-[linear-gradient(91.84deg,#023668_4.69%,#00866A_95.31%)] rounded-2xl border-2 border-[#FFFFFF4D] shadow-[0px_0px_8px_0px_#52C2ABE5]'>
                            <img src={Logo} alt="" />
                        </div>
                        <div className='bg-[#1C1C1C]   rounded-xl backdrop-blur-[14px] p-4'>
                            <CustomIcon className={'text-white bg-[#FFFFFF1A] p-1.5 rounded-full'} icon={<IoInformationCircleOutline size={16} />} />
                        </div>
                    </div>}

            </div>
        </>

    )
}

export default Sidebar
