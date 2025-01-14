import { assets } from '../../assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"
import SVGComponent from './SVGComponent'

const Header = () => {
    return (
        <div className='w-11/12 max-w-3xl mx-auto text-center h-screen flex flex-col justify-center items-center gap-4'>
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
                className=" "
            >
                {/* <Image
                    src={assets.rahul_hospitality2}
                    alt="logo"
                    className="rounded-full w-full block"
                /> */}
                <SVGComponent width={400} height={400} />
            </motion.div>
            <motion.h1 
                initial={{y:-30, opacity: 0}}
                whileInView={{y:0, opacity: 1}}
                transition={{ duration: 0.8 , delay: 0.5 }}
                className='text-4xl sm:text-6xl lg:text-[66px] font-Ovo'>
                Hospitality Services based in <span className='text-rose-500'>Navi Mumbai</span>
            </motion.h1>

            <motion.p
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{ duration: 0.6 , delay: 0.7 }}
                className='max-w-2xl mx-auto font-Ovo'>
                We are a team of experienced hospitality professionals who are dedicated to providing the highest quality services to our clients.
            </motion.p>
            <div className='flex justify-center mt-4'>
                <motion.a 
                    initial={{y:30, opacity: 0}}
                    whileInView={{y:0, opacity: 1}}
                    transition={{ duration: 0.6 , delay: 1 }}
                    href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent'>
                    Contact us
                    <Image src={assets.right_arrow_white} alt="logo" className='w-4' />
                </motion.a>
            </div>
        </div>
    )
}

export default Header