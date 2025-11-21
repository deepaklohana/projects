import React from 'react'
import Logo1 from '../../assets/logo 1.png'
import Logo2 from '../../assets/logo 2.png'
import Logo3 from '../../assets/logo 3.png'
import Logo4 from '../../assets/logo 4.png'
import Logo5 from '../../assets/logo 5.png'
import Logo6 from '../../assets/image 810.png'

const LogoBar = () => {
  return (
    <div className="overflow-hidden py-16 ">
        
      <div className="flex animate-scroll justify-around min-w-max">
        <img src={Logo6} className="grayscale" />
        <img src={Logo1} className="grayscale" />
        <img src={Logo2} className="grayscale" />
        <img src={Logo3} className="grayscale" />
        <img src={Logo4} className="grayscale" />
        <img src={Logo5} className="grayscale" />

        {/* Again copy for infinite loop 
        <img src={Logo6} className="grayscale" />
        <img src={Logo1} className="grayscale" />
        <img src={Logo2} className="grayscale" />
        <img src={Logo3} className="grayscale" />
        <img src={Logo4} className="grayscale" />
        <img src={Logo5} className="grayscale" /> */}

        
      </div>
    </div>
  )
}

export default LogoBar
