import React from 'react'

const SearchBar = () => {
  return (
    <div className='flex w-full md:w-[326px] rounded-lg border border-[#dddddd] text-[#131313] text-sm md:text-[12px] font-light scale-85 lg:scale-100'>
        <div className='py-3 pl-3 flex-1 md:w-[108px]'>
            <h6>All Product</h6>
        </div>
        <div className='py-3 pl-3 border-l border-[#dddddd] flex-1 md:w-[108px]'>
            <h6>Price</h6>
        </div>
        <div className='flex items-center justify-between py-3 border-[#dddddd] border-l flex-1 md:w-[108px] px-3'>
            <h6>Search</h6>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-[#131313]">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>

        </div>
    </div>
  )
}
export default SearchBar
