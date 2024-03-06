import React from "react";
import MarketplaceSidebar from "./MarketplaceSidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const MarketplaceLayout = () => {
  return (
    <div className=" w-full  bg-green-900    ">
      <Header />
      <div className=" flex h-full  bg-[#FAFAFB]   ">
        <div className=" hidden w-[20%]  lg:block  static left-0 bg-[#FAFAFB]   ">
          <MarketplaceSidebar />
        </div>

        <div className=" w-full lg:w-[80%]    py-5    ">
          <div className=" w-[90%] mx-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketplaceLayout;
