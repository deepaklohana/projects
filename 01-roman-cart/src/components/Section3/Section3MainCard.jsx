import React from 'react'

const Section3MainCard = ({card}) => {
  return (
    <div style={{backgroundImage: `url(${card.bgImg})`,backgroundSize:"cover"}} className=' bg-center  lg:w-[560px] lg:h-[470px] w-[270px] h-[470px] overflow-hidden rounded-xl relative '>
     {/* <img src={card.bgImg} alt={card.title} /> */}
     <div className='flex flex-col lg:flex-row bg-white justify-between p-5 gap-3 absolute bottom-0 m-3 rounded-lg '>
        <div className='flex flex-col gap-1 lg:gap-6'>
            <h4 className='text-[#131313B3]'>{card.num}</h4>
            <h2 className='text-[#131313] text-2xl font-bold'>{card.title}</h2>
        </div>
        <div className='lg:w-3/6 flex flex-col gap-1 lg:gap-5 text-[14px]'>
            <p className='text-[#131313B3]'>{card.descprition}</p>
            <a className='text-[#131313] underline font-semibold' href="">Leran more</a>
        </div>
     </div>
    </div>
  )
}

export default Section3MainCard
