import React from 'react'

const Section8Card = ({card}) => {
  return (
    <div className='flex flex-col gap-7 w-[363px] rounded-2xl bg-white'>
      <div>
        <img src={card.img} alt="" />
      </div>
      <div className='flex justify-between items-center px-5'>
            <h5 className='inline-flex gap-2 text-[#000022C4]'>
                <span className='flex items-center justify-center '>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                </svg>
                </span>
                {card.date}
            </h5>
            <h6 className='text-[12px] text-[#646464]'>{card.category}</h6>
        </div>
      <div className='px-5 flex flex-col gap-2 pb-5'>
        <h3 className='text-[22px]'>{card.title}</h3>
        <p className='text-[#13131380]'>{card.description}</p>
      </div>
    </div>
  )
}

export default Section8Card
