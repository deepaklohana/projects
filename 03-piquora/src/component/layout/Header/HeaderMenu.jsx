import React from 'react'

const HeaderMenu = ({className}) => {
    const menu=[
        {
            a: 'Advance',
            href: '#'
        },
        {
            a: 'Share',
            href: '#'
        },
        {
            a: 'Alerts',
            href: '#'
        },
        {
            a: 'Messages',
            href: '#'
        }
    ]
  return (
    <div className={`${className}`}>
      {menu.map((item,index)=>(
        <a key={index} href={item.href}>{item.a}</a>
      ))}
    </div>
  )
}

export default HeaderMenu
