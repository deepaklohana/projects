import React from 'react'
import Card from './Card'

const CardGridSection = () => {
    const cardData =[
        {
            num: '01',
            title: 'Increase number of sales',
            detail: 'Lorem ipsum dolor sit amet, adipiscing elit. Etiam dignissim, ante elementum molestie rutrum, neque lacus rutrum lacus.'
        },
        {
            num: '02',
            title: 'Increase Cart Size',
            detail: 'Lorem ipsum dolor sit amet, adipiscing elit. Etiam dignissim, ante elementum molestie rutrum, neque lacus rutrum lacus.'
        },
        {
            num: '03',
            title: 'Increase Customer Retention',
            detail: 'Lorem ipsum dolor sit amet, adipiscing elit. Etiam dignissim, ante elementum molestie rutrum, neque lacus rutrum lacus.'
        },
        {
            num: '04',
            title: 'Sell more products',
            detail: 'Lorem ipsum dolor sit amet, adipiscing elit. Etiam dignissim, ante elementum molestie rutrum, neque lacus rutrum lacus.'
        },
        {
            num: '05',
            title: 'Sell more tickets',
            detail: 'Lorem ipsum dolor sit amet, adipiscing elit. Etiam dignissim, ante elementum molestie rutrum, neque lacus rutrum lacus.'
        },
        {
            num: '06',
            title: 'Sell more digital downloads',
            detail: 'Lorem ipsum dolor sit amet, adipiscing elit. Etiam dignissim, ante elementum molestie rutrum, neque lacus rutrum lacus.'
        },
        {
            num: '07',
            title: 'Sell more accommodation bookings',
            detail: 'Lorem ipsum dolor sit amet, adipiscing elit. Etiam dignissim, ante elementum molestie rutrum, neque lacus rutrum lacus.'
        }
    ]
  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
            {cardData.map((card, index) => (
                <Card key={card.num ?? index} card={card} />
            ))}
    </div>
  )
}

export default CardGridSection
