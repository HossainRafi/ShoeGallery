import React from "react";
import {
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <>
      <header>
        <nav>
          <div>
            <img src={logo} className="" />
          </div>
          <ul>
            <li>
              <MagnifyingGlassIcon />
            </li>
            <li>
              <HeartIcon />
            </li>
            <li>
              <button type="button">
                <ShoppingBagIcon />
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
