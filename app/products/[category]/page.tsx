import { Product, SortType } from '@/utils/types';
import ProductCard from '@/components/ProductCard';

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

export default async function Category({ params }: { params: { category: string } }) {

    return (
        <div className="flex flex-row w-full px-6 py-10 bg-white/10 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur">

            <div className="w-full md:max-w-[200px] mx-auto">
                <p className="text-lg text-gray-700">Sort By</p>
                <ul>
                    {sortingList.map((sortType: SortType, index) => (
                        <li key={index} className="text-xl font-medium">
                            {sortType.type}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mx-auto min-h-screen">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
                    {productsList.map((product: Product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>
            </div>

        </div>
    )
}