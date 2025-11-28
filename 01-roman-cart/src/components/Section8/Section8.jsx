import React from 'react'
import Section8HeroSection from './Section8HeroSection'
import Img1 from '../../assets/image (1).png'
import Img2 from '../../assets/image (2).png'
import Img3 from '../../assets/image (3).png'
import Section8Card from './Section8Card'
import Section8BtnBox from './Section8BtnBox'

const Section8 = () => {
    const cardData = [
        {
            img: Img1,
            date: 'May 21, 2025',
            category: 'Design & UX',
            title: 'How Cart Upgrades Can Boost Your Sales Overnight',
            description: 'Discover the direct link between cart customization and customer conversion. Learn how features like upsell prompts and abandoned cart recovery can lead to measurable revenue growth....'
        },
        {
            img: Img2,
            date: 'May 21, 2025',
            category: 'Design & UX',
            title: 'What Successful Sellers Are Doing Differently',
            description: 'Get inspired by top-performing Romancart users. This post breaks down real-life examples of smart checkout tweaks that increased customer satisfaction and order volume....'
        },
        {
            img: Img3,
            date: 'May 21, 2025',
            category: 'Design & UX',
            title: 'A Beginner’s Guide to Using Romancart’s Powerful Add-ons',
            description: 'New to Romancart or considering taking your store to the next level? This beginner-friendly guide walks you through the most essential cart upgrades available, including features that improve .....'
        },
    ]
  return (
    <div className='flex flex-col items-center justify-center gap-10  w-full py-20'>
      <Section8HeroSection/>
      <div className='flex flex-col lg:flex-row gap-6'>
        {cardData.map((card, index) => (
            <Section8Card key={index} card={card} />
        ))}
      </div>
      <Section8BtnBox/>
    </div>
  )
}

export default Section8
