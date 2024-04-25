import React from "react";
import insta from "../../assets/svg/social/insta.svg";
import twitter from "../../assets/svg/social/twitter.svg";
import { Link } from "react-router-dom";
const SelectNav = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
      <div className="flex h-12 w-64 divide-x overflow-hidden rounded-lg border">
        <Link
          to="?category=MEN"
          className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
        >
          Men
        </Link>
        <Link
          to="?category=WOMEN"
          className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
        >
          Women
        </Link>
        <Link
          to="?category=KIDS"
          className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
        >
          Teens
        </Link>
      </div>

      <div className="flex items-center justify-center gap-4 lg:justify-start">
        <span className="text-sm font-semibold uppercase tracking-widest text-gray-400 sm:text-base">
          Social
        </span>
        <span className="h-px w-12 bg-gray-200"></span>

        <div className="flex gap-4">
          <Link
            href="#"
            target="_blank"
            className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
          >
            <img src={insta} alt="instagram" />
          </Link>

          <Link
            href="#"
            target="_blank"
            className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
          >
            <img src={twitter} alt="twitter" />
          </Link>
        </div>
      </div>
      {/* <!-- social - end --> */}
    </div>
  );
};

export default SelectNav;
