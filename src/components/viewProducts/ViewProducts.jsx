import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SelectNav from "../Navbar/SelectNav";
import CollectionCard from "../card/collection/CollectionCard";
import { useLocation } from "react-router-dom";

const ViewProducts = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category") || "MEN";
  const products = useSelector((store) => store.products.product);
  const [filtered, setFiltered] = useState(products);

  useEffect(() => {
    const filterdByCategory = products.filter(
      (item) => item?.category?.toUpperCase() === category
    );
    setFiltered(filterdByCategory);
  }, [category, products]);

  return (
    <>
      <SelectNav />
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
            {filtered?.map((item) => (
              <CollectionCard key={item._id} productData={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewProducts;
