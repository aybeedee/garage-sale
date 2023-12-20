import Navbar from '@/components/Navbar';

export default async function HomePage() {

  return (
    <div className="flex-1 w-full flex flex-col items-center">
      <div className="lg:flex w-full">
        <div className="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
          <div className="max-w-xl">
            <h2 className="text-3xl font-extrabold text-gray-800 lg:text-4xl">Reimagine Your <span className="bg-gradient-to-r from-primaryColor to-secondaryColor inline-block text-transparent bg-clip-text">Style</span> With Our <span className="bg-gradient-to-r from-primaryColor to-secondaryColor inline-block text-transparent bg-clip-text">Quality</span> Thrifts</h2>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 lg:text-base">Discover affordable style with our quality thrifts. Handpicked for uniqueness, our collection lets you reimagine your aesthetic sustainably. From timeless classics to one-of-a-kind finds, make a statement that's uniquely you.</p>
            <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
              <a href="#" className="block px-5 py-2 text-sm font-medium tracking-wider text-center text-white transition-colors duration-300 transform bg-gray-900 rounded-md hover:bg-gray-700">Shop Now</a>
              <a href="#" className="block px-5 py-2 text-sm font-medium tracking-wider text-center text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md lg:mx-4 hover:bg-gray-300">Sign Up</a>
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

      <div className="h-[24rem] w-full bg-white/10 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur" />
      <div className="container px-6 py-10 mx-auto -mt-72 sm:-mt-80 md:-mt-96 z-10">
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">

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

          <div className="flex flex-col p-4 border sm:p-6 rounded-xl border-gray-200 shadow-lg">
            <img className="object-cover w-full rounded-xl aspect-square" src="https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

            <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize">Marsupial Rucksack</h1>

            <div className="flex flex-row justify-between mt-2">
              <p className="text-gray-500">Rs. 3300.00</p>
              <p className="text-primaryColor font-semibold">In Stock</p>
            </div>

            <a href="#" className="mt-4 block px-5 py-2 text-sm font-medium tracking-wider text-center text-white transition-colors duration-300 transform bg-gray-900 rounded-md hover:bg-gray-700">View Item</a>

          </div>

        </div>
      </div>

      <footer className="bg-white w-full border-t border-gray-200 mt-12">
        <div className="container px-6 py-12 mx-auto">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
            <div className="sm:col-span-2">
              <h1 className="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl">Subscribe to get notified of special offers.</h1>

              <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                <input id="email" type="text" className="px-4 py-2 text-gray-700 bg-white border rounded-md border-gray-200 focus:border-primaryColor focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-primaryColor/10" placeholder="Email Address" />

                <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-900 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                  Subscribe
                </button>
              </div>
            </div>

            <div>
              <p className="font-semibold text-gray-800">Email</p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <p className="text-gray-400">Get in touch with us.</p>
                <p className="text-gray-600 transition-colors duration-300 hover:text-primaryColor">contact@garagesale.com</p>
              </div>
            </div>

            <div>
              <p className="font-semibold text-gray-800">Whatsapp</p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <p className="text-gray-400">Mon-Fri from 8am to 5pm.</p>
                <p className="text-gray-600 transition-colors duration-300 hover:text-primaryColor">+92 123 4567890</p>
              </div>
            </div>
          </div>

          <hr className="my-6 border-gray-200 md:my-8" />

          <div className="flex items-center justify-between">
            <p className="text-gray-400 font-extralight">Garage Sale | Pakistan</p>

            <div className="flex -mx-2">
              <p className="text-gray-600 font-normal mx-2">Follow Us</p>
              <div className="mt-auto mx-2 text-gray-600 transition-colors duration-300 hover:text-primaryColor">
                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="currentColor" />
                  <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="currentColor" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="currentColor" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
