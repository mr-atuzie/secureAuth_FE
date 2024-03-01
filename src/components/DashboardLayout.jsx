import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Siderbar from "./Siderbar";

const DashboardLayout = () => {
  return (
    <div className=" w-full    bg-[#FAFAFB] ">
      <Header />
      <div className=" flex h-full  bg-[#FAFAFB]   ">
        <div className=" w-[20%] block  absolute left-0 bg-[#FAFAFB]   ">
          <Siderbar />
        </div>

        <div className=" w-[80%] block   py-5  lg:ml-[20%] bg-[#FAFAFB] ">
          <div className=" w-[95%] mx-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
