import React from "react";
import { Link } from "react-router-dom";

const CollectionCard = ({ productData }) => {
  return (
    <div>
      <Link
        to={`/products/${productData._id}`}
        className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg"
      >
        <img
          src={productData?.image}
          loading="lazy"
          alt=" by Austin Wade"
          className="absolute inset-0 h-full w-full object-contain object-center transition duration-200 group-hover:scale-110"
        />

        <div className="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
          <span className="text-gray-500">{productData?.category}</span>
          <span className="text-lg font-bold text-gray-800 lg:text-xl">
            {productData?.product_name}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default CollectionCard;
