import React from "react";
import { BsArrowUp } from "react-icons/bs";
import { formatter } from "../../utils";
import filter from "../../assets/filter.png";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const Sms = () => {
  return (
    <>
      <section className=" font2 w-full min-h-screen">
        <div className=" w-full flex justify-between items-end mb-4">
          <h1 className=" text-sm lg:text-base font-semibold  ">
            Hey David Okulola -{" "}
            <span className=" text-[#71717A]">Welcome Back!</span>
          </h1>

          <div className=" flex gap-5">
            <button className=" text-sm lg:text-base px-3  bg-white border border-[#FF5D2E] text-[#FF5D2E]  font-semibold flex justify-center items-center gap-2  rounded-full">
              <img width={15} src={filter} alt="" />
              Filter
            </button>

            <Link to={"/dashboard/generate-report"}>
              <button className=" text-sm lg:text-base bg-[#FF5D2E] font-semibold p-2.5  text-white flex justify-center items-center gap-2 rounded-[10px]">
                <IoIosAddCircleOutline size={20} />
                Generating report
              </button>
            </Link>
          </div>
        </div>

        {/* dasboard card */}
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className=" p-3 bg-white   border border-gray-200 rounded-[10px]">
            <h3 className=" font-medium tracking-wide text-[11px] uppercase text-[#71717A]">
              count of total successful sms sent
            </h3>

            <div className=" flex justify-between mt-3">
              <h1 className=" text-[21px] font-semibold ">{formatter(2500)}</h1>

              <p className=" text-green-500 font-medium tracking-wide text-xs uppercase  flex items-center gap-1">
                +35% <BsArrowUp />
              </p>
            </div>
          </div>

          <div className=" p-3 bg-white   border border-gray-200 rounded-[10px]">
            <h3 className=" font-medium tracking-wide text-[11px] text-xs uppercase text-[#71717A]">
              count of total unsuccessful sms sent
            </h3>

            <div className=" flex justify-between mt-3">
              <h1 className=" text-[21px] font-semibold ">{formatter(1800)}</h1>

              <p className=" text-green-500 font-medium tracking-wide text-xs uppercase  flex items-center gap-1">
                +14% <BsArrowUp />
              </p>
            </div>
          </div>

          <div className=" p-3 bg-white   border border-gray-200 rounded-[10px]">
            <h3 className=" font-medium tracking-wide text-[11px] uppercase text-[#71717A]">
              count of successful phone verification sms
            </h3>

            <div className=" flex justify-between mt-3">
              <h1 className=" text-[21px] font-semibold ">{formatter(350)}</h1>

              <p className=" text-[#F04438] font-medium tracking-wide text-xs uppercase  flex items-center gap-1">
                +35% <BsArrowUp />
              </p>
            </div>
          </div>

          <div className=" p-3 bg-white   border border-gray-200 rounded-[10px]">
            <h3 className=" font-medium tracking-wide text-[11px] uppercase text-[#71717A]">
              count of unsuccessful phone verification sms
            </h3>

            <div className=" flex justify-between mt-3">
              <h1 className=" text-[21px] font-semibold ">
                {formatter(33000)}
              </h1>

              <p className=" text-green-500 font-medium tracking-wide text-xs uppercase  flex items-center gap-1">
                +14% <BsArrowUp />
              </p>
            </div>
          </div>

          <div className=" p-3 bg-white   border border-gray-200 rounded-[10px]">
            <h3 className=" font-medium tracking-wide text-[11px] uppercase text-[#71717A]">
              count of successful and unsuccessful
            </h3>

            <div className=" flex justify-between mt-3">
              <h1 className=" text-[21px] font-semibold ">{formatter(2500)}</h1>

              <p className=" text-green-500 font-medium tracking-wide text-xs uppercase  flex items-center gap-1">
                +35% <BsArrowUp />
              </p>
            </div>
          </div>

          <div className=" p-3 bg-white   border border-gray-200 rounded-[10px]">
            <h3 className=" font-medium tracking-wide text-[11px] uppercase text-[#71717A]">
              count of successful and unsuccessful
            </h3>

            <div className=" flex justify-between mt-3">
              <h1 className=" text-[21px] font-semibold ">{formatter(1800)}</h1>

              <p className=" text-green-500 font-medium tracking-wide text-xs uppercase  flex items-center gap-1">
                +14% <BsArrowUp />
              </p>
            </div>
          </div>

          <div className=" p-3 bg-white   border border-gray-200 rounded-[10px]">
            <h3 className=" font-medium tracking-wide text-[11px] uppercase text-[#71717A]">
              count of successful and unsuccessful BVN sms
            </h3>

            <div className=" flex justify-between mt-3">
              <h1 className=" text-[21px] font-semibold ">{formatter(350)}</h1>

              <p className=" text-[#F04438] font-medium tracking-wide text-xs uppercase  flex items-center gap-1">
                +35% <BsArrowUp />
              </p>
            </div>
          </div>

          <div className=" p-3 bg-white   border border-gray-200 rounded-[10px]">
            <h3 className=" font-medium tracking-wide text-[11px] uppercase text-[#71717A]">
              count of successful and unsuccessful Password reset
            </h3>

            <div className=" flex justify-between mt-3">
              <h1 className=" text-[21px] font-semibold ">
                {formatter(33000)}
              </h1>

              <p className=" text-green-500 font-medium tracking-wide text-xs uppercase  flex items-center gap-1">
                +14% <BsArrowUp />
              </p>
            </div>
          </div>

          <div className=" p-3 bg-white   border border-gray-200 rounded-[10px]">
            <h3 className=" font-medium tracking-wide text-[11px] uppercase text-[#71717A]">
              count of successful and unsuccessful PIN creation
            </h3>

            <div className=" flex justify-between mt-3">
              <h1 className=" text-[21px] font-semibold ">{formatter(1800)}</h1>

              <p className=" text-green-500 font-medium tracking-wide text-xs uppercase  flex items-center gap-1">
                +14% <BsArrowUp />
              </p>
            </div>
          </div>

          <div className=" p-3 bg-white   border border-gray-200 rounded-[10px]">
            <h3 className=" font-medium tracking-wide text-[11px] uppercase text-[#71717A]">
              count of successful and unsuccessful PIn reset
            </h3>

            <div className=" flex justify-between mt-3">
              <h1 className=" text-[21px] font-semibold ">{formatter(350)}</h1>

              <p className=" text-[#F04438] font-medium tracking-wide text-xs uppercase  flex items-center gap-1">
                +35% <BsArrowUp />
              </p>
            </div>
          </div>

          <div className=" p-3 bg-white   border border-gray-200 rounded-[10px]">
            <h3 className=" font-medium tracking-wide text-[11px] uppercase text-[#71717A]">
              Count of account created Successfully (OTP SMS)
            </h3>

            <div className=" flex justify-between mt-3">
              <h1 className=" text-[21px] font-semibold ">
                {formatter(33000)}
              </h1>

              <p className=" text-green-500 font-medium tracking-wide text-xs uppercase  flex items-center gap-1">
                +14% <BsArrowUp />
              </p>
            </div>
          </div>
        </div>

        {/* dasboard graph */}
      </section>
    </>
  );
};

export default Sms;
