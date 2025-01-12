import Image from 'next/image'
import { serviceData } from '../../assets/assets'
import React from 'react'
import { assets } from '../../assets/assets'

const Services = () => {
  return (
    <div id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
    <h4 className='text-center mb-2 text-lg font-Ovo'>What we offer</h4>
    <h2 className='text-center text-5xl font-Ovo'>Services</h2>
    <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
        </p>
        <div className='grid grid-cols-auto gap-6'>
            {serviceData.map(({ icon, title, description, link  }, index) => (
                <div key={index} className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover 
                    hover:-translate-y-1 transition-all duration-500 ease-in-out hover:shadow-black'>
                    <Image src={icon} alt={title} className='w-10 h-10' />
                    <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
                    <p className='text-sm text-gray-600 leading-5'>{description}</p>
                    <a href={link} className='flex items-center gap-2 text-sm mt-5'>Read More
                        <Image src={assets.right_arrow} alt={title} className='w-4 h-4' />
                    </a>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Services