import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Siderbar from "./Siderbar";

const DashboardLayout = () => {
  return (
    <div className=" w-full min-h-screen bg-[#FAFAFB] ">
      <Header />
      <div className=" flex ">
        <div className=" hidden lg:block lg:w-[280px]    fixed left-0 h-screen   ">
          <Siderbar />
        </div>
        <div className=" w-full    py-5  pb-40 lg:ml-[20%]">
          <div className=" w-[95%] mx-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
