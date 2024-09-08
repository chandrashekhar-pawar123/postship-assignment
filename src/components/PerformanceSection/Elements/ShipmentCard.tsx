import React from "react";
import DoughNut from "./DoughNut";

type Props = {};

const ShipmentCard = (props: Props) => {
  const orderOptions = [
    { action: "Delivered", color: "#FFC879" },
    { action: "Out for Delivery", color: "#FFDDB6" },
    ,
    { action: "Intransit", color: "#956F00" },
    ,
    { action: "Pending", color: "#E5A500" },
    ,
    { action: "Exception", color: "#5E4200" },
  ];
  const data = [25, 30, 15, 10, 20];
  const labels = ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5"];
  return (
    <div className="px-4 py-4 w-[450px]  bg-white rounded-lg flex flex-col border-2 border-gray-200">
      <div className="flex items-center justify-between">
        <h1 className="text-[14px] text-[#4A4A4A] font-inter font-semibold">
          Shipment Updates
        </h1>
        <h1 className="text-[14px] text-[#4A4A4A] font-inter font-normal">
          Total orders: 394
        </h1>
      </div>
      <div className="mt-5 flex items-center gap-2 overflow-x-scroll scroll-div">
        {orderOptions.map((option) => {
          return (
            <h1
              key={option?.action}
              className="text-[13px] cursor-pointer whitespace-nowrap rounded-md text-[#4A4A4A] text-center px-3 py-2 font-inter font-semibold bg-[#F1F1F1]"
            >
              {option?.action}
            </h1>
          );
        })}
      </div>

      <div className="flex justify-center items-center">
        <DoughNut data={data} labels={labels} />
      </div>

      <div className="flex flex-wrap gap-5 mt-3">
        {orderOptions.map((option) => {
          return (
            <div className="flex items-center gap-2" key={option?.action}>
              <div
                className={`h-[10px] w-[20px] rounded-lg bg-[${option?.color}]`}
              ></div>
              <h1 className="text-[#4A4A4A] font-inter font-normal text-[14px] ">
                {option?.action}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShipmentCard;
