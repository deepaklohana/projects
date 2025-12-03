import React from 'react'
import Facebook from '../assets/Facebook.png'
import Wordpress from '../assets/Wordpress.png'
import Twitter from '../assets/Twitter.png'
import Card from './Card'


const CardSection = () => {
    const cardData =[
        {
            img: Wordpress,
            title: 'Wordpress Web Shop',
            detail: 'Add RomanCart Storefront links to your Wordpress site and turn your WordPress website into an online store'
        },
        {
            img: Facebook,
            title: 'Facebook Shop',
            detail: 'Add a hosted RomanCart store to your Facebook account and sell your products on Facebook to your friends and visitors'
        },
        {
            img: Twitter  ,
            title: 'Twitter Shop',
            detail: 'Sell your products to your followers by adding RomanCart Add to Cart links to your tweets'
        }
    ]
  return (
    <div className='flex lg:flex-row flex-col lg:gap-6 gap-2'>
      {cardData.map((card, index) => (
        <Card key={card.title ?? index} card={card} />
      ))}
    </div>
  )
}

export default CardSection
