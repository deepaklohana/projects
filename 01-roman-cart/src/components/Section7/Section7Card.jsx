import React from 'react'

const Section7Card = ({ card,isPrimary }) => {
  return (
    <div className="bg-white w-full sm:max-w-[320px] md:max-w-[350px] flex flex-col space-y-6 p-4 sm:p-6 rounded-lg shadow-md">

      {/* TOP: price + details (child #1) */}
      <div className="flex flex-col gap-6">
        <div className="bg-[#0c3382] px-2.5 py-1.5 rounded-lg w-fit">
          <h6 className="text-white text-sm font-medium">{card.plan}</h6>
        </div>

        <h1 className="text-[#131313] font-bold text-3xl md:text-4xl leading-tight">
          {card.price}
          <span className="text-base md:text-xl font-semibold text-[#131313ad]"> /month</span>
        </h1>

        <p className="text-[#121212ad] text-[16px]">{card.detail}</p>

        <button className={"w-full inline-flex items-center justify-center gap-2 bg-[#0C3382] text-white rounded-xl px-4 py-3 text-sm" + (isPrimary ? ' bg-[#0C3382]' : ' bg-[#555555]')}>
          Get Started
          <span className="bg-[#ee950a] w-5 h-5 p-0.5  rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </span>
        </button>
      </div>

      {/* FEATURES (child #2) */}
      <div className="flex flex-col space-y-4">
        <h4 className="text-[#131313] text-xl font-semibold">Features</h4>

        <div className="mt-3 flex flex-col space-y-4">
          {card.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2.5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-[#0c3382]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span className="text-[#121212ad]">{feature}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Section7Card