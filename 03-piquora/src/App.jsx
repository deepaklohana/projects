import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Header from './component/layout/Header/Header'
import Footer from './component/layout/Footer/Footer'
import SignIn from './Pages/SignIn'

const App = () => {
  return (
    <div className='bg-[#F4F6FA]'>
      <Header/>
      
      <Routes>
        <Route path='/' element={<SignIn />}/>
        <Route path='*' element={<h1>Error 404 - Page Not Found</h1>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
