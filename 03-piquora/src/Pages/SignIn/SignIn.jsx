import React from 'react'
import SignInForm from './SignInForm'
import ImageSection from './ImageSection'
import Footer from '../../component/layout/Footer/Footer'
import Header from '../../component/layout/Header/Header'

const SignIn = () => {
  return (
    <div>
      <Header/>
      <div className='flex lg:flex-row flex-col p-6  lg:gap-0  justify-between'>
        <div className='max-h-full lg:w-1/2 flex items-center justify-center'>
          <SignInForm/>
        </div>
        <div className=' lg:w-1/2 max-h-full justify-end'>
          <ImageSection/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default SignIn
