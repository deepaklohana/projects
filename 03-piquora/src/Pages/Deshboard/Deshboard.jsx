import React from 'react'
import Header2 from '../../component/layout/Header/Header2'
import Sidebar from '../../component/layout/Sidebar/Sidebar'
import PiquoraPicksBox from '../../component/layout/Sidebar/PiquoraPicksBox'
import AccountPrivacy from '../../component/layout/Sidebar/AccountPrivacy'
import Footer2 from '../../component/layout/Footer/Footer2'
import GiftCounterBox from '../../component/common/GiftCounterBox'
import Slider from '../../component/layout/Slider/Slider'

const Deshboard = () => {
  return (
    <div>
        <div className='pt-2.5 px-25'>
            <Header2/>
            <div className='flex pt-5 gap-10'>
              <div className='flex flex-col gap-5 max-w-[230px]'>
                <Sidebar/>
                <PiquoraPicksBox/>
                <AccountPrivacy/>
              </div>
              <div className=''>
                <Slider/>
              </div>
            </div>
        </div>
        <Footer2/>
    </div>
  )
}

export default Deshboard
