import React from 'react'
import Logo from '../../assets/logo/piquora.png'
import { IoEyeOffOutline } from 'react-icons/io5'

const SignInForm = () => {
  return (
    <div className='flex flex-col bg-white rounded-xl gap-10 p-5 text-[#1c1c1c] h-full'>
      <div className='flex flex-col gap-2 items-center'>
        <img className='max-w-[178px]' src={Logo} alt="" />
        <h6 className='font-normal text-sm'>Please enter your credentials for sign in to your account!</h6>
      </div>
      <form className='flex flex-col gap-7' action="">
        <div className='flex flex-col gap-3'>
            <div className='flex flex-col gap-5'>
                <div className='flex flex-col font-medium text-sm'>
                    <label htmlFor="">E-mail address <span className='text-[#de6e6e] text-base'>*</span></label>
                    <input className='text-[#1C1C1C66] bg-[#f2f2f2] border border-[#E9E9E9] rounded-full py-3.5 px-[15px]' placeholder='e.g johndoe@gmail.com' type="text" />
                </div>
                <div className='flex flex-col font-medium text-sm'>
                    <label htmlFor="">Password <span className='text-[#de6e6e] text-base'>*</span></label>
                    <div className="relative">
                        <input
                        className="text-[#1C1C1C66] bg-[#f2f2f2] border border-[#E9E9E9] rounded-full py-3.5 px-[15px] w-full pr-10"
                        type="password"
                        placeholder="Enter your password"
                        />
                        <IoEyeOffOutline className="absolute right-4 top-1/2 -translate-y-1/2 text-[#34A48C] cursor-pointer" />
                    </div>
                </div>
            </div>
            <div className='flex justify-between text-sm font-normal'>
                <div className='inline-flex gap-2'>
                    <input className='border-[#D9D9D9] border' type="checkbox" name="" id="" />
                    <h6 className=''>Remember Me</h6>
                </div>
                <div>
                    <h6 className='text-[#34A48C]'>Forgot Password?</h6>
                </div>
            </div>
        </div>
        <div >
            <h6 className='text-[#626D82] text-sm font-normal '>OR</h6>
        </div>
      </form>
    </div>
  )
}

export default SignInForm
