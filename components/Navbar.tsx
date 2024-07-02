import GarageSaleLogo from "./GarageSaleLogo";
import Search from "./Search";
import Profile from "./Profile";
import Cart from "./Cart";
import Menu from "./Menu";

export default async function Navbar() {
  return (
    <nav className="sticky top-0 z-30 w-full flex justify-between items-center bg-white h-20 p-7 max-sm:p-5 shadow">
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
    </nav>
  );
}
