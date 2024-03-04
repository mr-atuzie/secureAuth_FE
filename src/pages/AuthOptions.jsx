import React from "react";
import AuthOptionsCard from "../components/AuthOptionsCard";
import { CiLogout } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
// import authFooter from "../assets/auth.png";

const AuthOptions = () => {
  const navigate = useNavigate();

  const options = [
    {
      head: "Group",
      text: "Sign in into the group to access reports and KPI",
      link: "/group-login",
    },
    {
      head: "Bank",
      text: "Sign in into the group to access reports and KPI",
      link: "/bank-login",
    },
    {
      head: "Social marketplace",
      text: "Sign in into the group to access reports and KPI",
      link: "/social-marketplace-login",
    },
    {
      head: "Payment gateway",
      text: "Sign in into the group to access reports and KPI",
      link: "/payment-gateway-login",
    },
  ];
  return (
    <div className=" w-full min-h-screen  flex flex-col items-center justify-center">
      <h2 className=" text-[24px] md:text-[30px] lg:text-[40px] font-bold mt-10">
        Choose your sign in option
      </h2>
      <p className="px-2 text-[#707070] text-center text-xs md:text-base lg:text-[18px]  lg:w-[648px]">
        Our comprehensive design system offers you an unparalleled range of
        components, sparking creativity and boosting efficiency.
      </p>
      <div className=" grid grid-cols-1 lg:grid-cols-2 mt-8  gap-5 justify-center">
        {options.map((opt, index) => {
          const { head, text, link } = opt;
          return (
            <AuthOptionsCard key={index} head={head} text={text} link={link} />
          );
        })}
      </div>

      <button
        onClick={() => navigate("/admin-login")}
        className=" lg:w-[564px] mt-8 px-[20px] md:px-[24px] rounded-[12px] py-[12px] md:py-[16px] font-semibold border border-[#FF7D58]  bg-white text-[#FF7D58] justify-center items-center flex gap-2"
      >
        Login as Admin
        <CiLogout size={30} />
      </button>

      <div className=" w-[95%] px-3 lg:w-[1386px] mt-10 h-[240px]  lg:h-[340px] rounded-t-lg  bg-[#FFEFEA] flex flex-col justify-center items-center mx-auto">
        {/* <img className=" w-full" src={authFooter} alt="" /> */}
        <h1 className=" text-[#FF6634] text-[20px] md:text-[30px] font-semibold text-center leading-none">
          Report and Analytics <br /> Dashbaord
        </h1>
        <p className=" text-[#707070] text-center text-xs lg:text-base mt-3  md:text-[14px] ">
          Our comprehensive design system offers you an unparalleled <br />{" "}
          range of components, sparking creativity and boosting <br />{" "}
          efficiency
        </p>
      </div>
    </div>
  );
};

export default AuthOptions;
