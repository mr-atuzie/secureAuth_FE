import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Header from "./Header";
import Siderbar from "./Siderbar";
import { links } from "../data";

const DashboardLayout = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className=" w-full  bg-[#FAFAFB]    ">
      <Header menu={menu} setMenu={setMenu} />
      <div className=" flex h-full  bg-[#FAFAFB]   ">
        <div className=" hidden w-[20%]  lg:block  static left-0 bg-[#FAFAFB]   ">
          <Siderbar />
        </div>

        <div className=" w-full lg:w-[80%]    py-5    ">
          <div className=" w-[90%] min-h-screen mx-auto">
            <Outlet />
          </div>
        </div>
      </div>
      {menu && (
        <div className="  min-h-screen w-full fixed top-0 left-0 bg-black/30 lg:hidden">
          <div className=" py-10  w-[70%] bg-[#FAFAFB] ">
            <div className=" w-full h-full lg:my-[70px]">
              {links.map((link, index) => {
                return (
                  <NavLink
                    key={index}
                    to={link.link}
                    className={({ isActive }) =>
                      isActive
                        ? "  text-[#FF5D2E] rounded font-semibold  bg-[#FFEFEA] block w-full"
                        : " text-[#8C8C8C]"
                    }
                  >
                    <div
                      onClick={() => setMenu(false)}
                      className="flex gap-3 w-full  items-center px-6  py-3"
                    >
                      <div className="  ">{link.text}</div>
                      <p className="font-medium text-[13px]  font2  ">
                        {link.head}
                      </p>
                    </div>
                  </NavLink>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardLayout;
