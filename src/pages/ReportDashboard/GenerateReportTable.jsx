import React from "react";
import arrow from "../../assets/table.png";

const GenerateReportTable = () => {
  const reports = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <div className=" font2">
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
            <span className=" text-xs text-start px-4 py-2 bg-[#F9F9F9] font-semibold">
              {index + 1}
            </span>

            <span className=" items-center flex capitalize mr-1 text-xs  text-start px-4   py-4 bg-white font-semibold ">
              Personal
            </span>
            <span className=" items-center flex mr-1 text-xs  text-start px-4   py-4 bg-white font-semibold ">
              Audit
            </span>
            <span className=" items-center flex mr-1 text-xs  text-start px-4   py-4 bg-white font-semibold ">
              User wallets
            </span>
            <span className=" items-center flex  mr-1 text-xs  text-start px-4   py-4 bg-white font-semibold ">
              Wallet history
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default GenerateReportTable;
