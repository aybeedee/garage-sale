import { Category, SortType, Product } from '@/utils/types';

export const categories: Category[] = [
    {
        name: "Kitchenware",
        path: "kitchenware"
    },
    {
        name: "Home Decor",
        path: "home-decor"
    },
    {
        name: "Women",
        path: "women"
    },
    {
        name: "Miscellaneous",
        path: "miscellaneous"
    }
];

export const sortingList: SortType[] = [
    {
        type: "Most Recent",
        slug: "recent-desc",
    },
    {
        type: "Price: Low to High",
        slug: "price-asc",
    },
    {
        type: "Price: High to Low",
        slug: "price-desc",
    }
];

export const sampleProductsList: Product[] = [
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