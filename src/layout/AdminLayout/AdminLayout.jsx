import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../../components/admin/sideBar/SideBar";
const AdminLayout = () => {
  return (
    <div className=" h-full lg:h-screen text-black flex flex-col">
      <div className="flex h-full overflow-hidden">
        <div className=" hidden flex-initial w-[15%] lg:flex items-start justify-center h-full shadow-2xl">
          <SideBar />
        </div>
        <div className="flex-1 bg-gray-200 overflow-scroll h-full p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
