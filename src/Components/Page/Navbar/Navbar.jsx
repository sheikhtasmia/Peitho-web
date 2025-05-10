import React, { useState } from 'react';
import { WiDirectionRight } from 'react-icons/wi';
import { IoMdClose } from 'react-icons/io';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('#home');

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    const handleClick = (href) => {
        setActiveSection(href);
        closeMenu();
    };

    return (
        <div  className="sticky top-0 z-50 w-full bg-base-100 shadow-2xl">
            <div className="flex items-center justify-between px-6 py-4">
                {/* Logo */}
                <div className="logo">
                    <a href="#home" onClick={() => handleClick('#home')}>
                        <img
                            className="w-[100px]"
                            src="https://i.ibb.co.com/H3c6zbP/download-8.png"
                            alt="Logo"
                        />
                    </a>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden lg:flex gap-12 text-xl lg:text-2xl">
                    <li className="relative font-oswald cursor-pointer">
                        <a
                            href="#home"
                            onClick={() => handleClick('#home')}
                            className={`pb-1 group relative inline-block ${activeSection === '#home' ? 'text-black opacity-100' : 'text-black opacity-75 hover:opacity-100'}`}
                        >
                            Home
                            <span
                                className={`absolute left-0 bottom-0 h-[2px] w-full bg-gradient-to-r from-red-500 to-orange-400 transition-transform duration-300 transform ${activeSection === '#home' ? 'scale-x-100' : 'scale-x-0'} origin-left`}
                            />
                        </a>
                    </li>

                    <li className="relative font-oswald cursor-pointer">
                        <a
                            href="#about"
                            onClick={() => handleClick('#about')}
                            className={`pb-1 group relative inline-block ${activeSection === '#about' ? 'text-black opacity-100' : 'text-black opacity-75 hover:opacity-100'}`}
                        >
                            About
                            <span
                                className={`absolute left-0 bottom-0 h-[2px] w-full bg-gradient-to-r from-red-500 to-orange-400 transition-transform duration-300 transform ${activeSection === '#about' ? 'scale-x-100' : 'scale-x-0'} origin-left`}
                            />
                        </a>
                    </li>

                    <li className="relative font-oswald cursor-pointer">
                        <a
                            href="#service"
                            onClick={() => handleClick('#service')}
                            className={`pb-1 group relative inline-block ${activeSection === '#service' ? 'text-black opacity-100' : 'text-black opacity-75 hover:opacity-100'}`}
                        >
                            Services
                            <span
                                className={`absolute left-0 bottom-0 h-[2px] w-full bg-gradient-to-r from-red-500 to-orange-400 transition-transform duration-300 transform ${activeSection === '#service' ? 'scale-x-100' : 'scale-x-0'} origin-left`}
                            />
                        </a>
                    </li>

                    <li className="relative font-oswald cursor-pointer">
                        <a
                            href="#work"
                            onClick={() => handleClick('#work')}
                            className={`pb-1 group relative inline-block ${activeSection === '#work' ? 'text-black opacity-100' : 'text-black opacity-75 hover:opacity-100'}`}
                        >
                            Work
                            <span
                                className={`absolute left-0 bottom-0 h-[2px] w-full bg-gradient-to-r from-red-500 to-orange-400 transition-transform duration-300 transform ${activeSection === '#work' ? 'scale-x-100' : 'scale-x-0'} origin-left`}
                            />
                        </a>
                    </li>

                    <li className="relative font-oswald cursor-pointer">
                        <a
                            href="#peithology"
                            onClick={() => handleClick('#peithology')}
                            className={`pb-1 group relative inline-block ${activeSection === '#peithology' ? 'text-black opacity-100' : 'text-black opacity-75 hover:opacity-100'}`}
                        >
                            Peithology
                            <span
                                className={`absolute left-0 bottom-0 h-[2px] w-full bg-gradient-to-r from-red-500 to-orange-400 transition-transform duration-300 transform ${activeSection === '#peithology' ? 'scale-x-100' : 'scale-x-0'} origin-left`}
                            />
                        </a>
                    </li>
                </ul>

                {/* Desktop Contact Button */}
               <a href="#contact">
               <button className="hidden lg:flex font-oswald items-center bg-white  text-black text-2xl border-2 border-black rounded-xl p-3 gap-1 font-bold h-[50px] hover:from-red-600 hover:to-orange-500">
                    Contact

                </button>
               </a>

                {/* Mobile Menu Button */}
                <div className="lg:hidden  flex items-center gap-3">
                   <a href="#contact">
                   <button
                        className="font-oswald flex items-center bg-white text-black text-sm border-2 p-2 gap-1  font-bold h-[50px]"
                        onClick={toggleMenu}
                    >
                        Contact

                    </button>
                   </a>
                    <span className="text-3xl text-black cursor-pointer" onClick={toggleMenu}>
                        {menuOpen ? <IoMdClose /> : <FaBars />}
                    </span>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="lg:hidden absolute top-0 left-0 w-full bg-base-100 shadow-xl p-5 z-50">
                    <div className="flex justify-between">
                        <IoMdClose className="text-3xl cursor-pointer" onClick={closeMenu} />
                    </div>
                    <ul className="flex text-xl flex-col gap-6 mt-5">
                        <li className="font-oswald cursor-pointer">
                            <a href="#home" onClick={() => handleClick('#home')}>Home</a>
                        </li>
                        <li className="font-oswald cursor-pointer">
                            <a href="#about" onClick={() => handleClick('#about')}>About Us</a>
                        </li>
                        <li className="font-oswald cursor-pointer">
                            <a href="#service" onClick={() => handleClick('#services')}>Services</a>
                        </li>
                        <li className="font-oswald cursor-pointer">
                            <a href="#work" onClick={() => handleClick('#work')}>Work</a>
                        </li>
                        <li className="font-oswald cursor-pointer">
                            <a href="#peithology" onClick={() => handleClick('#peithology')}>Peithology</a>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
