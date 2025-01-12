import { assets } from '../../assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'

const Contact = () => {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
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
        <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[90%_auto]'>
            <h4 className='text-center mb-2 text-lg font-Ovo'>Connect with us</h4>
            <h2 className='text-center text-5xl font-Ovo'>Contact us</h2>
            <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
                I am always open to discuss your project, improve your online presence or help with your business.

            </p>
            <form action="" className='max-w-2xl mx-auto'>
                <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
                    <input
                        className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white'
                        type="text" placeholder='Name' name='name' required />
                    <input
                        className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white'
                        type="email" placeholder='Email' name='email' required />
                </div>
                <textarea
                    className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white'
                    placeholder='Message' rows={5} name='message' required></textarea>
                <button type='submit' className='py-3 px-8 w-max flex items-center justify-between gap-2  bg-black/80 text-white rounded-full mx-auto
                hover:bg-black duration-500' onClick={onSubmit}>Send Now
                    <Image src={assets.right_arrow_white} alt='Send' className='w-4' />
                </button>
                <p className='text-center mt-5'>{result}</p>
            </form>
        </div>
    )
}

export default Contact