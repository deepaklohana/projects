import React from 'react'
import CardImg1 from '../../assets/Section3Card1.png'
import CardImg2 from '../../assets/Section3Card2.png'
import CardImg3 from '../../assets/Section3Card3.png'
import Section3MainCard from './Section3MainCard'
import Section3SideCard from './Section3SideCard'

const Section3Cards = () => {

  const mainCard =[{
    bgImg : CardImg1,
    num : '01',
    title: 'Shoping Cart',
    descprition: 'Embed "Buy Now" buttons on your website, blog, or social media.'
  }]

  const sideCard =[{
    bgImg : CardImg2,
    num : '02',
    title: 'Button Widgets',
  },
  {
    bgImg : CardImg3,
    num : '03',
    title: 'Full Storefront',
  }]
  return (
    <div className='flex lg:flex-row flex-col items-center gap-5 lg:px-90 lg:pb-30  p-6 pb-15'>
       <div className="">
          {mainCard.map((card, index) => (
            <Section3MainCard key={index} card={card} />
          ))}
       </div>
       <div className='flex lg:flex-row flex-col items-center gap-5 w-full lg:w-auto'>
        {sideCard.map((card,index)=>(
        <Section3SideCard key={index} card={card}/>
       ))}
       </div>
    </div>
  )
}

export default Section3Cards
