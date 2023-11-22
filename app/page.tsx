import Navbar from '@/components/Navbar';

export default async function HomePage() {

  return (
    <div className="flex-1 w-full flex flex-col items-center">
      <div className="lg:flex w-full">
        <div className="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold text-gray-800 lg:text-4xl">Build Your New <span className="text-blue-600 dark:text-blue-400">Idea</span></h2>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 lg:text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cum cupiditate ducimus, fugit harum id necessitatibus odio quam quasi, quibusdam rem tempora voluptates.</p>
            <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
              <a href="#" className="block px-5 py-2 text-sm font-medium tracking-wider text-center text-white transition-colors duration-300 transform bg-gray-900 rounded-md hover:bg-gray-700">Get Started</a>
              <a href="#" className="block px-5 py-2 text-sm font-medium tracking-wider text-center text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md lg:mx-4 hover:bg-gray-300">Learn More</a>
            </div>
          </div>
        </div>
        <div className="w-full h-64 lg:w-1/2 lg:h-auto">
          <div className="w-full h-full bg-cover" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1508394522741-82ac9c15ba69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=748&q=80)" }}>
            <div className="w-full h-full bg-black opacity-25"></div>
          </div>
        </div>
      </div>
      <div className="h-[720px] bg-slate-700 w-full text-white">
        first test div
      </div>
      <div className="h-[720px] bg-slate-600 w-full text-white">
        second test div
      </div>
      <div className="h-[720px] bg-slate-500 w-full text-white">
        third test div
      </div>
    </div>
  )
}
