import Image from 'next/image'
import { serviceData } from '../../assets/assets'
import React from 'react'
import { assets } from '../../assets/assets'
import { motion } from 'framer-motion'

const Services = () => {
  return (
        <motion.div
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        transition={{ duration: 1 }}
    id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
    <motion.h4 
        initial={{ y: -20, opacity: 0}}
        whileInView={{ y: 0, opacity: 1}}
        transition={{ duration: 0.3 , delay: 0.5 }}
    className='text-center mb-2 text-lg font-Ovo'>What we offer</motion.h4>
    <motion.h2 
        initial={{ y: -20, opacity: 0}}
        whileInView={{ y: 0, opacity: 1}}
        transition={{ duration: 0.5 , delay: 0.5 }}
    className='text-center text-5xl font-Ovo'>Services</motion.h2>
    <motion.p 
        initial={{  opacity: 0}}
        whileInView={{   opacity: 1}}
        transition={{ duration: 0.5 , delay: 0.7 }}
    className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
    </motion.p>
        <motion.div
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            transition={{ duration: 0.6 , delay: 0.9 }}
        className='grid grid-cols-auto gap-6'>
            {serviceData.map(({ icon, title, description, link  }, index) => (
                <motion.div
                whileHover={{ scale: 1.05}}
                key={index} className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover 
                    hover:-translate-y-1 transition-all duration-500 ease-in-out hover:shadow-black dark:hover:bg-darkHover/50 dark:hover:shadow-white
                    
                    '>
                    <Image src={icon} alt={title} className='w-10 h-10' />
                    <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{title}</h3>
                    <p className='text-sm text-gray-600 leading-5 dark:text-white/80'>{description}</p>
                    <a href={link} className='flex items-center gap-2 text-sm mt-5'>Read More
                        <Image src={assets.right_arrow} alt={title} className='w-4 h-4' />
                    </a>
                </motion.div>
            ))}
        </motion.div>
    </motion.div>
  )
}

export default Services