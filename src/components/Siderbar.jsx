import React from "react";
import { NavLink } from "react-router-dom";
import { FaRegUser } from "react-icons/fa6";
import { IoWalletOutline } from "react-icons/io5";
import { BsBank, BsQrCodeScan } from "react-icons/bs";
import { TbArrowsTransferDown, TbCash } from "react-icons/tb";
import { MdOutlineDashboard, MdOutlinePhoneAndroid } from "react-icons/md";
import { CiCalculator1, CiReceipt } from "react-icons/ci";
import { VscReferences } from "react-icons/vsc";
import { MdMoney } from "react-icons/md";
import { LuLineChart, LuScrollText } from "react-icons/lu";
import { FaRegCreditCard } from "react-icons/fa";
import { GrAtm } from "react-icons/gr";
import { IoMdCard } from "react-icons/io";

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
      text: <GrAtm size={18} />,
      link: "*",
    },
    {
      head: "Bill payment",
      text: <CiReceipt size={18} />,
      link: "*",
    },
    {
      head: "Referral",
      text: <VscReferences size={18} />,
      link: "*",
    },
    {
      head: "Commission",
      text: <MdMoney size={18} />,
      link: "*",
    },
    {
      head: "Revenue",
      text: <LuLineChart size={18} />,
      link: "*",
    },
    {
      head: "Atm card",
      text: <FaRegCreditCard size={18} />,
      link: "*",
    },
    {
      head: "Payment request",
      text: <TbCash size={18} />,
      link: "*",
    },
    {
      head: "Invoicing",
      text: <LuScrollText size={18} />,
      link: "*",
    },
    {
      head: "Scan and pay",
      text: <BsQrCodeScan size={18} />,
      link: "*",
    },
    {
      head: "Ussd",
      text: <MdOutlinePhoneAndroid size={18} />,
      link: "*",
    },
    {
      head: "Card payment gateway",
      text: <IoMdCard size={18} />,
      link: "*",
    },
    {
      head: "Pos terminal",
      text: <CiCalculator1 size={18} />,
      link: "*",
    },
  ];
  return (
    <div className=" w-full h-full my-[64px]">
      {links.map((link, index) => {
        return (
          <NavLink
            key={index}
            to={link.link}
            className={({ isActive }) =>
              isActive
                ? "  text-[#FF5D2E] rounded  bg-[#FFEFEA] block w-full"
                : " text-[#8C8C8C]"
            }
          >
            <div className="flex gap-3 w-full  items-center px-6  py-3.5">
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
