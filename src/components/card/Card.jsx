import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <div>
      <Link
        to={`/products/${item._id}`}
        className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
      >
        <img
          src={item?.image}
          loading="lazy"
          alt=" by Austin Wade"
          className="h-full w-full object-contain object-center transition duration-200 group-hover:scale-110"
        />

        <div className="absolute bottom-2 left-0 flex gap-2">
          <span className="rounded-r-lg bg-red-500 px-3 py-1.5 text-sm font-semibold uppercase tracking-wider text-white">
            -50%
          </span>
          <span className="rounded-lg bg-white px-3 py-1.5 text-sm font-bold uppercase tracking-wider text-gray-800">
            New
          </span>
        </div>
      </Link>

      <div className="flex items-start justify-between gap-2 px-2">
        <div className="flex flex-col">
          <Link
            //  to={}
            className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
          >
            {item?.product_name}
          </Link>
          <span className="text-gray-500">by Fancy Brand</span>
        </div>

        <div className="flex flex-col items-end">
          <span className="font-bold text-gray-600 lg:text-lg">
            ${item.price}
          </span>
          <span className="text-sm text-red-500 line-through">
            ${item.price + item.price / 2}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
