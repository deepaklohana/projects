import React from 'react'

const Section3SideCard = ({card}) => {
  return (
    <div style={{backgroundImage: `url(${card.bgImg})`,backgroundSize:"cover"}} className=' bg-center  w-[270px] h-[470px] overflow-hidden rounded-xl relative '>
      <div className='m-3 rounded-lg bg-white justify-between p-5  absolute bottom-0 w-[246px]'>
        <div className='flex flex-col gap-6'>
            <h4 className='text-[#131313B3]'>{card.num}</h4>
            <h2 className='text-[#131313] text-2xl font-bold'>{card.title}</h2>
        </div>  
     </div>
    </div>
  )
}

export default Section3SideCard