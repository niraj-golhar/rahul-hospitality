import { assets } from '../../assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = ({ isDark, setIsDark }: { isDark: boolean, setIsDark: (isDark: boolean) => void }) => {
    const [isScrollY, setIsScrollY] = useState(false);
    const sideMenuRef = useRef(null);

    const closeSideMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)';
    }

    const openSideMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)';
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (scrollY > 50) {
                setIsScrollY(true);
            } else {
                setIsScrollY(false);
            }
        });
    }, []);

    return (
        <>
            <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
                <Image src={assets.header_bg_color} className='w-full blur-md' alt="bf"></Image>
            </div>
            <nav className={`flex justify-between items-center w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 z-50  
                ${isScrollY ? 'bg-white bg-opacity-100 text-black' : ''}
                }
            `}>
                <a href="#top" >
                    {/* <h1 className="text-black font-bold text-2xl cursor-pointer dark:text-white">
                        RAHUL  HOSPITALITY<span className="text-[#ff0000] text-4xl">.</span>
                    </h1> */}
                    <Image src={assets.rahul_hospitality_new} alt="logo" width={300} height={300} className={`w-[60%] cursor-pointer p-2    ${isScrollY ? "" : "bg-[#cfd3d6]"}`}></Image>
                </a>

                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 
            ${isScrollY ? "border border-black" : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"}`}>
                    <li>
                        <a href="#top"> Home </a>
                    </li>
                    {/* <li>
                        <a href="#about"> About us </a>
                    </li> */}
                    <li>
                        <a href="#reviews"> Reviews </a>
                    </li>
                    <li>
                        <a href="#ourwork"> Our Work </a>
                    </li>
                    <li>
                        <a href="#contact"> Contact us </a>
                    </li>
                </ul>

                <div className='flex items-center gap-4'>
                    <button>
                        <Image src={(isDark) ? assets.sun_icon : assets.moon_icon} onClick={() => setIsDark(!isDark)} alt="toggle-mode" width={100} height={100} className='w-6'></Image>
                    </button>
                    <a href="#contact" className={`hidden lg:flex items-center gap-3 px-10 py-2.5 border border-black-500  rounded-full ml-4 
                    ${isScrollY ? "text-black border border-black" : ""}
                    `}>
                        Contact
                    </a>
                    <button className='block lg:hidden md:hidden ml-4' onClick={openSideMenu}>
                        <Image src={isDark ? assets.menu_white : assets.menu_black} alt="menu" width={100} height={100} className='w-6'></Image>
                    </button>
                </div>

                {/* Mobile Menu */}
                <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500
            dark:bg-darkHover dark:text-white'>
                    <div className='absolute right-6 top-6' onClick={closeSideMenu}>
                        <Image src={isDark ? assets.close_white : assets.close_black} alt="close" width={100} height={100} className='w-6 cursor-pointer'></Image>
                    </div>
                    <li onClick={closeSideMenu}>
                        <a href="#top"> Home </a>
                    </li>
                    {/* <li onClick={closeSideMenu}>
                        <a href="#about"> About us </a>
                    </li> */}
                    <li onClick={closeSideMenu}>
                        <a href="#reviews"> Reviews </a>
                    </li>
                    <li onClick={closeSideMenu}>
                        <a href="#ourwork"> Our Work </a>
                    </li>
                    <li onClick={closeSideMenu}>
                        <a href="#contact"> Contact us </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar