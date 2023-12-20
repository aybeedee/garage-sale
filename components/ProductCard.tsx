import { Product } from '@/utils/types'

export default function ProductCard({ product }: { product: Product }) {

    return (
        <div className="flex flex-col p-4 border sm:p-6 rounded-xl border-gray-200 shadow-lg bg-white">

            <img className="object-cover w-full rounded-xl aspect-square" src={product.image} alt="" />

            <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize">{product.name}</h1>

            <div className="flex flex-row justify-between mt-2">

                <p className="text-gray-500">Rs. {product.price}</p>

                {
                    product.quantity > 0 ?
                        <p className="text-primaryColor font-semibold">In Stock</p>
                        :
                        <p className="text-gray-500 font-semibold">In Stock</p>
                }

            </div>

            <a href="#" className="mt-4 block px-5 py-2 text-sm font-medium tracking-wider text-center text-white transition-colors duration-300 transform bg-gray-900 rounded-md hover:bg-gray-700">View Item</a>

        </div>
    )
}