import React, { useState } from 'react'
import { RiMenu4Line, RiCloseFill } from 'react-icons/ri'
import logo from '../assets/logo.png'
import MobileNavbar from './MobileNavbar'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)    

    
  return (
    <>
    {isMenuOpen && <MobileNavbar isOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />}
    <div className='bg-background sticky top-0 z-10'>
        <nav className='max-w-screen-xl mx-auto py-4 px-6'>
            <div className='flex items-center justify-between'>
                <img alt='logo' src={logo} className='h-11 w-auto object-contain' />

                <ul className='hidden md:flex md:gap-14'>
                    <li><Link to="hero" smooth spy offset={-80} className='menu-item'>Home</Link></li>
                    <li><Link to="services" smooth spy offset={-80} className='menu-item'>Services</Link></li>
                    <li><Link to="our-work" smooth spy offset={-80} className='menu-item'>Our Work</Link></li>
                    <li><Link to="testinomials" smooth spy offset={-80} className='menu-item'>Testinomials</Link></li>
                </ul>

                <button className='hidden h-10 bg-primary text-white text-sm px-6 rounded hover:bg-blue-200 hover:text-primary md:block'>Contact Us</button>

                <button onClick={()=>{setIsMenuOpen(true)}}
                className='h-11 w-11 bg-blue-100 text-2xl text-primary flex items-center justify-center rounded md:hidden z-50 '>
                    {isMenuOpen ?  <RiCloseFill /> : <RiMenu4Line />}
                </button>
            </div>
        </nav>
    </div>
    </>
  )
}

export default Navbar