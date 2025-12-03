import React from 'react'
import { ChevronDown, Info } from 'lucide-react'
import Img from '../assets/Card3Img.png'
const Card3 = () => {
  return (
    <div className=' flex flex-col px-5 py-8 max-w-[367px] h-[350px] rounded-xl shadow-[0_0_16px_rgba(16,16,16,0.08)] items-center justify-between'>
      <div className='flex flex-col items-center text-center gap-8 px-2'>
        <div className='flex flex-col gap-3'>
            <h4 className='text-[#131313] text-2xl'>Storefront</h4>
            <p className='text-[#13131380] text-base'>Easily add an entire shop on to Wordpress, Facebook or your own website and manage your products and sales on RomanCart</p>
        </div>
        <div className='flex  gap-4  '>
            <img src={Img} alt="" />
            <img src={Img} alt="" />
        </div>
      </div>
      <a className='text-[#0c3382] underline inline-flex items-center gap-1' href="#"><Info size={16}/> More Information</a>
    </div>
  )
}

export default Card3
