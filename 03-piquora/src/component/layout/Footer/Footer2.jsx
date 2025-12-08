import React from 'react'
import Logo from '../../../assets/logo/piquora_white.png'
import Google from '../../../assets/iamges/Google Play.png'
import Apple from '../../../assets/iamges/App Store.png'
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import FooterMenu from './FooterMenu'

const Footer2 = () => {
    const icons = [
        {
            icon: <FaFacebookF size={20}/>,
            link: 'www.facebook.com'
        },
        {
            icon: <FaInstagram size={20}/>,
            link: 'www.instagram.com'
        },
        {
            icon: <FaWhatsapp size={20}/>,
            link: 'www.whatsapp.com'
        }
    ]
    const footerMenu = [
        {
            title: 'About Piquora',
            items: [
                {
                    a: 'About Us',
                    href: '/aboutus'
                },
                {
                    a: 'Careers',
                    href: '/careers'
                },
                {
                    a: 'Help & support',
                    href: '/help&support'
                },
                {
                    a:'Legal',
                    href:'/legal'
                },
                {
                    a:'Success Stories',
                    href:'/successstories'
                }
            ]
        },
        {
            title: 'Get Help',
            items: [
                {
                    a: 'Dating Advice',
                    href: '/datingadvice'
                },
                {
                    a: 'Relationship Advice',
                    href: '/relationshipadive'
                },
                {
                    a: 'Online Dating Awareness',
                    href: '/onlinedatingawareness'
                },
                {
                    a:'Subscriptions',
                    href:'/Subscriptions'
                }
            ]
        },
        {
            title: 'Piquora Dating',
            items: [
                {
                    a: 'Follow Piquora',
                    href: '/followpiquora'
                },
                {
                    a:'Piquora Landing Page',
                    href:'/piquora landing page'
                },
                {
                    img: Google
                },
                {
                    img: Apple
                }
            ]
        }
    ]
  return (
    <div className='bg-[#023668] pb-5 px-6 lg:px-22.5 text-white space-y-5 relative'>
        {/* Top-right radial glow
        <div
        className=" inset-0 
        pointer-events-none rotate-[28.64deg]
        absolute top-[225px] -left-5
        w-lg h-[114px]
        bg-[radial-gradient(circle_at_center,rgba(52,164,140,0.55)_-30%,transparent_70%)] backdrop-blur-[214px]"
        /> */}
        <div className='flex relative z-10 flex-col gap-5 md:gap-0 items-center md:items-start lg:flex-row py-6 lg:py-20 border-b border-white justify-between '>
            <div className='flex flex-col gap-8 max-w-[388px]'>
                <div className='flex items-center md:items-start flex-col gap-3'>
                    <img className='w-31.5' src={Logo} alt="" />
                    <p className='text-[14px] text-center lg:text-start'>While we do not perform criminal background checks on our members or subscribers, your safety and security are our utmost priority. By using our services, you agree to read and adhere to Piquora dating safety guidelines.</p>
                </div>
                <div className='flex justify-center  md:justify-start gap-2'>
                    {icons.map((item, index) => (
                        <a className='p-3 border border-[#FFFFFF4D] bg-[#FFFFFF26] rounded-xl' key={index} href={item.link}>
                            {item.icon}  
                        </a>
                    ))}
                </div>
            </div>
            <div className='grid grid-cols-2  lg:flex lg:flex-row gap-10 lg:gap-25'>
                {
                footerMenu.map((menu,index)=>(
                    <FooterMenu key={index} menu={menu} />
            ))}
            </div>
            
        </div>
        <h6 className='text-center text-sm'>© copyright 2025-2026 Piquora, LLC. All rights reserved.</h6>
    </div>
  )
}

export default Footer2
