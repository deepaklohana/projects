import React from 'react'

const SidebarOptionBtn = ({option,className,IconCss}) => {
  return (
    <div>
      <button className={`flex items-center gap-2 w-full ${className}`}>
        <span className={`${IconCss}`}>{option.icon}</span>
        <span >{option.title}</span>
      </button>
    </div>
  )
}

export default SidebarOptionBtn
