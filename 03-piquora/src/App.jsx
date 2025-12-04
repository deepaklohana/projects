import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Header from './component/layout/Header/Header'
import Footer from './component/layout/Footer/Footer'
import SignIn from './Pages/SignIn/SignIn'
import Deshboard from './Pages/Deshboard/Deshboard'

const App = () => {
  return (
    <div className='bg-[#F4F6FA]'>
      
      
      <Routes>
        <Route path='/' element={ <SignIn />}/>
        <Route path='/deshboard' element={<Deshboard/>}/>
        <Route path='*' element={<h1>Error 404 - Page Not Found</h1>}/>
      </Routes>
    </div>
  )
}

export default App
