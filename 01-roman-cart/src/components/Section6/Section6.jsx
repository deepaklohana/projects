import React from 'react'

import Supermarket from '../../assets/logo/Supermarket.png'
import Branding from '../../assets/logo/Branding.png'
import Services from '../../assets/logo/Services.png'
import Donation from '../../assets/logo/Donation.png'
import Ticket from '../../assets/logo/Ticket.png'

import Section6HeroSection from './Section6HeroSection'
import Section6Card from './Section6Card'
import { text } from '@fortawesome/fontawesome-svg-core'

const Section6 = () => {
    const cardData = [
        {
            logo: Supermarket, 
            alt: 'Supermarket',
            heading: 'Retail Stores',
            text:'Connect your physical store with online inventory and never miss a sale.'

         },
        { 
            logo: Branding, 
            alt: 'Branding',
            heading: 'Digital Products',
            text:'Sell downloads like eBooks, music, and software with secure delivery.'
        },
        { 
            logo: Ticket,
            alt: 'Ticket',
            heading: 'Event Tickets',
            text:'Sell tickets for webinars, concerts, and more — all in one platform.'
         },
        { 
            logo: Services,
            alt: 'Services',
            heading: 'Sub Services',
            text:'Handle recurring billing with ease using our subscription tools.'
         },
        { 
            logo: Donation, 
            alt: 'Donation',
            heading: 'Donations',
            text:'Accept donations and manage fundraising campaigns online.'
        },
    ];
  return (
   <div className="bg-[#DDDDDD2E] flex flex-col items-center justify-center gap-4  w-full py-20">
  
  <div>
    <Section6HeroSection />
  </div>

  <div className="flex items-center gap-2.5 p-6 md:gap-6 flex-wrap justify-center mt-10 ">
    {cardData.map((card, index) => (
      <Section6Card key={index} card={card} />
    ))}
  </div>

</div>
  )
}

export default Section6
