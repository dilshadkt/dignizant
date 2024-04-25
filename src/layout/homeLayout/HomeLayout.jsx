import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
const HomeLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default HomeLayout;
