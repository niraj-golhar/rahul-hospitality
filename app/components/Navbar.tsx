import { assets } from '../../assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = () => {
    const [isScrollY, setIsScrollY] = useState(false);
    const sideMenuRef = useRef(null);

    const openSideMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)';
    }

    const closeSideMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)';
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(scrollY > 50) {
                setIsScrollY(true);
            }else{
                setIsScrollY(false);
            }
        });
    }, []);

    return (
        <>  
            <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
                <Image src={assets.header_bg_color} className='w-full' alt="bf"  ></Image>
            </div>
            <nav className={`flex justify-between items-center w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 z-50 
                ${isScrollY ? 'bg-white bg-opacity-50  backdrop-blur-lg shadow-sm ' : ''}
            `}>
                <a href="#top">
                    <Image src={assets.logo} className='w-28 cursor-pointer mr-14' alt="logo" width={100} height={100}></Image>
                </a>

            <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 
            ${isScrollY ? "" : "bg-white shadow-sm bg-opacity-50"}`}>
                <li>
                    <a href="#top"> Home </a>
                </li>
                <li>
                    <a href="#about"> About us </a>
                </li>
                <li>
                    <a href="#services"> Services </a>
                </li>
                <li>
                    <a href="#mywork"> My Work </a>
                </li>
                <li>
                    <a href="#contact"> Contact us </a>
                </li>
            </ul>

            <div className='flex items-center gap-4'>
                <button>
                    <Image src={assets.moon_icon} alt="toggle-mode" width={100} height={100} className='w-6'></Image>
                </button>
                <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4'>
                    Contact 
                    <Image src={assets.arrow_icon} alt="arrow" width={100} height={100} className='w-3' ></Image>
                </a>
                <button className='block lg:hidden md:hidden ml-4' onClick={openSideMenu}>
                    <Image src={assets.menu_black} alt="menu" width={100} height={100} className='w-6'></Image>
                </button> 
            </div>

            {/* Mobile Menu */}
            <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>
                <div className='absolute right-6 top-6' onClick={closeSideMenu}>
                    <Image src={assets.close_black} alt="close" width={100} height={100} className='w-6 cursor-pointer'></Image> 
                </div>
            <li onClick={openSideMenu}>
                    <a href="#top"> Home </a>
                </li>
                <li onClick={openSideMenu}>
                    <a href="#about"> About us </a>
                </li>
                <li onClick={openSideMenu}>
                    <a href="#services"> Services </a>
                </li>
                <li onClick={openSideMenu}>
                    <a href="#mywork"> My Work </a>
                </li>
                <li onClick={openSideMenu}>
                    <a href="#contact"> Contact us </a>
                </li>
            </ul>
            </nav>
        </>
    )
}

export default Navbar