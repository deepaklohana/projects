import React from 'react'
import CustomIcon from '../../common/CustomIcon'
import { IoInformationCircleOutline } from 'react-icons/io5'
import SidebarOptionBtn from '../../common/SidebarOptionBtn'
import { CgProfile } from 'react-icons/cg'

const AccountPrivacy = () => {
    const tag={
        title: 'Public Profile',
        icon: <CgProfile />
    }
    return (
    <div className='text-white bg-[#131313] backdrop-blur-[14px] rounded-xl p-4 flex  flex-col gap-4 '>
        
        <div className='lg:w-[198px] flex justify-between items-center'>
            <h4 className='text-white font-bold text-lg lg:text-xl tracking-[-0.01em] leading-[110%]'>Account Privacy</h4>
            <CustomIcon className={'bg-[#FFFFFF1A] p-1.5 rounded-full'} icon={<IoInformationCircleOutline size={16} />}/>
        </div>
        <button className='bg-[#FFFFFF1A] text-[#52c2ab] w-[115px]  inline-flex gap-1.5 py-1.5 px-2.5 items-center rounded-[100px]'>
            <span>{tag.icon}</span><span className='text-xs font-medium leading-[150%] tracking-[-0.02em]'>{tag.title}</span>
        </button>
    </div>
    )
}

export default AccountPrivacy
