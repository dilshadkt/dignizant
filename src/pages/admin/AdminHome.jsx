import React from "react";
import { useSelector } from "react-redux";
import CollectionCard from "../../components/card/collection/CollectionCard";

const AdminHome = () => {
  const product = useSelector((store) => store.products.product);

  return (
    <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
      {product?.map((item) => (
        <CollectionCard type="admin" productData={item} key={item?._id} />
      ))}
    </div>
  );
};

export default AdminHome;
