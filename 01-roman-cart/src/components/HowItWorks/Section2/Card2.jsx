import { ChevronDown, Info } from 'lucide-react'
import React from 'react'

const Card2 = () => {
  return (
    <div className=' flex flex-col px-5 py-8 max-w-[367px] h-[350px] rounded-xl shadow-[0_0_16px_rgba(16,16,16,0.08)] items-center justify-between'>
      <div className='flex flex-col items-center text-center gap-8 px-2'>
        <div className='flex flex-col gap-3'>
            <h4 className='text-[#131313] text-2xl'>Button Widget</h4>
            <p className='text-[#13131380] text-base'>Create Shopping Cart Buttons With Multiple Options, Variations, Modifiers and Social Media Links</p>
        </div>
        <div className='flex justify-between gap-7 items-center '>
            <div className='flex flex-col gap-1' >
                <div className='flex w-[134px] border border-[#1313131A] bg-[#dddddd47] rounded-lg items-center justify-between px-2 py-1'>
                    <h6 className=' text-sm'>Red</h6>
                    <ChevronDown size={16}/>
                </div>
                <div className='flex w-[134px] border border-[#1313131A] bg-[#dddddd47] rounded-lg items-center justify-between px-2 py-1'>
                    <h6 className=' text-sm'>Small</h6>
                    <ChevronDown size={16}/>
                </div>
                <div className='flex w-[134px] border border-[#1313131A] bg-[#dddddd47] rounded-lg items-center justify-between px-2 py-1'>
                    <h6 className=' text-sm'>Top</h6>
                    <ChevronDown size={16}/>
                </div>
            </div>
            <button className='bg-[#dddddd47] px-6 py-4 rounded-xl border border-[#1313131A]'>Buy Now</button>
            
        </div>
      </div>
      <a className='text-[#0c3382] underline inline-flex items-center gap-1' href="#"><Info size={16}/> More Information</a>
    </div>
  )
}

export default Card2
