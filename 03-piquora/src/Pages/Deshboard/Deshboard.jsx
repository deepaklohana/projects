import React from 'react'
import Header2 from '../../component/layout/Header/Header2'
import Sidebar from '../../component/layout/Sidebar/Sidebar'
import PiquoraPicksBox from '../../component/layout/Sidebar/PiquoraPicksBox'
import AccountPrivacy from '../../component/layout/Sidebar/AccountPrivacy'
import Footer2 from '../../component/layout/Footer/Footer2'
import GiftCounterBox from '../../component/common/GiftCounterBox'
import Slider from '../../component/layout/Slider/Slider'
import MessageBox from '../../component/layout/MessageBox/MessageBox'
import AboutUserSAection from '../../component/layout/AboutUserSection/AboutUserSAection'

const Deshboard = () => {
   const gifts=[
    {
      title:'Recieved Gifts',
      gift:'25'
    },
    {
      title: 'Gifts Count',
      gift: '100'
    }
  ]
  return (
    <div>
        <div className='lg:pt-2.5 p-6 lg:px-25 container mx-auto lg:pb-50'>
            <Header2/>
            <div className='flex pt-5 gap-10 container mx-auto'>
              <div className='lg:flex hidden flex-col gap-5 max-w-[230px]'>
                <Sidebar/>
                <PiquoraPicksBox/>
                <AccountPrivacy/>
              </div>
              <div className='w-full flex flex-col gap-5'>
                <Slider/>
                <MessageBox/>
                <AboutUserSAection/>
                <div className='flex lg:flex-row flex-col gap-5 w-full text-white'>
                  <GiftCounterBox item={gifts[0]} className={'bg-linear-to-r from-[#023668] to-[#00866A]'}/>
                  <GiftCounterBox item={gifts[1]} className={'bg-linear-to-r from-[#023668] to-[#00866A]'}/>
                </div>
              </div>
            </div>
        </div>
        <Footer2/>
    </div>
  )
}
// 
export default Deshboard
