import { MoveUpRight } from 'lucide-react'
import React from 'react'

const Card = ({card}) => {
  return (
    <div className='bg-white flex flex-col max-w-[362px] py-7 px-4 gap-4 rounded-xl shadow-[0_0_16px_rgba(16,16,16,0.08)] items-center justify-between'>
        <img src={card.img} alt="" />
        <div className='flex flex-col gap-3 px-5 pb-5 items-center text-center '>
            <h3 className='text-2xl font-medium'>{card.title}</h3>
            <p className='text-[#13131380] text-base '>{card.detail}</p>  
        </div>
        <a className='text-[#0c3382] underline inline-flex items-center gap-1' href="#">{card.tag} <MoveUpRight size={14} /></a>
    </div>
  )
}

export default Card
