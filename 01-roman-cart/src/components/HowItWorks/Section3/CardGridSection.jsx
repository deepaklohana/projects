import React from 'react'
import Card from './Card'

const CardGridSection = () => {
  const cardData = [
    {
      title: 'The Best PayPal Shopping Cart',
      detail: 'Easy to set up, accept payments in minutes.',
      btnTitle: 'Paypal Shopping Cart'
    },
    {
      title: 'Shopping Cart Templates',
      detail: 'Choose exactly how your cart looks to your customers.',
      btnTitle: 'Shopping Cart Templates'
    },
    {
      title: 'Best Website Shopping Cart',
      detail: "Simply paste RomanCart 'Add to Basket' buttons or links on to your pages. It works with any website and it's the easiest way to create an online store.",
      btnTitle: 'Add To Basket'
    },
    {
      title: 'Best Responsive Shopping Cart',
      detail: 'The RomanCart Shopping cart has responsive templates which look great on mobiles, tablets, desktops and any other device.',
      btnTitle: 'Responsive Shopping Cart'
    },
    {
      title: 'Accept PayPal, Stripe, SagePay and More',
      detail: 'Integration with all major payment methods. The RomanCart Shopping Cart gives you easy payment gateway integration with your website.',
      btnTitle: 'Payment Gateways'
    },
    {
      title: 'Keep Customers On Your Website',
      detail: 'Your customers stay on your site as they add items to their carts via a drop-down floating cart fixed in the top-right corner of their screens.',
      btnTitle: 'See Example'
    }
  ]

  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
      {cardData.map((card, index) => (
        <Card key={index} card={card} />
      ))}
    </div>
  )
}

export default CardGridSection
