import React from 'react'
import Logo from '../assets/ebay.png'
import Card from './Card'
const CardGridSection = () => {
    const cardData = [{
        img: Logo,
        title: 'List on eBay',
        detail: 'List items on ebay remotely from your RomanCart Control Panel. Manage all of your ebay and website sales from one place.',
        tag: 'Ebay Listing Software'
    },
    {
        
        title: 'Use The RomanCart',
        detail: "RomanCart makes selling simple. Add 'Buy Now' buttons to your site or socials and start accepting payments instantly no hassle, just seamless shopping.",
        tag: 'Ebay Listing Software'
    },
    {
        
        title: 'Stock Management',
        detail: 'Show real-time stock and pricing on your website with ease. RomanCart lets you update product availability, stock, and prices instantly without touching.',
        tag: 'Stock Software'
    },
    {
        
        title: '24/7 Support',
        detail: 'If you have any questions about your cart, or need advice about how to use the marketing or other features you can call or email us 24/7.',
        tag: 'More Information'
    },
    {
        
        title: 'Holiday Booking Software',
        detail: 'Sell holidays with the RomanCart Accommodation Booking Software. Set seasons, prices and holiday types.',
        tag: 'Holiday Booking Software'
    },
    {
        
        title: 'Internet Marketing Tools',
        detail: 'Built in email marketing and affiliate marketing software.',
        tag: 'Marketing Tools'
    },
    {
        
        title: 'Sell Downloads',
        detail: 'Sell downloadable items, sell ebooks, sell music, sell digital products with the RomanCart Shopping Cart Digital Vault. Downloads are delivered automatically...',
        tag: 'Sell Digital Downloads'
    },
    {
        
        title: 'Boost Sales Fast',
        detail: "You can sign up prospects and regularly email them using our 'Prospect Sequence' autoresponder. This is proven to increase your customer base...",
        tag: 'Email Autoresponders'
    },
    {
        
        title: 'Increase Your Sales',
        detail: 'If you are not marketing your website properly right now... get excited! Our marketing tools and advice will double your turnover! Watch a screencast...',
        tag: 'Get More Customers'
    },
    {
        
        title: 'Sell Tickets',
        detail: 'Sell Tickets With The RomanCart Shopping Cart. Tickets can be barcoded which you can scan at the door. Print off attendee lists and create events.',
        tag: 'Sell Ticket on a Website'
    },
    {
        
        title: 'Need a New Website?',
        detail: 'If you need a new responsive website, take a look at our other system - Sellr.',
        tag: 'Ecommerce Web Design'
    },
    {
        
        title: 'Order Fullfilment',
        detail: 'Send your stock to us and we can pick, pack and deliver it with our order fulfilment service.',
        tag: 'Order Fullfilment'
    }
    ]
  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-6 gap-2'>
      {cardData.map((card, index) => (
        <Card key={index} card={card} />
    ))}
    </div>
  )
}

export default CardGridSection
