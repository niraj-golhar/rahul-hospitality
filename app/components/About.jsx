import Image from 'next/image'
import { infoList } from '../../assets/assets'
import React from 'react'
import { assets } from '../../assets/assets'
import { motion } from 'framer-motion'

const About = ({ isDark }) => {
    return (
        <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{ duration: 1 }}
            id='about' className='w-full pb-[12%] pt-[14%] py-10 scroll-mt-20'>
            <motion.h4
                initial={{y:-20, opacity: 0}}
                whileInView={{y:0, opacity: 1}}
                transition={{ duration: 0.5 , delay: 0.3 }}
                className='text-center mb-2 text-lg font-Ovo'>Introduction</motion.h4>
            <motion.h2
                initial={{y:-20, opacity: 0}}
                whileInView={{y:0, opacity: 1}}
                transition={{ duration: 0.6 , delay: 0.5 }}
                className='text-center text-5xl font-Ovo'>About Us</motion.h2>

            <motion.div
                initial={{  opacity: 0}}   
                whileInView={{  opacity: 1}}
                transition={{ duration: 0.8 }}
                className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
                <motion.div
                    initial={{scale: 0.9, opacity: 0}}
                    whileInView={{scale: 1, opacity: 1}}
                    transition={{ duration: 0.6}}
                    className='flex flex-1 justify-center'
                >
                    <Image src={assets.rahul_hospitality} alt="logo" className='w-[70%] lg:w-[40%]'></Image>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0}}
                    whileInView={{ opacity: 1}}
                    transition={{ duration: 0.6 , delay: 0.8 }}
                    className='flex-1'>
                    <p className='mb-10 mx-5 max-w-2xl font-Ovo text-lg text-center lg:text-left'>
                        As 10 Years in Hospitality Industry we are proud to introduce ourself as a leading Hospitality Management Company
                        in India. We are a team of professionals who are dedicated to providing the best services to our clients.
                        We have a team of experts who are well-versed in the field of hospitality management.
                    </p>
                    <motion.ul 
                        initial={{ opacity: 0}}
                        whileInView={{ opacity: 1}}
                        transition={{ duration: 0.1 , delay: 1 }}
                        className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl !m-5'>
                        {infoList.map(({ icon, iconDark, title, description }, index) => (
                            <motion.li 
                                whileInView={{ scale: 1.05}}
                                key={index} className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover 
                    hover:-translate-y-1 transition-all duration-500 ease-in-out hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'>
                                <Image src={ isDark ? iconDark : icon} alt={title} className='w-7 mt-3'></Image>
                                <h3 className='my-2 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                                <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default About