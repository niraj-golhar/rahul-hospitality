"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from 'next/image'
import { assets } from '../../assets/assets'
import BackgroundCarousel from "./BackgroundCarousel"

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <div ref={ref} className="relative h-screen overflow-hidden bg-zinc-900">
      <div className="absolute inset-0 w-full h-full object-cover">
            <BackgroundCarousel />
      </div>
      
      {/* <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.7 }}
      >
        <source
          src="https://xs0ac6w6tbrs4s5r.public.blob.vercel-storage.com/infinte%20video-CWW6SXvhVOtyn4RO85WPZEyPxOOtNO.mp4"
          type="video/mp4"
        />
      </video> */}
      {/* Add a subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/30 via-zinc-900/20 to-zinc-900/70" />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4"
      >
        {/* <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold tracking-tight text-white"
        >
          Rahul Hospitality
          <br />
          <span className="italic text-lg">Great food, Great Mood</span>
        </motion.h1> */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className='w-full flex justify-center'
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        >
          <Image className='w-full lg:w-[30%] bg-[#cfd3d6] p-1' src={assets.rahul_hospitality_new} width={300} height={300} alt='Rahul Hospitality' />
        </motion.div>
         <motion.h1 
                        initial={{y:-30, opacity: 0}}
                        whileInView={{y:0, opacity: 1}}
                        transition={{ duration: 0.8 , delay: 0.5 }}
                        className='text-4xl sm:text-6xl lg:text-[66px] font-Ovo text-white'>
                        Hospitality Services based in <span className='text-rose-500'>Navi Mumbai</span>
                    </motion.h1>
                    <motion.p
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        transition={{ duration: 0.6 , delay: 0.7 }}
                        className='max-w-2xl mx-auto font-Ovo text-white'>
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
      </motion.div>
    </div>
  )
}

