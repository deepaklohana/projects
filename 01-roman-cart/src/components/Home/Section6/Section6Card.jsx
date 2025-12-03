import React from 'react'

const Section6Card = ({ card }) => {
  if (!card) return null
  return (
    <div className="flex flex-col items-center text-center lg:max-w-55  gap-3 lg:gap-5 px-5 py-8 rounded-xl bg-white shadow-md">
      <div className="max-w-16 h-16 flex items-center justify-center lg:mb-3">
        <img src={card.logo} alt={card.alt || ''} className="max-w-full max-h-full object-contain" />
      </div>
      <div className='flex flex-col gap-3 lg:gap-6'>
        <h4 className="font-semibold">{card.heading}</h4>
        <p className="text-[14px] text-[#666]">{card.text}</p>
        <a className='text-sm text-[#0c3382] underline' href="#">Learn more</a>
      </div>
    </div>
  )
}

export default Section6Card
