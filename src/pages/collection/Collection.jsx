import React from "react";
import Card from "../../components/card/Card";
import { useSelector } from "react-redux";
const Collection = () => {
  const products = useSelector((store) => store.products.product);
  return (
    <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
      {products && products?.map((item) => <Card key={item._id} item={item} />)}
    </div>
  );
};

export default Collection;
