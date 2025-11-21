import React from 'react'
import Section2Left from './Section2Left'
import Section2Right from './Section2Right'

const Section2 = () => {
  return (
    <div className="flex items-center justify-center gap-4 h-[70vh] w-full">
      <Section2Left />
      <Section2Right />
    </div>
  );
};

export default Section2;
