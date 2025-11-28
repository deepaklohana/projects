import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Section1 from './components/Section1/Section1'
import LogoBar from './components/LogoBar/LogoBar'
import Section2 from './components/Section2/Section2'
import Section3 from './components/Section3/Section3'
import Section4 from './components/Section4/Section4'
import Section5 from './components/Section5/Section5'
import Section6 from './components/Section6/Section6'
import Section7 from './components/Section7/Section7'
import Section8 from './components/Section8/Section8'
import SubFooter from './components/SubFooter/SubFooter'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className=' bg-[rgba(221,221,221,0.28)]'>
      <Navbar/>
      <Section1/>
      <LogoBar/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Section7/>
      <Section8/>
      <SubFooter/>
      <Footer/>
      </div>
  )
}

export default App
