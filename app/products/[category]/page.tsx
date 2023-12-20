'use client';

import { useState } from 'react';
import { Product, SortType } from '@/utils/types';
import ProductCard from '@/components/ProductCard';

export default function Category({ params }: { params: { category: string } }) {

    const [sortSelection, setSortSelection] = useState("");
    const [openSortSelect, setpenSortSelect] = useState(false);

    const handleSortSelection = (event: any) => {
        setSortSelection(event.target.value);
    };

    const sortingList: SortType[] = [
        {
            type: "Most Recent",
        },
        {
            type: "Price: Low to High",
        },
        {
            type: "Price: High to Low",
        }
    ];

    const productsList: Product[] = [
        {
            name: "Vintage Bolsey C22",
            description: "Elevate your photography with the Vintage Bolsey C22 camera. Timeless design meets reliable functionality for enthusiasts and collectors.",
            price: 4375.00,
            quantity: 3,
            image: "https://images.unsplash.com/photo-1511184059754-e4b5bbbcef75?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            timestamp: 1702890161000,
        },
        {
            name: "Vintage Bolsey C22",
            description: "Elevate your photography with the Vintage Bolsey C22 camera. Timeless design meets reliable functionality for enthusiasts and collectors.",
            price: 4375.00,
            quantity: 3,
            image: "https://images.unsplash.com/photo-1511184059754-e4b5bbbcef75?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            timestamp: 1702890161000,
        },
        {
            name: "Vintage Bolsey C22",
            description: "Elevate your photography with the Vintage Bolsey C22 camera. Timeless design meets reliable functionality for enthusiasts and collectors.",
            price: 4375.00,
            quantity: 3,
            image: "https://images.unsplash.com/photo-1511184059754-e4b5bbbcef75?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            timestamp: 1702890161000,
        },
        {
            name: "Vintage Bolsey C22",
            description: "Elevate your photography with the Vintage Bolsey C22 camera. Timeless design meets reliable functionality for enthusiasts and collectors.",
            price: 4375.00,
            quantity: 3,
            image: "https://images.unsplash.com/photo-1511184059754-e4b5bbbcef75?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            timestamp: 1702890161000,
        },
        {
            name: "Vintage Bolsey C22",
            description: "Elevate your photography with the Vintage Bolsey C22 camera. Timeless design meets reliable functionality for enthusiasts and collectors.",
            price: 4375.00,
            quantity: 3,
            image: "https://images.unsplash.com/photo-1511184059754-e4b5bbbcef75?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            timestamp: 1702890161000,
        },
        {
            name: "Vintage Bolsey C22",
            description: "Elevate your photography with the Vintage Bolsey C22 camera. Timeless design meets reliable functionality for enthusiasts and collectors.",
            price: 4375.00,
            quantity: 3,
            image: "https://images.unsplash.com/photo-1511184059754-e4b5bbbcef75?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            timestamp: 1702890161000,
        },
    ];

    return (
        <div className="flex flex-col w-full px-7 py-10 bg-white/10 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur">

            <div className="flex flex-col gap-5 w-full justify-between items-center sm:flex-row sm:gap-0">
                <h2 className="text-4xl font-extrabold bg-gradient-to-r from-primaryColor to-secondaryColor inline-block text-transparent bg-clip-text capitalize">
                    {params.category}
                </h2>
                <p className="text-gray-500">Showing 37 results</p>
                <div className="relative w-full sm:w-auto">
                    <button type="button"
                        className="w-full text-white bg-primaryColor hover:bg-primaryColor/80 focus:ring-4 focus:outline-none focus:ring-primaryColor/20 font-medium rounded-lg text-base px-5 py-2.5 text-center items-center flex justify-center sm:w-40"
                        onClick={() => {
                            setpenSortSelect(!openSortSelect);
                        }}
                    >
                        Sort By
                        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                        </svg>
                    </button>

                    {openSortSelect && <div className="absolute z-10 bg-white divide-y divide-gray-700 rounded-lg shadow-lg w-full text-center">
                        <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownDefaultButton">
                            {sortingList.map((sortType: SortType, index) => (
                                <li key={index}>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">{sortType.type}</a>
                                </li>
                            ))}
                        </ul>
                    </div>}
                </div>

            </div>


            {/* <div className="w-full md:max-w-[200px] mx-auto">
                <p className="text-lg text-gray-700">Sort By</p>
                <ul>
                    {sortingList.map((sortType: SortType, index) => (
                        <li key={index} className="text-xl font-medium">
                            {sortType.type}
                        </li>
                    ))}
                </ul>
            </div> */}

            <div className="mx-auto min-h-screen mt-6">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
                    {productsList.map((product: Product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>
            </div>

        </div>
    )
}