import { BsBank, BsCalculator, BsQrCodeScan } from "react-icons/bs";
import { CiReceipt } from "react-icons/ci";
import { FaRegCreditCard, FaRegUser } from "react-icons/fa";
import { GrAtm } from "react-icons/gr";
import { IoMdCard } from "react-icons/io";
import { IoWalletOutline } from "react-icons/io5";
import { LuLineChart, LuScrollText } from "react-icons/lu";
import {
  MdMoney,
  //   MdOutlineDashboard,
  MdOutlinePhoneAndroid,
} from "react-icons/md";
import { TbArrowsTransferDown, TbCash } from "react-icons/tb";
import { VscReferences } from "react-icons/vsc";

const iconSize = 15;

export const links = [
  //   {
  //     head: "Dashboard",
  //     text: <MdOutlineDashboard size={iconSize} />,
  //     link: "/dashboard/main",
  //   },
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
    link: "/dashboard/referral",
  },
  {
    head: "Commission Payment",
    text: <MdMoney size={iconSize} />,
    link: "/dashboard/commission-payment",
  },
  {
    head: "Revenue",
    text: <LuLineChart size={iconSize} />,
    link: "/dashboard/revenue",
  },
  {
    head: "Atm card",
    text: <FaRegCreditCard size={iconSize} />,
    link: "/dashboard/atm-card",
  },
  {
    head: "Payment request",
    text: <TbCash size={iconSize} />,
    link: "/dashboard/payment-request",
  },
  {
    head: "Invoicing",
    text: <LuScrollText size={iconSize} />,
    link: "/dashboard/invoicing",
  },
  {
    head: "Scan and pay",
    text: <BsQrCodeScan size={iconSize} />,
    link: "/dashboard/scan",
  },
  {
    head: "Ussd",
    text: <MdOutlinePhoneAndroid size={iconSize} />,
    link: "/dashboard/ussd",
  },
  {
    head: "Card payment gateway",
    text: <IoMdCard size={iconSize} />,
    link: "/dashboard/card-payment",
  },
  {
    head: "Pos terminal",
    text: <BsCalculator size={iconSize} />,
    link: "/dashboard/pos",
  },
];
