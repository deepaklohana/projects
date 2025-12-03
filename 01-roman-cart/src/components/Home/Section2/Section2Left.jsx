import React from 'react'
import Shirt1 from '../../../assets/Shirt img1.png';
import Shirt2 from '../../../assets/Shirt img2.png';
import Shirt3 from '../../../assets/Shirt img3.png';
import Tweet from '../../../assets/tweeter.png'
import Facebook from '../../../assets/fb.png'
import Wordpress from '../../../assets/wordpress.png'
import Instagram from '../../../assets/instagram.png'


import Section2Card from './Section2Card';
import SearchBar from './SearchBar';

const Section2Left = () => {
  const img = [Shirt1, Shirt2, Shirt3];

  return (
    <div className='flex scale-75 lg:scale-100 flex-col items-center gap-8 max-w-[505px] max-h-[316px] relative'>
        <SearchBar/>
        <img className='absolute -left-12.75 -bottom-11 z-0' src={Tweet } alt="" />
        <div className="flex gap-6 justify-center z-5">
            {img.map((item, index) => (
                <Section2Card key={index} src={item} />
            ))}
          
        </div>
        <img className='absolute lg:-left-8 lg:-top-5 -left-14 -top-5 ' src={Instagram} alt="" />
        <img className='absolute top-8 -right-3 z-10' src={Facebook} alt="" />
        <img className='absolute lg:right-28.5 -bottom-7 right-27 z-10' src={Wordpress} alt="" />
    </div>
  );
};

export default Section2Left;