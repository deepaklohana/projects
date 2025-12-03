import React from 'react'
import Navbar from './components/Navbar/Navbar'
import SubFooter from './components/SubFooter/SubFooter'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import { Route, Routes } from 'react-router-dom'
import HowItWorks from './components/HowItWorks/HowItWorks'
import ProductDemo from './components/ProductDemo/ProductDemo'
import PricingPlan from './components/PricingPlan/PricingPlan'
import Resources from './components/Resources/Resources'

const App = () => {
  return (
    <div className='bg-[rgba(221,221,221,0.28)]'>
      
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/howitworks" element={<HowItWorks />} />
        <Route path="/productdemo" element={<ProductDemo />} />
        <Route path="/pricing" element={<PricingPlan />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>

      <SubFooter/>
      <Footer/>
    </div>
  )
}

export default App
