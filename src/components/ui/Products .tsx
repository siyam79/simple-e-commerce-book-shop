"use client";
import React, { useEffect, useState } from 'react';
import ProductList from './ProductList';
import { MdArrowDropDown } from "react-icons/md";
import { ProductData } from '@/type/type';


const categoryName = [
    { id: "All", label: "All" },
    { id: "Electronics", label: "Electronics" },
    { id: "Home Appliances", label: "Home Appliances" },
    { id: "Fashion", label: "Fashion" },
];

export default function Products() {
    const [products, setProducts] = useState<ProductData[]>([]);
    const [activeProduct, setActiveProduct] = useState<string>('All');
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

    const filteredProducts = activeProduct === 'All'
        ? products
        : products.filter(product => product.category === activeProduct);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/api/products');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data: ProductData[] = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Failed to fetch products:', error);
            }
        };
        fetchProducts();
    }, []);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleCategoryClick = (category: string) => {
        setActiveProduct(category);
        setDropdownOpen(false);
    };

    return (
        <div>
            

            {/* Dropdown for small devices */}
            <div className='lg:hidden relative w-full px-2 mx-auto my-6'>
                <button
                    onClick={toggleDropdown}
                    className='flex items-center justify-between w-full px-4 py-2 bg-gray-200 rounded-md text-base font-medium focus:outline-none'>
                    <span>{categoryName.find(category => category.id === activeProduct)?.label}</span>
                    <MdArrowDropDown size={24} />
                </button>
                {dropdownOpen && (
                    <div className='absolute left-0 w-full mt-2 bg-white border rounded-md shadow-lg z-10'>
                        {categoryName.map(category => (
                            <div
                                key={category.id}
                                onClick={() => handleCategoryClick(category.id)}
                                className={`px-4 py-2 cursor-pointer ${activeProduct === category.id ? 'bg-gray-100' : ''}`}>
                                {category.label}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Tabs for larger devices */}
            <div className="hidden lg:flex space-x-1 my-6 border-2 border-gray-300 w-1/2 mx-auto justify-center">
                {categoryName.map((category , i) => (
                    <div
                        key={i}
                        onClick={() => setActiveProduct(category.id)}
                        className={`${activeProduct === category.id ? "" : "hover:text-[#91C96F]"}
                        relative rounded-full px-10 py-2 text-base font-medium flex items-center justify-center transition focus-visible:outline-2`}
                        style={{ WebkitTapHighlightColor: "transparent" }}
                    >
                        {activeProduct === category.id && (
                            <span
                                className="absolute inset-0 z-10 border-[#62AB00] border-2"
                            />
                        )}
                        <p className="relative z-20 text-md">{category.label}</p>
                    </div>
                ))}
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
                {filteredProducts.map((product , i) => (
                    <ProductList key={i} product={product} />
                ))}
            </div>
        </div>
    );
}
