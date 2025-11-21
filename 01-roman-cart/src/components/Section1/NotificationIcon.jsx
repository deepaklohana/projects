import React from 'react'
import NotificationCounter from './NotificationCounter'

const NotificationIcon = () => {
  return (
    <div className=''>
        
        <div className='absolute right-10 top-3.5 bg-white p-4 rounded-full w-14 h-14'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
            </svg>
            <NotificationCounter/>
        </div>
    </div>
  )
}

export default NotificationIcon

// relative -right-1