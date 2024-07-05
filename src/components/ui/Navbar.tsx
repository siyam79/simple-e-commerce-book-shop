"use client";

import React, { useState, useEffect } from 'react';
import { MdHeadsetMic, MdMenu, MdClose } from "react-icons/md";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import CategoryDropDown from './CategoryDropDown';

interface NavItem {
    name: string;
    path: string;
}

export default function Navbar() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems: NavItem[] = [
        { name: 'Home', path: '/' },
        { name: 'Shop', path: '/shop' },
        { name: 'Pages', path: '/pages' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className={`bg-[#62AB00] ${isScrolled ? 'fixed top-0 left-0 w-full shadow-lg z-50' : ''}`}>
            <div className='max-w-7xl mx-auto px-1 py-2 flex items-center justify-between'>
                <div className='flex items-center gap-20'>
                    {/* Browse Categories */}
                    <CategoryDropDown />

                    <div className='hidden md:flex items-center gap-4 text-white font-normal'>
                        <button> <MdHeadsetMic size={35} /> </button>
                        <p>Free Support 24/7 <br /> +01-202-555-0181 </p>
                    </div>
                </div>

                {/* Navbar for larger screens */}
                <div className='hidden md:flex items-center space-x-4'>
                    {navItems.map((item) => (
                        <Link key={item.path} href={item.path}>
                            <p className={`px-3 py-2 rounded-md text-sm font-medium 
                            ${pathname === item.path ? 'bg-gray-900 text-white' : 'text-gray-300'}`}>
                                {item.name}
                            </p>
                        </Link>
                    ))}
                </div>

                {/* Hamburger menu for small screens */}
                <div className='flex md:hidden items-center text-white'>
                    <button onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? <MdClose size={35} /> : <MdMenu size={35} />}
                    </button>
                </div>
            </div>

            {/* Mobile menu sidebar */}
            {isMobileMenuOpen && (
                <div className='fixed inset-0 bg-gray-800 bg-opacity-75 z-40'>
                    <div className='fixed top-0 left-0 w-2/4 max-w-xs h-full bg-white p-4 z-50'>
                        <button onClick={toggleMobileMenu} className='text-gray-800'>
                            <MdClose size={35} />
                        </button>
                        <div className='mt-8'>
                            {navItems.map((item) => (
                                <Link key={item.path} href={item.path}>
                                    <p className={`px-3 py-2 rounded-md text-sm font-medium mb-2 
                                    ${pathname === item.path ? 'bg-gray-900 text-white' : 'text-gray-800'}`}
                                    onClick={toggleMobileMenu}>
                                        {item.name}
                                    </p>
                                </Link>
                            ))}

                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
