import React from 'react'
import CardImg1 from '../../assets/card1.png'
import CardImg2 from '../../assets/card2.png'
import CardImg3 from '../../assets/card3.png'

const Section3Cards = () => {
  return (
    <div className='flex justify-between px-90 pb-20'>
      <img src={CardImg1} alt="" />
      <img src={CardImg2} alt="" />
      <img src={CardImg3} alt="" />
    </div>
  )
}

export default Section3Cards
