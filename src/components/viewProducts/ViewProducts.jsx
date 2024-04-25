import React from "react";
import { useSelector } from "react-redux";
import SelectNav from "../Navbar/SelectNav";
import CollectionCard from "../card/collection/CollectionCard";

const ViewProducts = () => {
  const products = useSelector((store) => store.products.product);
  return (
    <>
      <SelectNav />
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
            {products?.map((item) => (
              <CollectionCard key={item._id} productData={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewProducts;
