import React from 'react'
import Section5Left from './Section5Left'
import Section5Right from './Section5Right'

const Section5 = () => {
  return (
    <section className="max-w-7xl mx-auto lg:py-35  p-6 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <div className="w-full lg:w-1/2">
          <Section5Left/>
        </div>
        <div className="w-full lg:w-1/2">
          <Section5Right/>
        </div>
      </div>
    </section>
  )
}

export default Section5
