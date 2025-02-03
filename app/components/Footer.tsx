import { assets } from '../../assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Footer = ({ isDark }) => {
    return (
        <div className='mt-20'>
            <div className="text-center">
                <a href="#top">
                    <h1 className="text-black font-bold text-2xl cursor-pointer dark:text-white">
                        RAHUL  HOSPITALITY<span className="text-[#ff0000] text-4xl">.</span>
                    </h1>
                </a>
                <div className='w-max mx-auto flex gap-2 justify-center items-center'>
                    <Image src={isDark ? assets.mail_icon_dark : assets.mail_icon} alt='Logo' className='w-4' />
                    info@rahulhospitality.com
                </div>
            </div>
            <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
                <p className='text-center text-sm'>Copyright © 2025 Rahul Hospitality. All rights reserved.</p>
                <ul className='flex justify-center items-center gap-10 sm:mt-0'>
                    <li>
                        <a href="">
                            Instagram
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Facebook
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer