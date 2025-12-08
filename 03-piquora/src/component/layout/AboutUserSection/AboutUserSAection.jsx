import React from 'react'

const AboutUserSection = () => {
    const data =[
        [
            'About Us',
            "Are you an adventurous spirit eager to find a companion for exhilarating escapades across the world? I have a deep love for hiking through stunning terrains, tasting a variety of cuisines, and sharing cozy movie nights filled with joy and laughter. Imagine us exploring uncharted territories, delighting in mouthwatering dishes, and crafting unforgettable experiences that will stay with us forever. Let's seize every moment and make our journey together truly remarkable!"

        ],
        [
            'Ideal Date',
            'I envision the perfect date as a blend of adventure and intimacy. Starting with a scenic sunset hike followed by dinner at a cozy restaurant with authentic international cuisine. We could explore a local art gallery, catch a live music performance, or simply wander through charming streets while sharing stories and laughter. Ending the evening with stargazing or a quiet walk would be the cherry on top.'
        ],
        [
            'Perfect Match',
            'My ideal match is someone who shares a passion for exploration and personal growth. They should be genuine, kind-hearted, and possess a good sense of humor. Someone who enjoys meaningful conversations, respects different cultures, and is willing to try new experiences. A person who values loyalty, maintains a positive outlook on life, and sees challenges as opportunities. Most importantly, someone who believes in building something beautiful together.'
        ]
    ]
    return (
    <div className='backdrop-blur-[14px] rounded-xl p-3 bg-white flex flex-col gap-5'>
        <div className='flex gap-2 '>
            <button className='text-white bg-[#52C2AB] py-1.5 px-2.5 rounded-full'>About Me</button>
            <button className='bg-[#52C2AB1A] text-[#52C2AB] py-1.5 px-2.5 rounded-full'>Ideal Date</button>
            <button className='bg-[#52C2AB1A] text-[#52C2AB] py-1.5 px-2.5 rounded-full'>Perfect Match</button>
        </div>
        <div className='flex flex-col gap-3'>
            <h5 className='text-xl font-semibold text-[#1C1C1C] leading-relaxed'>{data[0][0]}</h5>
            <p className='text-[14px] leading-normal tracking-[-0.01em]'>{data[0][1]}</p>
        </div>
        <div className='flex w-[65px] gap-0.5 h-[5px]'>
            <div className='w-2/4 bg-[#52C2AB] rounded-full'></div>
            <div className='w-1/4 bg-[#52C2AB1A] rounded-full'></div>
            <div className='w-1/4 bg-[#52C2AB1A] rounded-full'></div>
        </div>
    </div>
    )
}

export default AboutUserSection
