import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/utils/types';
import { sampleProductsList } from '@/utils/constants';

export default async function HomePage() {

  return (
    <div className="flex-1 w-full flex flex-col items-center mb-12">
      <div className="lg:flex w-full">
        <div className="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
          <div className="max-w-xl">
            <h2 className="text-3xl font-extrabold text-gray-800 lg:text-4xl">Reimagine Your <span className="bg-gradient-to-r from-primaryColor to-secondaryColor inline-block text-transparent bg-clip-text">Style</span> With Our <span className="bg-gradient-to-r from-primaryColor to-secondaryColor inline-block text-transparent bg-clip-text">Quality</span> Thrifts</h2>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 lg:text-base">Discover affordable style with our quality thrifts. Handpicked for uniqueness, our collection lets you reimagine your aesthetic sustainably. From timeless classics to one-of-a-kind finds, make a statement that's uniquely you.</p>
            <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
              <Link
                href="/products"
                className="block px-6 py-2.5 text-sm font-medium tracking-wider text-center text-white transition-colors duration-300 transform bg-gray-900 rounded-lg focus:outline-none hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80 md:w-auto"
              >
                Shop Now
              </Link>
              <a href="#" className="block px-6 py-2.5 text-sm font-medium tracking-wider text-center text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-lg lg:mx-4 hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-100 focus:ring-opacity-80 md:w-auto">Sign Up</a>
            </div>
          </div>
        </div>
        <div className="w-full h-64 lg:w-1/2 lg:h-auto">
          <div className="w-full h-full bg-cover" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1443884590026-2e4d21aee71c?q=80&w=2043&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)" }}>
            <div className="w-full h-full bg-black opacity-25"></div>
          </div>
        </div>
      </div>
      <div className="h-[28rem] max-sm:h-[23rem] w-full border-t border-gray-200 bg-white/10 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur">
        <div className="container px-6 pt-10 mx-auto">
          <h1 className="text-3xl font-extrabold text-center text-gray-800 lg:text-4xl">Featured Products</h1>
          <div className="flex justify-center mx-auto mt-6">
            <span className="inline-block w-40 h-1 bg-gradient-to-r from-primaryColor to-secondaryColor rounded-full"></span>
            <span className="inline-block w-3 h-1 mx-1 bg-primaryColor rounded-full"></span>
            <span className="inline-block w-1 h-1 bg-primaryColor rounded-full"></span>
          </div>
        </div>
      </div>

      <div className="container px-6 py-10 mx-auto -mt-72 sm:-mt-80 md:-mt-96 z-10">
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
          {sampleProductsList.slice(0, 4).map((product: Product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>

      <div className="h-[24rem] w-full bg-white/10 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur" />
      <div className="container px-6 py-10 mx-auto -mt-72 sm:-mt-80 md:-mt-96 z-10">
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
          {sampleProductsList.slice(6, 10).map((product: Product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
