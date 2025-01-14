import { assets } from '../../assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
  
      formData.append("access_key", "ddd5be99-7cb9-4067-9afb-12af8f3d7695");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
        id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[90%_auto] dark:bg-none'>
            <motion.h4
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            className='text-center mb-2 text-lg font-Ovo'>Connect with us</motion.h4>
            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            className='text-center text-5xl font-Ovo'>Contact us</motion.h2>
            <motion.p
                initial={{   opacity: 0 }}
                whileInView={{   opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
            className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
                I am always open to discuss your project, improve your online presence or help with your business.
            </motion.p>
            <motion.form
                initial={{   opacity: 0 }}
                whileInView={{  opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
            action="" className='max-w-2xl mx-auto'>
                <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
                    <motion.input
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.1 }}
                        className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90'
                        type="text" placeholder='Name' name='name' required />
                    <motion.input
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                        className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white  dark:bg-darkHover/30 dark:border-white/90'
                        type="email" placeholder='Email' name='email' required />
                </div>
                <motion.textarea
                    initial={{ y:100 , opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.3 }}
                    className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90'
                    placeholder='Message' rows={5} name='message' required></motion.textarea>

                <motion.button
                    whileInView={{ scale: 1.05}}
                    transition={{ duration: 0.3 }}
                    type='submit' className='py-3 px-8 w-max flex items-center justify-between gap-2  bg-black/80 text-white rounded-full mx-auto
                hover:bg-black duration-500 *:
                dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover
                ' onClick={onSubmit}>Send Now
                    <Image src={assets.right_arrow_white} alt='Send' className='w-4' />
                </motion.button>
                <p className='text-center mt-5'>{result}</p>
            </motion.form>
        </motion.div>
    )
}

export default Contact