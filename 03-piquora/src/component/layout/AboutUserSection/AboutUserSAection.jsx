import React, { useEffect, useState } from 'react'

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

const AboutUserSection = () => {
    const [activeButton,setActiveButton]= useState(0)

    const getButtonStyle = (id) => {
        return id === activeButton 
        ?'text-white bg-[#52C2AB]': 
        'bg-[#52C2AB1A] text-[#52C2AB]';
    }
    const getBarStyle =(id) => {
        return id=== activeButton?
        'w-2/4 bg-[#52C2AB] rounded-full transition-all duration-1000 ease-in-out':
        'w-1/4 bg-[#52C2AB1A] transition-all duration-1000 ease-in-out rounded-full';
    }

    
    useEffect(()=>{
        const interval = setInterval(()=>{
            setActiveButton(prev=>{
                if (prev===0) return 1;
                if (prev===1) return 2;
                return 0;
            })
        },5000)
        return ()=> clearInterval(interval)
    },[])

    return (
    <div className='backdrop-blur-[14px] rounded-xl p-3 bg-white flex flex-col gap-5'>
        <div className='flex gap-2 '>
            <button onClick={()=>setActiveButton(0)} className={`${getButtonStyle(0)} py-1.5 px-2.5 rounded-full `} >About Me</button>
            <button onClick={()=>setActiveButton(1)} className={`${getButtonStyle(1)} py-1.5 px-2.5 rounded-full`}  >Ideal Date</button>
            <button onClick={()=>setActiveButton(2)} className={`${getButtonStyle(2)} py-1.5 px-2.5 rounded-full`} >Perfect Match</button>
        </div>
        <div className='flex flex-col gap-3'>
            <h5 className='text-xl font-semibold text-[#1C1C1C] leading-relaxed'>{data[activeButton][0]}</h5>
            <p className='text-[14px] leading-normal tracking-[-0.01em]'>{data[activeButton][1]}</p>
        </div>
        <div className='flex w-[65px] gap-0.5 h-[5px]'>
            <div className={`${getBarStyle(0)}`} ></div>
            <div className={`${getBarStyle(1)}`}></div>
            <div className={`${getBarStyle(2)}`}></div>
        </div>
    </div>
    )
}

export default AboutUserSection
