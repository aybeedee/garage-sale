import Navbar from '@/components/Navbar';

export default async function HomePage() {

  return (
    <div className="flex-1 w-full flex flex-col items-center">
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
