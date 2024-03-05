import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const DashboardOptions = () => {
  return (
    <div className=" w-full min-h-screen  flex flex-col items-center  pt-14 justify-center">
      <h2 className=" text-[24px] text-center md:text-[30px] lg:text-[40px] font-bold mt-10 leading-none">
        Access Dashboard or Tech <br /> support
      </h2>
      <p className="px-2 text-[#707070] text-center text-xs md:text-base lg:text-[18px]  lg:w-[648px] font3">
        access the reporting dashboard,or click to access the <br /> tech
        support portal
      </p>
      <div className=" grid grid-cols-1  my-8  gap-6 justify-center">
        <Link to={"/auth-options"}>
          <div className=" w-[90%]   border border-[#FFEFEA] lg:w-[543px] h-[120px] lg:h-[150px] shadow-sm flex flex-col justify-center items-center rounded-md px-3 ">
            <h3 className=" font-semibold">Reporting Dashboard</h3>

            <div className="  flex  relative">
              <p className="  text-[#707070] text-center  leading-none">
                Click to sign in to access report <br />
                dashboard
              </p>

              <IoIosArrowForward
                size={20}
                className="absolute -right-12 lg:-right-36"
              />
            </div>
          </div>
        </Link>
        <div className="  w-[90%] border border-[#FFEFEA]  lg:w-[543px] h-[120px] lg:h-[150px] shadow-sm flex flex-col justify-center items-center rounded-md px-3 ">
          <h3 className=" font-semibold">Tech support</h3>

          <div className="  flex  relative">
            <p className="  text-[#707070] text-center  leading-none">
              Click to sign in to access report <br />
              dashboard
            </p>

            <IoIosArrowForward
              size={20}
              className="absolute -right-12 lg:-right-36"
            />
          </div>
        </div>
      </div>

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

export default DashboardOptions;
