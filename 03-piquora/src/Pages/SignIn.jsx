import React from 'react'
import SignInForm from './SignIn/SignInForm'
import ImageSection from './SignIn/ImageSection'

const SignIn = () => {
  return (
    <div className='flex justify-between'>
      <SignInForm/>
      <ImageSection/>
    </div>
  )
}

export default SignIn
