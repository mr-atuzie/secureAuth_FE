import React from "react";
import { BsArrowUp } from "react-icons/bs";
import { FaRegFilePdf } from "react-icons/fa";
import { formatter } from "../../utils";
import DashboardHeader from "../../components/DashboardHeader";

const Invoicing = () => {
  return (
    <>
      <section className=" font2 w-full min-h-screen">
        <DashboardHeader />

        {/* dasboard card */}
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className=" p-3 bg-white   border border-gray-200 rounded-[10px]">
            <h3 className=" font-medium tracking-wide text-xs uppercase text-[#71717A]">
              total value of referral payment
            </h3>

            <div className=" flex justify-between mt-3">
              <h1 className=" text-[21px] font-semibold ">
                {formatter(25000000000)}
              </h1>

              <p className=" text-green-500 font-medium tracking-wide text-xs uppercase  flex items-center gap-1">
                +35% <BsArrowUp />
              </p>
            </div>
          </div>
          <div className=" p-3 bg-white   border border-gray-200 rounded-[10px]">
            <h3 className=" font-medium tracking-wide text-xs uppercase text-[#71717A]">
              total count of referral payment
            </h3>

            <div className=" flex justify-between mt-3">
              <h1 className=" text-[21px] font-semibold ">
                {formatter(45000)}
              </h1>

              <p className=" text-green-500 font-medium tracking-wide text-xs uppercase  flex items-center gap-1">
                +14% <BsArrowUp />
              </p>
            </div>
          </div>
          <div className=" p-3 bg-white   border border-gray-200 rounded-[10px]">
            <h3 className=" font-medium tracking-wide text-xs uppercase text-[#71717A]">
              Total COUNT of referrals
            </h3>

            <div className=" flex justify-between mt-3">
              <h1 className=" text-[21px] font-semibold ">
                {formatter(56000)}
              </h1>

              <p className=" text-green-500 font-medium tracking-wide text-xs uppercase  flex items-center gap-1">
                +14% <BsArrowUp />
              </p>
            </div>
          </div>
          <div className=" p-3 bg-white   border border-gray-200 rounded-[10px]">
            <h3 className=" font-medium tracking-wide text-xs uppercase text-[#71717A]">
              Total COUNT of referrals
            </h3>

            <div className=" flex justify-between mt-3">
              <h1 className=" text-[21px] font-semibold ">
                {formatter(56000)}
              </h1>

              <p className=" text-green-500 font-medium tracking-wide text-xs uppercase  flex items-center gap-1">
                +14% <BsArrowUp />
              </p>
            </div>
          </div>
          <div className=" p-3 bg-white   border border-gray-200 rounded-[10px]">
            <h3 className=" font-medium tracking-wide text-xs uppercase text-[#71717A]">
              total count of referral payment
            </h3>

            <div className=" flex justify-between mt-3">
              <h1 className=" text-[21px] font-semibold ">
                {formatter(45000)}
              </h1>

              <p className=" text-green-500 font-medium tracking-wide text-xs uppercase  flex items-center gap-1">
                +14% <BsArrowUp />
              </p>
            </div>
          </div>
        </div>

        {/* dasboard graph */}
        <div className=" lg:block p-3 bg-white w-full h-[328px] mt-8   border border-gray-200 rounded-[10px]">
          <div className=" flex justify-between items-center">
            <h1 className=" text-base font-semibold ">Invoicing</h1>

            <div className=" flex items-center gap-2">
              <button className=" p-3 border-gray-400 border text-xs font-semibold rounded-[10px]">
                12 months
              </button>
              <button className=" p-3 text-gray-500  text-xs font-semibold rounded-[10px]">
                6 months
              </button>
              <button className=" p-3 text-gray-500  text-xs font-semibold rounded-[10px]">
                30 Days
              </button>
              <button className=" p-3 text-gray-500  text-xs font-semibold rounded-[10px]">
                7 Days
              </button>
            </div>

            <button className=" p-2 border-gray-400 border flex items-center gap-1 text-xs font-semibold rounded-[10px]">
              <FaRegFilePdf size={20} />
              Export PDF
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Invoicing;
