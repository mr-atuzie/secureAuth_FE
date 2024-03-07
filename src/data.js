import { BsBank, BsCalculator, BsChatText, BsQrCodeScan } from "react-icons/bs";
import { CiReceipt } from "react-icons/ci";
import {
  FaRegCreditCard,
  FaRegUser,
  FaUser,
  FaRegCommentDots,
  FaHashtag,
  FaEnvelope,
} from "react-icons/fa";
import { GrAtm } from "react-icons/gr";
import { IoMdCard } from "react-icons/io";
import {
  IoWalletOutline,
  IoBagOutline,
  IoShareSocialOutline,
  IoImagesOutline,
} from "react-icons/io5";
import { LuLineChart, LuScrollText } from "react-icons/lu";
import {
  MdMoney,
  MdOutlineArticle,
  MdOutlinePermMedia,
  //   MdOutlineDashboard,
  MdOutlinePhoneAndroid,
  MdOutlineSync,
  MdOutlineTextsms,
} from "react-icons/md";
import { TbArrowsTransferDown, TbCash } from "react-icons/tb";
import { VscReferences } from "react-icons/vsc";
import { BsWallet } from "react-icons/bs";
import { FaRegAddressCard } from "react-icons/fa";
import { SlLogin } from "react-icons/sl";
import { RiUserFollowLine } from "react-icons/ri";

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
    head: "Pos  terminal",
    text: <BsCalculator size={iconSize} />,
    link: "/dashboard/pos-terminal",
  },
  {
    head: "Pos",
    text: <BsCalculator size={iconSize} />,
    link: "/dashboard/pos",
  },
  {
    head: "Loan",
    text: <BsCalculator size={iconSize} />,
    link: "/dashboard/loan",
  },
  {
    head: "SMS",
    text: <MdOutlineTextsms size={iconSize} />,
    link: "/dashboard/sms",
  },
  {
    head: "Account creation and login",
    text: <SlLogin size={iconSize} />,
    link: "/dashboard/account-creation",
  },
  // {
  //   head: "Profiling",
  //   text: <FaUser size={iconSize} />,
  //   link: "/dashboard/%",
  // },
];

export const gatewayLinks = [
  {
    head: "User",
    text: <FaRegUser size={iconSize} />,
    link: "/payment-gateway/user",
  },
  {
    head: "Commission Payment",
    text: <MdMoney size={iconSize} />,
    link: "/payment-gateway/commission-payment",
  },
  {
    head: "Revenue",
    text: <LuLineChart size={iconSize} />,
    link: "/payment-gateway/revenue",
  },
  {
    head: "Invoicing",
    text: <LuScrollText size={iconSize} />,
    link: "/payment-gateway/invoicing",
  },
  {
    head: "Payment page terminal",
    text: <GrAtm size={iconSize} />,
    link: "/payment-gateway/payment-terminal",
  },
  {
    head: "Payment page",
    text: <BsWallet size={iconSize} />,
    link: "/payment-gateway/payment",
  },
  {
    head: "KYC verification",
    text: <FaRegAddressCard size={iconSize} />,
    link: "/payment-gateway/kyc",
  },
  {
    head: "SMS",
    text: <MdOutlineTextsms size={iconSize} />,
    link: "/payment-gateway/sms",
  },
  {
    head: "Account creation and login",
    text: <SlLogin size={iconSize} />,
    link: "/payment-gateway/account-creation",
  },
  {
    head: "Profiling",
    text: <FaUser size={iconSize} />,
    link: "/payment-gateway/%",
  },
];

export const marketplaceLinks = [
  {
    head: "User",
    text: <FaRegUser size={iconSize} />,
    link: "/dashboard/user",
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
    head: "Product",
    text: <IoBagOutline size={iconSize} />,
    link: "/dashboard/invoicing",
  },
  {
    head: "Share",
    text: <IoShareSocialOutline size={iconSize} />,
    link: "/dashboard/ussd",
  },
  {
    head: "Comment",
    text: <FaRegCommentDots size={iconSize} />,
    link: "/dashboard/card-payment",
  },
  {
    head: "hashtags",
    text: <FaHashtag size={iconSize} />,
    link: "/dashboard/invoicing",
  },
  {
    head: "Synchronization",
    text: <MdOutlineSync size={iconSize} />,
    link: "/dashboard/bill-payment",
  },
  {
    head: "Follow",
    text: <RiUserFollowLine size={iconSize} />,
    link: "/dashboard/scan",
  },
  {
    head: "Post",
    text: <MdOutlineArticle size={iconSize} />,
    link: "/dashboard/nip",
  },
  {
    head: "Media",
    text: <MdOutlinePermMedia size={iconSize} />,
    link: "/dashboard/atm-card",
  },
  {
    head: "Image",
    text: <IoImagesOutline size={iconSize} />,
    link: "/dashboard/commission-payment",
  },
  {
    head: "Chat",
    text: <BsChatText size={iconSize} />,
    link: "/dashboard/loan",
  },
  {
    head: "KYC verification",
    text: <FaRegAddressCard size={iconSize} />,
    link: "/payment-gateway/kyc",
  },
  {
    head: "SMS",
    text: <FaEnvelope size={iconSize} />,
    link: "/dashboard/sms",
  },
  {
    head: "Account creation and login",
    text: <SlLogin size={iconSize} />,
    link: "/dashboard/account-creation",
  },
];

export const groupLinks = [
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
    head: "Pos terminal",
    text: <BsCalculator size={iconSize} />,
    link: "/dashboard/pos-terminal",
  },
  {
    head: "Kyc verification",
    text: <BsCalculator size={iconSize} />,
    link: "/payment-gateway/kyc",
  },
  {
    head: "SMS",
    text: <MdOutlineTextsms size={iconSize} />,
    link: "/dashboard/sms",
  },
  {
    head: "Account creation and login",
    text: <SlLogin size={iconSize} />,
    link: "/dashboard/account-creation",
  },
  {
    head: "Profiling",
    text: <FaUser size={iconSize} />,
    link: "/dashboard/pos",
  },
];
