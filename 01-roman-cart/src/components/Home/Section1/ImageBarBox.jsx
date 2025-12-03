import React from 'react'
import ImageBar from './ImageBar'
import BarBoxLines from './BarBoxLines'
import BarBoxBtn from './BarBoxBtn'

const ImageBarBox = () => {
  return (
    <div>
      {/* First Bar */}
      <div className='flex justify-between rounded-sm bg-white  p-1.75'>
        <div className='flex flex-row gap-2'>
          <ImageBar/>
          <BarBoxLines/>
          <div className='flex flex-col justify-center items-center'>
            <BarBoxBtn/>
          </div>
        </div>
      </div>

      {/* Second bar */}
      <div className='flex justify-between rounded-sm bg-white  p-1.75'>
        <div className='flex flex-row gap-2'>
          <ImageBar/>
          <BarBoxLines/>
          <div className='flex flex-col justify-center items-center'>
            <BarBoxBtn/>
          </div>
        </div>
      </div>

      {/* Third bar */}
      <div className='flex justify-between rounded-sm bg-white  p-1.75'>
        <div className='flex flex-row gap-2'>
          <ImageBar/>
          <BarBoxLines/>
          <div className='flex flex-col justify-center items-center'>
            <BarBoxBtn/>
          </div>
        </div>
      </div>

      {/* fourth bar */}

      <div className='flex justify-between rounded-sm bg-white  p-1.75'>
        <div className='flex flex-row gap-2'>
          <ImageBar/>
          <BarBoxLines/>
          <div className='flex flex-col justify-center items-center'>
            <BarBoxBtn/>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default ImageBarBox
