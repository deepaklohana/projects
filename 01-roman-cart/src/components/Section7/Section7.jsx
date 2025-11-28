import React from 'react'
import Section7HeroSection from './Section7HeroSection'
import Section7Card from './Section7Card'

const Section7 = () => {
    const cardData = [
        { 
            plan : 'Free Plan',
            detail : 'For hobbyists and testing',
            price: '$0',
            features: [
                'Up to 10 Products',
                'Secure Checkout',
                'Mobile-Optimized Cart',
                'PayPal & Stripe Integration',
                'RomanCart Branding'
            ],
        },
        {
            plan : 'Starter Plan',
            detail : 'Perfect for launching your first shop',
            price: '$19.99',
            features: [
                'Up to 250 Products',
                'Product Variants & Options',
                'Discount Codes & Coupons',
                'Order Management Dashboard',
                'Custom Email Notifications'
            ],
        },
        {
            plan : 'Business Plan',
            detail : 'For growing and active sellers',
            price: '$39.99',
            features: [
                'Unlimited Products',
                'Google Shopping Integration',
                'Subscription Billing Support',
                'Integrated Email Marketing',
                'CRM & Customer Tags'
            ]
        },
        {
            plan : 'Pro Plan',
            detail : 'For scaling businesses that need it all',
            price: '$59.99',
            features: [
                'Unlimited Products',
                'Hosted Storefront',
                'Multi-User Access',
                'Advanced Analytics & Funnels',
                'Priority Support'
            ]
        }
    ]
  return (
    <div className='lg:py-20 p-6'>
      <div className='flex flex-col items-center justify-center gap-6  w-full '>
      <Section7HeroSection/>
      
    </div>
    <div className="flex  items-center gap-5 md:gap-6 flex-wrap justify-center mt-10 ">
        {cardData.map((card, index) => (
          <Section7Card key={index} card={card} isPrimary={index !== cardData.length-1} />
        ))}
      </div>
    </div>
  )
}

export default Section7
