import React from 'react'

const CustomIcon = ({icon,className}) => {
  return (
      <button className={`${className}`}>
        {icon}
      </button>
  )
}

export default CustomIcon
