// import DeployButton from '../components/DeployButton'
// import AuthButton from '../components/AuthButton'
// import ConnectSupabaseSteps from '@/components/ConnectSupabaseSteps'
// import SignUpUserSteps from '@/components/SignUpUserSteps'
// import Header from '@/components/Header'
import { cookies } from 'next/headers';
import GarageSaleLogo from '@/components/GarageSaleLogo';
import Search from '@/components/Search';
import Profile from '@/components/Profile';
import Cart from '@/components/Cart';
import Menu from '@/components/Menu';

export default async function Index() {

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <nav className="sticky top-0 z-30 w-full flex justify-center border-b bg-white border-b-foreground/10 h-20">
        <div className="w-full max-w-screen-2xl flex justify-between items-center p-7 max-sm:p-3">
          <div className="flex">
            <Menu />
            <Search />
          </div>
          <div>
            <GarageSaleLogo />
          </div>
          <div className="flex gap-2">
            <Profile />
            <Cart />
          </div>
        </div>
      </nav>

      {/* <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
          <DeployButton />
          <AuthButton />
        </div>
      </nav>

      <div className="animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-4xl px-3">
        <Header />
        <main className="flex-1 flex flex-col gap-6">
          <h2 className="font-bold text-4xl mb-4">Next steps</h2>
          {isSupabaseConnected ? <SignUpUserSteps /> : <ConnectSupabaseSteps />}
        </main>
      </div>

      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
        <p>
          Powered by{' '}
          <a
            href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
            target="_blank"
            className="font-bold hover:underline"
            rel="noreferrer"
          >
            Supabase
          </a>
        </p>
      </footer> */}
    </div>
  )
}
