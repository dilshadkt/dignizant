import React from "react";
import { Link, useLocation } from "react-router-dom";
const SideBar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="w-full mt-10">
      <ul className="w-full text-lg">
        <Link to={"/admin"}>
          <li
            className={`py-4 group hover:bg-gray-300   text-gray-600 font-semibold  w-full flex items-center justify-start pl-[10%] cursor-pointer`}
          >
            <h5 className="ml-4">Products</h5>
          </li>
        </Link>

        <Link to={"/admin/product/gasd"}>
          <li
            className={`py-4 group  hover:bg-gray-300   text-gray-600 font-semibold  w-full flex items-center justify-start pl-[10%] cursor-pointer`}
          >
            <h5 className="ml-4">Orderes </h5>
          </li>
        </Link>
        <Link to={"/admin/add-products"}>
          <li
            className={`py-4 group ${
              currentPath.includes("/admin/events") && `bg-gray-300`
            }  hover:bg-gray-300   text-gray-600 font-semibold  w-full flex items-center justify-start pl-[10%] cursor-pointer`}
          >
            <h5 className="ml-4">Add Products</h5>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default SideBar;
