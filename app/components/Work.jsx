import Image from 'next/image'
import { assets, workData } from '../../assets/assets'
import React from 'react'

const Work = () => {
    return (
        <div id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
            <h4 className='text-center mb-2 text-lg font-Ovo'>Our Portfolio</h4>
            <h2 className='text-center text-5xl font-Ovo'>Our latest projects</h2>
            <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            </p>

            <div className='grid grid-cols-auto gap-5 my-10'>
                {
                    workData.map((project, index) => (
                        <div key={index} style={{ backgroundImage: `url(${project.bgImage})` }}
                            className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group:'
                        >
                            <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                                <div>
                                    <h2 className='font-semibold'>{project.title}</h2>
                                    <p className='text-sm text-gray-700'>{project.description}</p>

                                </div>
                                <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                                    <Image src={project.send_icon} alt={'Send'} className='w-5' />
                                </div>
                            </div>

                            <a href="" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full px-10 y-3 mx-auto
                            hover:bg-lightHover duration-500'>
                                Show More <Image src={assets.right_arrow_bold} alt={'Right Arrow'} className='w-4' />
                            </a>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Work