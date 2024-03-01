import React from "react";
import { NavLink } from "react-router-dom";
import { FaRegUser } from "react-icons/fa6";
import { IoWalletOutline } from "react-icons/io5";
import { BsBank } from "react-icons/bs";
import { TbArrowsTransferDown } from "react-icons/tb";
import { BiMoneyWithdraw } from "react-icons/bi";
import { MdOutlineDashboard } from "react-icons/md";

const Siderbar = () => {
  const links = [
    {
      head: "Dashboard",
      text: <MdOutlineDashboard size={18} />,
      link: "/dashboard",
    },
    {
      head: "User",
      text: <FaRegUser size={18} />,
      link: "*",
    },
    {
      head: "Deposit",
      text: <IoWalletOutline size={18} />,
      link: "*",
    },
    {
      head: "NIP",
      text: <BsBank />,
      link: "*",
    },
    {
      head: "Transfer",
      text: <TbArrowsTransferDown size={18} />,
      link: "*",
    },
    {
      head: "Withdraw",
      text: <BiMoneyWithdraw size={18} />,
      link: "*",
    },
  ];
  return (
    <div className=" w-full mt-[64px]">
      {links.map((link, index) => {
        return (
          <NavLink
            key={index}
            to={link.link}
            className={({ isActive }) =>
              isActive
                ? "  text-[#FF5D2E]  bg-[#FFEFEA] block w-full"
                : " text-[#8C8C8C]"
            }
          >
            <div className="flex gap-3 w-full  items-center px-6  py-2.5">
              <div className="">{link.text}</div>
              <p className="font-medium   ">{link.head}</p>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
};

export default Siderbar;
