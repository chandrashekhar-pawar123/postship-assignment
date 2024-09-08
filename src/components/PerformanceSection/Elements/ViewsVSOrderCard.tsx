"use client";
import React from "react";
import { OrderIcon, ViewIcon } from "@shopify/polaris-icons";

type Props = {};

const ViewsVSOrderCard = (props: Props) => {
  return (
    <div className="px-4 py-4 w-[450px] bg-white rounded-lg flex flex-col border-2 border-gray-200">
      <h1 className="text-[14px] text-[#4A4A4A] font-inter font-semibold">
        Tracking Page Views Vs Orders
      </h1>
      <h1 className="text-[13px] text-[#4A4A4A] font-inter font-normal mt-5">
        Understand user engagement patterns and optimize your tracking page for
        enhanced customer experiences.
      </h1>

      <div className="mt-5 flex flex-col gap-5 ">
        <div className="flex items-center justify-between bg-[#FFEBD5] px-5 py-5 rounded-md">
          <div className="flex flex-col gap-5 relative bottom-1">
            <h1 className="font-inter text-[#4A4A4A] text-[12px] font-semibold">
              Orders
            </h1>
            <h1 className="font-inter text-[#4A4A4A] text-[36px] font-semibold">
              80
            </h1>
          </div>
          <div className="flex justify-center items-center mr-6">
            <OrderIcon height={56} width={56} />
          </div>
        </div>

        <div className="flex items-center justify-between bg-[#FFC879] px-5 py-5 rounded-md">
          <div className="flex flex-col gap-5 relative bottom-1">
            <h1 className="font-inter text-[#4A4A4A] text-[12px] font-semibold">
              Track page views
            </h1>
            <h1 className="font-inter text-[#4A4A4A] text-[36px] font-semibold">
              44
            </h1>
          </div>
          <div className="flex justify-center items-center mr-6">
            <ViewIcon height={56} width={56} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewsVSOrderCard;
