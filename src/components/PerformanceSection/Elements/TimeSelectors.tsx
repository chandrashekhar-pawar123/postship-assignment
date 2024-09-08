"use client";
import { Icon } from "@shopify/polaris";
import { CalendarIcon } from "@shopify/polaris-icons";
import React, { useState } from "react";

type Props = {};

const TimeSelectors = (props: Props) => {
  const [timelineTab, setTimeLinetab] = useState(1);
  const tabs = ["Lifetime", "Last Week", "Last Month", "Last Year"];
  return (
    <div className="flex gap-3 mt-8">
      {tabs.map((tab, index) => {
        return (
          <div
            key={tab}
            onClick={() => setTimeLinetab(index + 1)}
            className={`flex justify-center items-center p-3 rounded-md cursor-pointer ${
              timelineTab == index + 1
                ? `bg-violet border-2 border-[#8051FF] bg-[#F8F7FF]`
                : `bg-white`
            }`}
          >
            <h1 className="text-[13px] font-inter font-semibold text-[#4A4A4A]">
              {tab}
            </h1>
          </div>
        );
      })}

      <div
        onClick={() => setTimeLinetab(5)}
        className={`flex gap-2 justify-center items-center p-3 rounded-md cursor-pointer ${
          timelineTab == 5
            ? `bg-violet border-2 border-[#8051FF] bg-[#F8F7FF]`
            : `bg-white`
        }`}
      >
        <h1 className="text-[13px] font-inter font-semibold text-[#4A4A4A]">
          Customize Time Line
        </h1>
        <Icon source={CalendarIcon} tone="base" />
      </div>
    </div>
  );
};

export default TimeSelectors;
