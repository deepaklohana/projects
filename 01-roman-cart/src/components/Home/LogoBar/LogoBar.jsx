import React from 'react'
import Logo1 from '../../../assets/logo 1.png'
import Logo2 from '../../../assets/logo 2.png'
import Logo3 from '../../../assets/logo 3.png'
import Logo4 from '../../../assets/logo 4.png'
import Logo5 from '../../../assets/logo 5.png'
import Logo6 from '../../../assets/image 810.png'

const LogoBar = () => {
  return (
    <div className=''>
      <div className="flex justify-center items-center">
        <div className="slider lg:mb-0 w-full bg-zinc-100 overflow-hidden py-10 lg:p-16">
          <div className="slider-track slider-animation flex gap-16 lg:scale-100 scale-70">
            <div className="slide">
              <img src={Logo1} alt="logo1" className="h-16 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-200" />
            </div>
            <div className="slide">
              <img src={Logo2} alt="logo2" className="h-16 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-200" />
            </div>
            <div className="slide">
              <img src={Logo3} alt="logo3" className="h-16 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-200" />
            </div>
            <div className="slide">
              <img src={Logo4} alt="logo4" className="h-16 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-200" />
            </div>
            <div className="slide">
              <img src={Logo5} alt="logo5" className="h-16 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-200" />
            </div>
            <div className="slide">
              <img src={Logo6} alt="logo6" className="h-16 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-200" />
            </div>
            <div className="slide">
              <img src={Logo1} alt="logo1-2" className="h-16 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-200" />
            </div>
            <div className="slide">
              <img src={Logo2} alt="logo2-2" className="h-16 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-200" />
            </div>
            <div className="slide">
              <img src={Logo3} alt="logo3-2" className="h-16 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-200" />
            </div>
            <div className="slide">
              <img src={Logo4} alt="logo4-2" className="h-16 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-200" />
            </div>
            <div className="slide">
              <img src={Logo5} alt="logo5-2" className="h-16 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-200" />
            </div>
            <div className="slide">
              <img src={Logo6} alt="logo6-2" className="h-16 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-200" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LogoBar
