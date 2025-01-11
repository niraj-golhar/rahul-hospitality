import Image from 'next/image'
import { infoList, toolsData } from '../../assets/assets'
import React from 'react'
import { assets } from '../../assets/assets'

const About = () => {
    return (
        <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
            <h4 className='text-center mb-2 text-lg font-Ovo'>Introduction</h4>
            <h2 className='text-center text-5xl font-Ovo'>About Us</h2>
            <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
                <div>
                    <Image src={assets.instafeel} alt="logo" className='w-full rounded-3xl'></Image>
                </div>
                <div className='flex-1'>
                    <p className='mb-10 max-w-2xl mx-auto font-Ovo'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                    </p>
                    <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                        {infoList.map(({ icon, iconDark, title, description }, index) => (
                            <li key={index} className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover 
                    hover:-translate-y-1 transition-all duration-500 ease-in-out hover:shadow-black'>
                                <Image src={icon} alt={title} className='w-7 mt-3'></Image>
                                <h3 className='my-2 font-semibold text-gray-700'>{title}</h3>
                                <p className='text-gray-600 text-sm'>{description}</p>
                            </li>
                        ))}
                    </ul>
                    <h4> Tools we use </h4>
                        <ul>
                            {toolsData.map(({tool , title}, index) => (
                                <li key={index}  >
                                    <Image src={tool} alt={title} className='w-7'></Image>
                                    <p>{title}</p>
                                </li>
                            ))}
                        </ul>
                </div>
            </div>
        </div>
    )
}

export default About