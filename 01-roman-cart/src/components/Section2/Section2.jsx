import React from 'react'
import Section2Left from './Section2Left'
import Section2Right from './Section2Right'

const Section2 = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center px-6 gap-20 lg:py-25 max-h-[70vh] max-w-full">
      <Section2Left />
      <Section2Right />
    </div>
  );
};

export default Section2;
