import {
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 z-[200] blur-effect-theme">
        <nav className="flex items-center justify-between nike-container">
          <div className="flex items-center">
            <img src={logo} alt="logo/img" className="" />
          </div>
          <ul className="flex items-center justify-center gap-2">
            <li className="grid items-center">
              <MagnifyingGlassIcon className="" />
            </li>
            <li className="grid items-center">
              <HeartIcon className="" />
            </li>
            <li className="grid items-center">
              <button
                type="button"
                className="border-none outline-none active:scale-110 transition-all duration-300 relative"
              >
                <ShoppingBagIcon className="" />
                <div className="absolute top-4 right-0 shadow w-4 h-4 text-[0.65rem] leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300">
                  0
                </div>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
