import React from 'react'

const SearchBar = () => {
  return (
    <div className='flex  rounded-lg border border-[#dddddd] text-[#131313] text-[12px] w-[326px] font-light'>
        <div className='py-3 pl-3 w-[108px]'>
            <h6>All Product</h6>
        </div>
        <div className='py-3 pl-3 border-l border-[#dddddd] w-[108px]'>
            <h6>Price</h6>
        </div>
        <div className='flex items-center justify-around py-3 border-[#dddddd] border-l w-[108px]'>
            <h6>Search</h6>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>

        </div>
      
      
      
    </div>
  )
}
export default SearchBar
