

import React, { useState, useEffect, useRef } from 'react';
import { IoMenuOutline } from 'react-icons/io5';
import { RiArrowDropDownLine } from 'react-icons/ri';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface MenuItem {
    title: string;
    href: string;
    subMenuItems?: SubMenuItem[];
}

interface SubMenuItem {
    title: string;
    href: string;
}

const menuItems: MenuItem[] = [
    {
        title: 'Photo Grapy',
        href: '/photoGrapy',
    },
    {
        title: 'Dashboard',
        href: '#',
        subMenuItems: [
            { title: 'Overview', href: '/dashboard/overview' },
            { title: 'My downloads', href: '/dashboard/my_downloads' },
            { title: 'Billing', href: '/dashboard/billing' },
            { title: 'Rewards', href: '/dashboard/rewards' },
        ],
    },
    {
        title: 'Earnings',
        href: '/earnings',
    },
    {
        title: 'Calendars',
        href: '#',
        subMenuItems: [
            { title: 'Overview', href: '/calendars/overview' },
            { title: 'My downloads', href: '/calendars/downloads' },
            { title: 'Billing', href: '/calendars/billing' },
            { title: 'Rewards', href: '/calendars/rewards' },
        ],
    },
    {
        title: 'Sign out',
        href: '/signOut',
    },
];

const CategoryDropDown: React.FC = () => {
    const router = useRouter();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
        setActiveSubMenu(null);
    };

    const toggleSubDropdown = (title: string) => {
        setActiveSubMenu(activeSubMenu === title ? null : title);
    };

    const handleOutsideClick = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsDropdownOpen(false);
            setActiveSubMenu(null);
        }
    };

    //   menu items toggle system
    const handleMenuItemClick = (item: MenuItem) => {
        if (item.subMenuItems) {
            // Toggle submenu visibility
            toggleSubDropdown(item.title);
        } else {
            // Navigate to the link and close dropdown
            router.push(item.href);
            setIsDropdownOpen(false);
            setActiveSubMenu(null);
        }
    };

    //  sub menu items toggle system
    const handleSubMenuItemClick = (subItem: MenuItem) => {
        if (subItem.subMenuItems) {
            // Toggle submenu visibility
            toggleSubDropdown(subItem.title);

        } else {

            router.push(subItem.href);
            setIsDropdownOpen(false);
            setActiveSubMenu(null);
        }
    };


    useEffect(() => {
        if (isDropdownOpen) {
            document.addEventListener('mousedown', handleOutsideClick);
        } else {
            document.removeEventListener('mousedown', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isDropdownOpen]);



    return (
        <div ref={dropdownRef} className="relative">
            {/* Dropdown button */}
            <h4
                className="text-white border border-gray-300 px-2 py-2 text-lg font-medium text-center inline-flex gap-2 items-center  cursor-pointer"
                onClick={toggleDropdown}
            >
                <IoMenuOutline size={25} />
                Dropdown button
                <RiArrowDropDownLine size={30} />
            </h4>

            {/* Dropdown menu */}
            {isDropdownOpen && (
                <div className="z-10 absolute bg-white divide-y divide-gray-100 shadow lg:w-60 md:w-52 w-36 ">
                    <ul className="py-2 text-md text-gray-700">
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                {item.subMenuItems ? (
                                    <>
                                        <button
                                            className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100"
                                            onClick={() => handleMenuItemClick(item)}
                                        >
                                            {item.title}
                                            <RiArrowDropDownLine size={30} />
                                        </button>
                                        {activeSubMenu === item.title && (
                                            <div className="z-10 absolute bg-white divide-y divide-gray-100 shadow lg:w-44 md:w-36 w-36 lg:ml-60 md:ml-52 ml-36">
                                                <ul className="py-2 text-sm text-gray-700">
                                                    {item.subMenuItems.map((subItem, subIndex) => (
                                                        <li key={subIndex}>
                                                            <Link href={subItem.href}>
                                                                <h4 onClick={() => handleSubMenuItemClick(subItem)} className="block px-4 py-2 hover:text-[#62AB00] hover:bg-gray-100">

                                                                    {subItem.title}
                                                                </h4>
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <div
                                        className="block px-4 py-2 hover:text-[#62AB00] hover:bg-gray-100 cursor-pointer"
                                        onClick={() => handleMenuItemClick(item)}
                                    >
                                        {item.title}
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default CategoryDropDown;
