// src/app/api/products/route.ts

import { NextResponse } from 'next/server';

const products = [
    {
        "title": "Laptop Pro",
        "brand": "PCMaster",
        "category": "Electronics",
        "description": "High-performance laptop for professional use.",
        "image": "https://img.freepik.com/free-vector/abstract-business-cover_1201-951.jpg?w=740&t=st=1720074881~exp=1720075481~hmac=710bdb93052305d845358e71b677be939098ddcd347793d30cc29b0cf416d9a8",
        "price": 1299.99
    },
    {
        "title": "Coffee Maker Deluxe",
        "brand": "HomeTech",
        "category": "Home Appliances",
        "description": "Automatic coffee maker with multiple brewing options.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfmTUhJmX734tkBuWGtFVTrMN99Z1k5sRc3Q&s",
        "price": 89.99
    },
    {
        "title": "Designer Watch",
        "brand": "FashionTime",
        "category": "Fashion",
        "description": "Elegant watch with a stylish design.",
        "image": "https://media.istockphoto.com/id/1290063471/photo/blue-book-stack.jpg?s=612x612&w=0&k=20&c=eWbuMgL99ve093Duiv7olGOhBAfUzq7tOBN73ld0a7M=",
        "price": 299.99
    },
    
    {
        "title": "Laptop Pro",
        "brand": "PCMaster",
        "category": "Electronics",
        "description": "High-performance laptop for professional use.",
        "image": "https://img.freepik.com/free-vector/abstract-business-cover_1201-951.jpg?w=740&t=st=1720074881~exp=1720075481~hmac=710bdb93052305d845358e71b677be939098ddcd347793d30cc29b0cf416d9a8",
        "price": 1299.99
    },
    {
        "title": "Coffee Maker Deluxe",
        "brand": "HomeTech",
        "category": "Home Appliances",
        "description": "Automatic coffee maker with multiple brewing options.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfmTUhJmX734tkBuWGtFVTrMN99Z1k5sRc3Q&s",
        "price": 89.99
    },
    {
        "title": "Designer Watch",
        "brand": "FashionTime",
        "category": "Fashion",
        "description": "Elegant watch with a stylish design.",
        "image": "https://media.istockphoto.com/id/1290063471/photo/blue-book-stack.jpg?s=612x612&w=0&k=20&c=eWbuMgL99ve093Duiv7olGOhBAfUzq7tOBN73ld0a7M=",
        "price": 299.99
    },
    {
        "title": "Designer Watch",
        "brand": "FashionTime",
        "category": "Fashion",
        "description": "Elegant watch with a stylish design.",
        "image": "https://media.istockphoto.com/id/1290063471/photo/blue-book-stack.jpg?s=612x612&w=0&k=20&c=eWbuMgL99ve093Duiv7olGOhBAfUzq7tOBN73ld0a7M=",
        "price": 299.99
    },
    
    {
        "title": "Laptop Pro",
        "brand": "PCMaster",
        "category": "Electronics",
        "description": "High-performance laptop for professional use.",
        "image": "https://img.freepik.com/free-vector/abstract-business-cover_1201-951.jpg?w=740&t=st=1720074881~exp=1720075481~hmac=710bdb93052305d845358e71b677be939098ddcd347793d30cc29b0cf416d9a8",
        "price": 1299.99
    },
    {
        "title": "Coffee Maker Deluxe",
        "brand": "HomeTech",
        "category": "Home Appliances",
        "description": "Automatic coffee maker with multiple brewing options.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfmTUhJmX734tkBuWGtFVTrMN99Z1k5sRc3Q&s",
        "price": 89.99
    },
    {
        "title": "Designer Watch",
        "brand": "FashionTime",
        "category": "Fashion",
        "description": "Elegant watch with a stylish design.",
        "image": "https://media.istockphoto.com/id/1290063471/photo/blue-book-stack.jpg?s=612x612&w=0&k=20&c=eWbuMgL99ve093Duiv7olGOhBAfUzq7tOBN73ld0a7M=",
        "price": 299.99
    }
]
    ;

export async function GET() {
    return NextResponse.json(products);
}
