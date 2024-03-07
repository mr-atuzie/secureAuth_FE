import React from "react";
import { BsArrowUp } from "react-icons/bs";
import { formatter } from "../../utils";
import filter from "../../assets/filter.png";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import arrow from "../../assets/table.png";

const GatewayAccountCreation = () => {
  const reports = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
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
              Count of account created Successfully
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
              Count of Account Create Failure
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
              Count of Incomplete Creation
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
              Incomplete Documentation Logs
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
              Unique Customers Created
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
              Accumulated Daily session Count
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
              Count Successful Login
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
              Count Successful Login
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
              Count Failure
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
              Downtime Logs
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
              Regional Session Traffic
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
              Count Password Reset Made/Forget Password Clicks
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
              Count Successful password reset
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
              Password reset failure rate
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
              Password reset failure rate
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
              Password reset Channels
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
              Count Email Password reset
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
              Count SMS Password reset
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
        <div className=" flex items-center gap-3 my-6">
          <p>Show</p>
          <select className=" border px-5  py-2 rounded-[10px]">
            <option value={10}>10</option>
            <option value={11}>11</option>
            <option value={12}>12</option>
            <option value={13}>13</option>
          </select>

          <p>entries</p>
        </div>
        <div className=" grid-cols-6 grid">
          <span className=" text-xs  text-start px-4   py-2 bg-[#F9F9F9] font-semibold flex items-center justify-between">
            USER ID
            <img src={arrow} width={20} alt="" />
          </span>
          <span className=" text-xs  text-start px-4   py-2 bg-[#F9F9F9] font-semibold flex items-center justify-between">
            INVITED BY
            <img src={arrow} width={20} alt="" />
          </span>
          <span className=" text-xs  text-start px-4   py-2 bg-[#F9F9F9] font-semibold flex items-center justify-between">
            INVITE CODE
            <img src={arrow} width={20} alt="" />
          </span>
          <span className=" text-xs  text-start px-4   py-2 bg-[#F9F9F9] font-semibold flex items-center justify-between">
            CREATED AT
            <img src={arrow} width={20} alt="" />
          </span>
          <span className=" text-xs  text-start px-4   py-2 bg-[#F9F9F9] font-semibold flex items-center justify-between">
            BALANCE
            <img src={arrow} width={20} alt="" />
          </span>
          <span className=" text-xs  text-start px-4   py-2 bg-[#F9F9F9] font-semibold flex items-center justify-between">
            AMOUNT
            <img src={arrow} width={20} alt="" />
          </span>
        </div>
        {reports.map((report, index) => {
          return (
            <div key={index} className="grid-cols-6 grid">
              <span className=" items-center flex  capitalize mr-1 text-xs  text-start px-4   py-4 bg-white font-semibold ">
                BD2024891717372
              </span>

              <span className=" items-center flex  capitalize mr-1 text-xs  text-start px-4   py-4 bg-white font-semibold ">
                ABIDEMI TITI
              </span>
              <span className=" items-center flex  mr-1 text-xs  text-start px-4   py-4 bg-white font-semibold ">
                rJ7892JDV99
              </span>
              <span className=" items-center flex mr-1 text-xs  text-start px-4   py-4 bg-white font-semibold ">
                Lagos, Ikeja
              </span>
              <span className=" items-center flex  mr-1 text-xs  text-start px-4   py-4 bg-white font-semibold ">
                NGN 67,000
              </span>
              <span className=" items-center flex  mr-1 text-xs  text-start px-4   py-4 bg-white font-semibold ">
                NGN 67,000
              </span>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default GatewayAccountCreation;
