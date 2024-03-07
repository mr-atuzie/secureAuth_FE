import React from "react";
import arrow from "../../assets/table.png";
import { HiDownload } from "react-icons/hi";

const GenerateReportTable = () => {
  const reports = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <div className=" font2">
      <div className=" flex justify-between items-center">
        <div className=" font-medium flex items-center text-[14px] gap-3 my-6">
          <p>Show</p>
          <select className=" border px-5  py-2 rounded-[10px]">
            <option value={10}>10</option>
            <option value={11}>11</option>
            <option value={12}>12</option>
            <option value={13}>13</option>
          </select>

          <p>entries</p>
        </div>

        <div className=" flex items-center  gap-3">
          <div className="border text-[14px] rounded-[10px] px-3 py-1 my-7 ">
            <label className="  font-semibold mb-1 " htmlFor="email">
              Export Format
            </label>
            <select
              name="date"
              id="date"
              className=" w-full bg-transparent outline-none"
            >
              <option className=" text-[12px] text-gray-400" value={" "}>
                Select export format
              </option>
              <option value="red">red</option>
              <option value="red">red</option>
              <option value="red">red</option>
              <option value="red">red</option>
            </select>
          </div>

          <button className=" h-fit text-sm lg:text-base bg-[#FF5D2E] font-semibold p-2.5  text-white flex justify-center items-center gap-2 rounded-[10px]">
            Download
            <HiDownload />
          </button>
        </div>
      </div>
      <div className=" grid-cols-5 grid">
        <span className=" text-[xs] text-start px-4 py-2 bg-[#F9F9F9] font-semibold">
          #
        </span>
        <span className=" text-xs  text-start px-4   py-2 bg-[#F9F9F9] font-semibold flex items-center justify-between">
          Users
          <img src={arrow} width={20} alt="" />
        </span>
        <span className=" text-xs  text-start px-4   py-2 bg-[#F9F9F9] font-semibold flex items-center justify-between">
          Audit
          <img src={arrow} width={20} alt="" />
        </span>
        <span className=" text-xs  text-start px-4   py-2 bg-[#F9F9F9] font-semibold flex items-center justify-between">
          Users wallets
          <img src={arrow} width={20} alt="" />
        </span>
        <span className=" text-xs  text-start px-4   py-2 bg-[#F9F9F9] font-semibold flex items-center justify-between">
          Wallet histories
          <img src={arrow} width={20} alt="" />
        </span>
      </div>
      {reports.map((report, index) => {
        return (
          <div key={index} className="grid-cols-5 grid">
            <span className=" text-[13px] text-start px-4 py-2 bg-[#F9F9F9] font-semibold">
              {index + 1}
            </span>

            <span className=" items-center flex capitalize mr-1 text-[13px]  text-start px-4   py-4 bg-white font-semibold ">
              Personal
            </span>
            <span className=" items-center flex mr-1 text-[13px]  text-start px-4   py-4 bg-white font-semibold ">
              Audit
            </span>
            <span className=" items-center flex mr-1 text-[13px] text-start px-4   py-4 bg-white font-semibold ">
              User wallets
            </span>
            <span className=" items-center flex  mr-1 text-[13px]  text-start px-4   py-4 bg-white font-semibold ">
              Wallet history
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default GenerateReportTable;
