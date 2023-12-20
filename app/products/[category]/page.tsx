type SortType = {
    type: string;
}

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

// type Product = {
//     name: string;
//     description: string;
//     price: number;
//     quantity: number;
//     image: string;
//     timestamp: number;
// }

// const products: Product[] = [
//     {
//         name: "Most Recent",
//         description: "",
//         price: 0,
//         quantity: 0,
//     },
//     {
//         type: "Price: Low to High",
//     },
//     {
//         type: "Price: High to Low",
//     }
// ];

export default async function Category({ params }: { params: { category: string } }) {

    return (
        <div className="flex flex-row w-full">
            
            <div className="w-full md:max-w-[125px] mx-auto border border-black">
                {params.category}
                <br/>
                Sort By
                <ul>
                    {sortingList.map((sortType: SortType, index) => (
                        <li key={index}>
                            {sortType.type}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mx-auto min-h-screen border border-black">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
                    <div className="flex flex-col p-4 border sm:p-6 rounded-xl border-gray-200 shadow-lg">
                        <img className="object-cover w-full rounded-xl aspect-square" src="https://images.unsplash.com/photo-1511184059754-e4b5bbbcef75?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

                        <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize">Vintage Bolsey C22</h1>

                        <div className="flex flex-row justify-between mt-2">
                            <p className="text-gray-500">Rs. 4375.00</p>
                            <p className="text-primaryColor font-semibold">In Stock</p>
                        </div>

                        <a href="#" className="mt-4 block px-5 py-2 text-sm font-medium tracking-wider text-center text-white transition-colors duration-300 transform bg-gray-900 rounded-md hover:bg-gray-700">View Item</a>

                    </div>

                    <div className="flex flex-col p-4 border sm:p-6 rounded-xl border-gray-200 shadow-lg">
                        <img className="object-cover w-full rounded-xl aspect-square" src="https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

                        <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize">Marsupial Rucksack</h1>

                        <div className="flex flex-row justify-between mt-2">
                            <p className="text-gray-500">Rs. 3300.00</p>
                            <p className="text-primaryColor font-semibold">In Stock</p>
                        </div>

                        <a href="#" className="mt-4 block px-5 py-2 text-sm font-medium tracking-wider text-center text-white transition-colors duration-300 transform bg-gray-900 rounded-md hover:bg-gray-700">View Item</a>

                    </div>

                    <div className="flex flex-col p-4 border sm:p-6 rounded-xl border-gray-200 shadow-lg">
                        <img className="object-cover w-full rounded-xl aspect-square" src="https://images.unsplash.com/photo-1505941625782-5f8710bdd9f3?q=80&w=2047&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

                        <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize">Stained Glass Flower Vase</h1>

                        <div className="flex flex-row justify-between mt-2">
                            <p className="text-gray-500">Rs. 1270.00</p>
                            <p className="text-primaryColor font-semibold">In Stock</p>
                        </div>

                        <a href="#" className="mt-4 block px-5 py-2 text-sm font-medium tracking-wider text-center text-white transition-colors duration-300 transform bg-gray-900 rounded-md hover:bg-gray-700">View Item</a>

                    </div>

                    <div className="flex flex-col p-4 border sm:p-6 rounded-xl border-gray-200 shadow-lg">
                        <img className="object-cover w-full rounded-xl aspect-square" src="https://images.unsplash.com/photo-1511184059754-e4b5bbbcef75?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

                        <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize">Vintage Bolsey C22</h1>

                        <div className="flex flex-row justify-between mt-2">
                            <p className="text-gray-500">Rs. 4375.00</p>
                            <p className="text-primaryColor font-semibold">In Stock</p>
                        </div>

                        <a href="#" className="mt-4 block px-5 py-2 text-sm font-medium tracking-wider text-center text-white transition-colors duration-300 transform bg-gray-900 rounded-md hover:bg-gray-700">View Item</a>
                    </div>
                </div>
            </div>
        </div>
    )
}