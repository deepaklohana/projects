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
import ImageSlider from '../../component/layout/Slider/ImageSlider'
import BioDataScrollBox from '../../component/layout/Slider/BioDataScrollBox'
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md'
import { CiHeart, CiUser } from 'react-icons/ci'
import { AiOutlineProfile } from 'react-icons/ai'
import { IoChatbubbleEllipsesOutline, IoGiftOutline, IoInformationCircleOutline } from 'react-icons/io5'

const gifts = [
     {
       title: 'Recieved Gifts',
       gift: '25'
     },
     {
       title: 'Gifts Count',
       gift: '100'
     }
     
   ]
const Deshboard = () => {

   
   const [activeButton, setActiveButton] = React.useState(null);
   
  return (
    <>
      {/* Desktop View */}
      <div className='md:block hidden'>
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
                {/* MISTAKE 2: Corrected className concatenation */}
                <GiftCounterBox item={gifts[0]} className={'bg-linear-to-r from-[#023668] to-[#00866A]'}/> 
                <GiftCounterBox item={gifts[1]} className={'bg-linear-to-r from-[#023668] to-[#00866A]'}/>
              </div>
            </div>
          </div>
        </div>
        <Footer2/>
      </div>
      
      {/* Mobile View */}
      <div className='block md:hidden'>
        <div className=' p-6 container mx-auto '>
          <Header2/>
          <div className='flex pt-5 gap-10 container mx-auto'>
            <div className='w-full flex flex-col gap-5 mb-6'>
              <div className='bg-[#FFFFFF] p-3 flex flex-col gap-3 shadow-[0px_4px_34px_0px_#0000000D] rounded-2xl relative'>
                <ImageSlider/>
                <div className='w-full px-2 flex border-2 text-white mt-3'>
                  <div className='bg-[#11816A] py-1 w-1/2 text-center rounded-l-xl'>
                    <h5 className='text-sm font-light leading-normal tracking-[0.2px]'>71% Spark</h5>
                  </div>
                  <div className='bg-[#52C2AB] py-1 w-1/2 text-center rounded-r-xl'>
                    <h5 className='text-sm font-light leading-normal tracking-[0.2px]'>49% Echo</h5>
                  </div>
                </div>
              </div>
              
              {/* Menu buttons block */}
              <div className='flex justify-evenly text-white mb-6 shadow-[0px_14px_14px_0px_#0000000D] bg-white py-3 rounded-xl'> {/* Added a wrapper div for menu buttons */}
                <button onClick={() => setActiveButton(activeButton === 1 ? null : 1)} className='bg-[#023668] p-2 rounded-[10px] border-2 border-[#FFFFFF4D]'>
                  <CiUser size={24}/>
                </button>
                <button onClick={() => setActiveButton(activeButton === 2 ? null : 2)} className='bg-[#52C2AB] p-2 rounded-[10px] border-2 border-[#FFFFFF4D]'>
                  <AiOutlineProfile size={24} />
                </button>
                <button onClick={() => setActiveButton(activeButton === 3 ? null : 3)} className='bg-[#FFBB00] p-2 rounded-[10px] border-2 border-[#FFFFFF4D]'>
                  <IoChatbubbleEllipsesOutline size={24}/>
                </button>
                <button onClick={() => setActiveButton(activeButton === 4 ? null : 4)} className='bg-[#731997] p-2 rounded-[10px] border-2 border-[#FFFFFF4D]'>
                  <IoInformationCircleOutline size={24}/>
                </button>
                <button onClick={() => setActiveButton(activeButton === 5 ? null : 5)} className='bg-[#E62874] p-2 rounded-[10px] border-2 border-[#FFFFFF4D]'>
                  <CiHeart size={24}/>
                </button>
                <button onClick={() => setActiveButton(activeButton === 6 ? null : 6)} className='bg-[#2A7FFF] p-2 rounded-[10px] border-2 border-[#FFFFFF4D]'>
                  <IoGiftOutline size={24}/>
                </button>
              </div> {/* End of menu buttons block */}
              
              {/* Conditional rendering based on activeButton (Example) */}
              {activeButton === 1 && <AboutUserSAection/>}
              {activeButton === 2 && <BioDataScrollBox/>}
              {activeButton === 3 && <MessageBox/>}
              {activeButton === 4 && <AccountPrivacy/>}
              {activeButton === 6 && <div className='flex lg:flex-row flex-col gap-5 w-full text-white '>
                <GiftCounterBox item={gifts[0]} className={'bg-linear-to-r from-[#023668] to-[#00866A]'}/>
                <GiftCounterBox item={gifts[1]} className={'bg-linear-to-r from-[#023668] to-[#00866A]'}/>
              </div>}
              {activeButton === 5 && <PiquoraPicksBox/>}
            </div> 
          </div>
          
        </div>
        <Footer2/>
      </div> {/* FIX: This closes the <div className='flex md:hidden'> */}
    </>
  )
}
// 
export default Deshboard
