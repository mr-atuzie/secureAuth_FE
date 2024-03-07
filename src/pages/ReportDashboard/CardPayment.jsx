import React from "react";
import { BsArrowUp } from "react-icons/bs";
import { FaRegFilePdf } from "react-icons/fa";
import { formatter } from "../../utils";
import filter from "../../assets/filter.png";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const CardPayment = () => {
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
        </div>

        {/* dasboard graph */}
        <div className=" lg:block p-3 bg-white w-full h-[328px] mt-8   border border-gray-200 rounded-[10px]">
          <div className=" flex justify-between items-center">
            <h1 className=" text-base font-semibold ">Card payment gateway</h1>

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

export default CardPayment;
