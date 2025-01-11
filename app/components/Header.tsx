import { assets } from '../../assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <div className='w-11/12 max-w-3xl mx-auto text-center h-screen flex flex-col justify-center items-center gap-4'>
            <div>
                <Image src={assets.instafeel} alt="logo" className='rounded-full w-32'></Image>
            </div>
            <h3 className='flex gap-2 text-xl md:text-2xl mb-3 items-center'>Rahul Hospitality
                <Image src={assets.hand_icon} alt="logo" className='rounded-full w-4'></Image>
            </h3>
            <h1 className='text-4xl sm:text-6xl lg:text-[66px] font-Ovo'>
                Hospitality Services based in <span className='text-rose-500'>Navi Mumbai</span>
            </h1>

            <p className='max-w-2xl mx-auto font-Ovo'>
                We are a team of experienced hospitality professionals who are dedicated to providing the highest quality services to our clients.
            </p>
            <div className='flex justify-center mt-4'>
                <a href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'>
                    Contact us
                    <Image src={assets.right_arrow_white} alt="logo" className='w-4' />
                </a>
            </div>
        </div>
    )
}

export default Header