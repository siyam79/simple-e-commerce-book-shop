import React from 'react'


interface Product {
    title: string;
    brand: string;
    category: string;
    description: string;
    image: string;
    price: number;
}

interface ProductProps {
    product: Product;
}

export default function ProductList({ product }: ProductProps) {
    console.log(product);

    return (
        <div>
            <div className='border border-gray-300 p-4 h-[350px] ' >
                <p>{product.description}</p>
                <img className='w-[200px] h-[200px] mx-auto p-4' src={product.image} alt={product.title} />
                <h2 className='text-center '>{product.title}</h2>
                <p>${product.price}</p>
            </div>
        </div>
    )
}
