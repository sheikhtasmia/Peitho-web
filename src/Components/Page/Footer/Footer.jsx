import React from 'react';
import { Facebook, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="relative z-10 bg-white/60 backdrop-blur-md border-t border-gray-200 shadow-inner px-6 py-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

                {/* Logo + Tagline */}
                <div className="flex flex-col items-start gap-3">
                    <img src="https://i.ibb.co.com/H3c6zbP/download-8.png" alt="Peithology Logo" className="h-14 w-[50px]" />
                    <p className="text-sm text-gray-600 font-light italic">
                        Crafted in the spirit of <span className="text-gray-800 font-medium">Peitho</span>.
                    </p>
                </div>

                {/* Navigation Links */}
                <div className="flex justify-center">
                    <ul className="flex flex-wrap gap-5 text-sm font-medium text-gray-600">
                        {['Home', 'About', 'Services', 'Work', 'Peithology', 'Contact'].map(id => (
                            <li key={id}>
                                <a
                                    href={`#${id.toLowerCase()}`}
                                    className="transition hover:text-indigo-600 hover:underline scroll-smooth"
                                >
                                    {id}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Social Media Icons */}
                <div className="flex md:justify-end gap-4">
                    <a href="https://www.facebook.com/peithology" aria-label="Facebook" className="text-gray-500 hover:text-indigo-600 transition" target="_blank" rel="noopener noreferrer">
                        <Facebook className="w-5 h-5" />
                    </a>
                    <a href="https://www.linkedin.com/company/107271127" aria-label="LinkedIn" className="text-gray-500 hover:text-indigo-600 transition" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="https://www.instagram.com/peitho25/" aria-label="Instagram" className="text-gray-500 hover:text-indigo-600 transition" target="_blank" rel="noopener noreferrer">
                        <Instagram className="w-5 h-5" />
                    </a>
                </div>
            </div>

            {/* Bottom copyright */}
            <div className="mt-10 pt-6 border-t border-gray-100 text-center text-xs text-gray-500">
                &copy; {new Date().getFullYear()} Peithology. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;

