import React from "react";
import { NavLink } from "react-router-dom";
import { FaRegUser } from "react-icons/fa6";
import { IoWalletOutline } from "react-icons/io5";
import { BsBank, BsCalculator, BsQrCodeScan } from "react-icons/bs";
import { TbArrowsTransferDown, TbCash } from "react-icons/tb";
import { MdOutlineDashboard, MdOutlinePhoneAndroid } from "react-icons/md";
import { CiReceipt } from "react-icons/ci";
import { VscReferences } from "react-icons/vsc";
import { MdMoney } from "react-icons/md";
import { LuLineChart, LuScrollText } from "react-icons/lu";
import { FaRegCreditCard } from "react-icons/fa";
import { GrAtm } from "react-icons/gr";
import { IoMdCard } from "react-icons/io";

const iconSize = 15;

const Siderbar = ({ setMenu }) => {
  const links = [
    {
      head: "Dashboard",
      text: <MdOutlineDashboard size={iconSize} />,
      link: "/dashboard/main",
    },
    {
      head: "User",
      text: <FaRegUser size={iconSize} />,
      link: "/dashboard/user",
    },
    {
      head: "Deposit",
      text: <IoWalletOutline size={iconSize} />,
      link: "/dashboard/deposit",
    },
    {
      head: "NIP",
      text: <BsBank size={iconSize} />,
      link: "/dashboard/nip",
    },
    {
      head: "Transfer",
      text: <TbArrowsTransferDown size={iconSize} />,
      link: "/dashboard/transfer",
    },
    {
      head: "Withdraw",
      text: <GrAtm size={iconSize} />,
      link: "/dashboard/withdraw",
    },
    {
      head: "Bill payment",
      text: <CiReceipt size={iconSize} />,
      link: "/dashboard/bill-payment",
    },
    {
      head: "Referral",
      text: <VscReferences size={iconSize} />,
      link: "*",
    },
    {
      head: "Commission",
      text: <MdMoney size={iconSize} />,
      link: "*",
    },
    {
      head: "Revenue",
      text: <LuLineChart size={iconSize} />,
      link: "*",
    },
    {
      head: "Atm card",
      text: <FaRegCreditCard size={iconSize} />,
      link: "*",
    },
    {
      head: "Payment request",
      text: <TbCash size={iconSize} />,
      link: "*",
    },
    {
      head: "Invoicing",
      text: <LuScrollText size={iconSize} />,
      link: "*",
    },
    {
      head: "Scan and pay",
      text: <BsQrCodeScan size={iconSize} />,
      link: "*",
    },
    {
      head: "Ussd",
      text: <MdOutlinePhoneAndroid size={iconSize} />,
      link: "*",
    },
    {
      head: "Card payment gateway",
      text: <IoMdCard size={iconSize} />,
      link: "*",
    },
    {
      head: "Pos terminal",
      text: <BsCalculator size={iconSize} />,
      link: "*",
    },
  ];
  return (
    <div className=" w-full h-full lg:my-[70px]">
      {links.map((link, index) => {
        return (
          <NavLink
            key={index}
            to={link.link}
            onclick={() => setMenu(false)}
            className={({ isActive }) =>
              isActive
                ? "  text-[#FF5D2E] rounded font-semibold  bg-[#FFEFEA] block w-full"
                : " text-[#8C8C8C]"
            }
          >
            <div className="flex gap-3 w-full  items-center px-6  py-3">
              <div className="  ">{link.text}</div>
              <p className="font-medium text-[13px]  font2  ">{link.head}</p>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
};

export default Siderbar;
