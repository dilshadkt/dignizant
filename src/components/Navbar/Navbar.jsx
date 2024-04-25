import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

import whichlist from "../../assets/svg/which.svg";
import user from "../../assets/svg/user.svg";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Cart from "../cart/Cart";
import Profile from "../profile/Profile";
const Navbar = () => {
  const location = useLocation();
  const currentLocation = location.pathname;
  const cart = useSelector((store) => store.cart.cart);
  return (
    <>
      <header className="mb-8 border-b">
        <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-4 md:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl"
            aria-label="logo"
          >
            LOGO
          </Link>

          <nav className="hidden gap-12 lg:flex 2xl:ml-16">
            <Link
              to="/"
              className={`text-lg font-semibold ${
                currentLocation === "/" && `text-indigo-500`
              } `}
            >
              Home
            </Link>
            <Link
              to="products/collections"
              className={`text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 ${
                currentLocation.includes("collections") && `text-indigo-700`
              }`}
            >
              Collections
            </Link>
            <Link
              to="/sale"
              className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
            >
              Men
            </Link>
            <Link
              to="/about"
              className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
            >
              Women
            </Link>
          </nav>

          <div className="flex divide-x border-r sm:border-l">
            <Link
              to="#"
              className="hidden h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:flex sm:h-20 sm:w-20 md:h-24 md:w-24"
            >
              <img src={whichlist} alt="whishlist" width={30} />

              <span className="hidden text-xs font-semibold text-gray-500 sm:block">
                Wishlist
              </span>
            </Link>

            <label
              htmlFor="ProfileDrawer"
              className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:h-20 sm:w-20 md:h-24 md:w-24"
            >
              <img src={user} alt="user" width={30} />

              <span className="hidden text-xs font-semibold text-gray-500 sm:block">
                Account
              </span>
            </label>

            <label
              htmlFor="CartDrawer"
              className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:h-20 sm:w-20 md:h-24 md:w-24"
            >
              <div className=" relative ">
                {cart.length !== 0 && (
                  <div className="absolute w-7 h-7 -top-4 -right-4 flex items-center justify-center rounded-full  bg-red-500 text-white">
                    {cart.length}
                  </div>
                )}
                <ShoppingCartIcon />
              </div>
              <span className="hidden text-xs font-semibold text-gray-500 sm:block">
                Cart
              </span>
            </label>
          </div>
        </div>
      </header>
      <Cart />
      <Profile />
    </>
  );
};

export default Navbar;
