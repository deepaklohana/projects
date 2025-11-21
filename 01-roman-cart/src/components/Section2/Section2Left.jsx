import React from 'react'
import Shirt1 from '../../assets/Shirt img1.png';
import Shirt2 from '../../assets/Shirt img2.png';
import Shirt3 from '../../assets/Shirt img3.png';
import Tweet from '../../assets/tweeter.png'
import Facebook from '../../assets/fb.png'
import Wordpress from '../../assets/wordpress.png'
import Instagram from '../../assets/instagram.png'


import Section2Card from './Section2Card';
import SearchBar from './SearchBar';

const Section2Left = () => {
  const img = [Shirt1, Shirt2, Shirt3];

  return (
    <div className='flex flex-col items-center gap-8 w-[505px] h-[316px] relative'>
        <SearchBar/>
        <img className='absolute -left-4.75 -bottom-2 z-0' src={Tweet } alt="" />
        <div className="flex gap-6 justify-center z-5">
            {img.map((item, index) => (
                <Section2Card key={index} src={item} />
            ))}
          
        </div>
        <img className='absolute left-2 -top-5 ' src={Instagram} alt="" />
        <img className='absolute top-8 right-0 z-10' src={Facebook} alt="" />
        <img className='absolute right-36 bottom-2.5 z-10' src={Wordpress} alt="" />
    </div>
  );
};

export default Section2Left;