'use client';

import { useEffect, useRef, useState } from 'react';
import { notFound, usePathname } from 'next/navigation';
import { Product, SortType } from '@/utils/types';
import ProductCard from '@/components/ProductCard';
import { sortingList, categories } from '@/utils/constants';

const sampleProductsList: Product[] = [
    {
        name: "Vintage Bolsey C22-2",
        description: "Elevate your photography with the Vintage Bolsey C22 camera. Timeless design meets reliable functionality for enthusiasts and collectors.",
        price: 4375.00,
        quantity: 3,
        image: "https://images.unsplash.com/photo-1511184059754-e4b5bbbcef75?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        timestamp: 1702890111000,
    },
    {
        name: "Marsupial Rucksack-1",
        description: "Elevate your photography with the Vintage Bolsey C22 camera. Timeless design meets reliable functionality for enthusiasts and collectors.",
        price: 3300.00,
        quantity: 3,
        image: "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        timestamp: 1702890161000,
    },
    {
        name: "Stained Glass Vase-5",
        description: "Elevate your photography with the Vintage Bolsey C22 camera. Timeless design meets reliable functionality for enthusiasts and collectors.",
        price: 1270.00,
        quantity: 3,
        image: "https://images.unsplash.com/photo-1505941625782-5f8710bdd9f3?q=80&w=2047&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        timestamp: 1702870161000,
    },
    {
        name: "Vintage Bolsey C22-3",
        description: "Elevate your photography with the Vintage Bolsey C22 camera. Timeless design meets reliable functionality for enthusiasts and collectors.",
        price: 4375.00,
        quantity: 3,
        image: "https://images.unsplash.com/photo-1511184059754-e4b5bbbcef75?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        timestamp: 1702890061000,
    },
    {
        name: "Vintage Bolsey C22-1",
        description: "Elevate your photography with the Vintage Bolsey C22 camera. Timeless design meets reliable functionality for enthusiasts and collectors.",
        price: 4375.00,
        quantity: 3,
        image: "https://images.unsplash.com/photo-1511184059754-e4b5bbbcef75?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        timestamp: 1702890161000,
    },
    {
        name: "Vintage Bolsey C22-4",
        description: "Elevate your photography with the Vintage Bolsey C22 camera. Timeless design meets reliable functionality for enthusiasts and collectors.",
        price: 4375.00,
        quantity: 3,
        image: "https://images.unsplash.com/photo-1511184059754-e4b5bbbcef75?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        timestamp: 1702880161000,
    },
];

export default function CategoryPage(
    {
        params,
        searchParams
    }:
    {
        params: { category: string };
        searchParams?: { [key: string]: string | string[] | undefined };
    }
) {

    const { sort, q } = searchParams as { [key: string]: string };
    const pathname = usePathname();

    if (
        ((categories.find((category) => category.path === params.category)) === undefined) ||
        (sort && ((sortingList.find((sortType) => sortType.slug === sort)) === undefined))
    ) {

        return notFound();
    }

    const [openSortSelect, setpenSortSelect] = useState(false);
    let productsList: Product[] = [];
    const dropdownRef = useRef<HTMLDivElement>(null);

    // sorting
    if (sort) {

        const selectedSortType = sortingList.find((sortType) => sortType.slug === sort)?.slug;

        if (selectedSortType === "recent-desc") {
            productsList = [...sampleProductsList].sort(
                (product1, product2) => (product1.timestamp < product2.timestamp) ? 1
                : (product1.timestamp > product2.timestamp) ? -1
                : 0
            );
        }

        else if (selectedSortType === "price-asc") {
            productsList = [...sampleProductsList].sort(
                (product1, product2) => (product1.price > product2.price) ? 1
                : (product1.price < product2.price) ? -1
                : 0
            );
        }

        else if (selectedSortType === "price-desc") {
            productsList = [...sampleProductsList].sort(
                (product1, product2) => (product1.price < product2.price) ? 1
                : (product1.price > product2.price) ? -1
                : 0
            );
        }

    } 
    
    else {

        productsList = sampleProductsList;
    }

    // searching
    if (q) {
        productsList = [...productsList].filter(
            (product) => (product.name.toLowerCase().includes(q.toLowerCase()))
        );
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setpenSortSelect(false);
            }
        };

        window.addEventListener('click', handleClickOutside);
        return () => window.removeEventListener('click', handleClickOutside);
    }, []);

    return (

        <div className="flex flex-col w-full px-7 py-10 bg-white/10 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur">

            <div className="flex flex-col gap-5 w-full justify-between items-center sm:flex-row sm:gap-0">
                <h2 className="text-4xl font-extrabold bg-gradient-to-r from-primaryColor to-secondaryColor inline-block text-transparent bg-clip-text capitalize">
                    {params.category}
                </h2>
                <p className="text-gray-500">
                    Showing {productsList.length} results {q && `for "${q}"`}
                    {
                        sort ?
                        <> | {(sortingList.find((sortType) => sortType.slug === sort))?.type}</>
                        :
                        <></>
                    }
                </p>
                <div ref={dropdownRef} className="relative w-full sm:w-auto">
                    <button type="button"
                        className="w-full text-white bg-primaryColor hover:bg-primaryColor/80 focus:ring-4 focus:outline-none focus:ring-primaryColor/20 font-medium rounded-lg text-base px-5 py-2.5 text-center items-center flex justify-center sm:w-36"
                        onClick={() => {
                            setpenSortSelect(!openSortSelect);
                        }}
                    >
                        Sort By
                        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                        </svg>
                    </button>

                    {
                        openSortSelect &&
                        <div className="absolute z-10 bg-white divide-y divide-gray-700 rounded-lg shadow-lg w-full text-center">
                            <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownDefaultButton">
                                {sortingList.map((sortType: SortType, index) => (
                                    <li key={index}>
                                        <a
                                            href={
                                                `${pathname}?${new URLSearchParams({
                                                    ...(q && { q: q }),
                                                    ...(sortType.slug && { sort: sortType.slug })
                                                })
                                                }`
                                            }
                                            className="block px-4 py-2 hover:bg-gray-100"
                                            onClick={() => {
                                                setpenSortSelect(false);
                                            }}
                                        >
                                            {sortType.type}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    }
                </div>
            </div>

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