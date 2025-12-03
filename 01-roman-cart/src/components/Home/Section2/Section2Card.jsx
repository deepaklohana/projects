import React from 'react'
import Section2CardBottom from './Section2CardBottom';

const Section2Card = ({ src }) => {
  return (
    <div className="px-1.5 pt-1.5 pb-3.5 rounded-md bg-white flex flex-col gap-2">
      <img src={src} alt="shirt" className="w-full" />
      <Section2CardBottom />
    </div>
  );
};

export default Section2Card;

