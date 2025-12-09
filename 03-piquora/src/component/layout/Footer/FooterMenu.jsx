import React from 'react'

const FooterMenu = ({menu}) => {
  return (
    <div className='flex flex-col gap-2 lg:gap-5  '>
      <div>
        <h3 className='font-medium lg:text-2xl md:text-xl text-base'>{menu.title}</h3>
      </div>
      <div className='flex  flex-col gap-1.5 lg:gap-4'>
  {menu.items.map((item, idx) => (
    <div key={idx}>
      {item.a && (
        <a href={item.href}>
          <h1 className='lg:text-base text-sm font-normal'>{item.a}</h1>
        </a>
      )}
      {item.img && (
        <img src={item.img} alt={item.img} />
      )}
      
    </div>
  ))}
</div>

    </div>
  )
}

export default FooterMenu
