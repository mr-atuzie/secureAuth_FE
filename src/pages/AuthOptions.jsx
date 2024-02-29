import React from "react";
import AuthOptionsCard from "../components/AuthOptionsCard";
import { CiLogin } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
// import authFooter from "../assets/auth.png";

const AuthOptions = () => {
  const navigate = useNavigate();

  const options = [
    {
      head: "Group",
      text: "Sign in into the group to access reports and KPI",
      link: "/",
    },
    {
      head: "Bank",
      text: "Sign in into the group to access reports and KPI",
      link: "/",
    },
    {
      head: "Socail marketplace",
      text: "Sign in into the group to access reports and KPI",
      link: "/",
    },
    {
      head: "Payment gateway",
      text: "Sign in into the group to access reports and KPI",
      link: "/",
    },
  ];
  return (
    <div className=" w-full min-h-screen  flex flex-col items-center justify-center">
      <h2 className=" text-[40px] font-bold mt-10">
        Choose your sign in option
      </h2>
      <p className=" text-[#707070] text-center text-[18px]  w-[648px]">
        Our comprehensive design system offers you an unparalleled range of
        components, sparking creativity and boosting efficiency.
      </p>
      <div className=" grid grid-cols-2 mt-8  gap-5 justify-center">
        {options.map((opt, index) => {
          const { head, text, link } = opt;
          return (
            <AuthOptionsCard key={index} head={head} text={text} link={link} />
          );
        })}
      </div>

      <button
        onClick={() => navigate("/admin-login")}
        className=" w-[564px] mt-8 px-[24px] rounded-[12px] py-[16px] font-semibold border border-[#FF7D58]  bg-white text-[#FF7D58] justify-center items-center flex gap-4"
      >
        Login as Admin
        <CiLogin size={30} />
      </button>

      <div className=" w-[1386px] mt-10  h-[340px] rounded-t-lg  bg-[#FFEFEA] flex flex-col justify-center items-center mx-auto">
        {/* <img className=" w-full" src={authFooter} alt="" /> */}
        <h1 className=" text-[#FF6634] text-[30px] font-semibold text-center">
          Report and Analytics <br /> Dashbaord
        </h1>
        <p className=" text-[#707070] text-center  text-[14px] w-[420px]">
          Our comprehensive design system offers you an unparalleled range of
          components, sparking creativity and boosting efficiency
        </p>
      </div>
    </div>
  );
};

export default AuthOptions;
