"use client";
import { AppProvider, Button } from "@shopify/polaris";
import enTranslations from "@shopify/polaris/locales/en.json";
import React, { ChangeEvent, useState } from "react";

type Props = {};

const ColorCard = (props: Props) => {
  const [accentColor, setAccentColor] = useState("FF9898");
  const [textColor, setTextColor] = useState("571010");
  const [bgColor, setBgColor] = useState("FFEAEA");

  const handleAccentColorChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAccentColor(event.target.value);
  };

  const handleTextColorChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTextColor(event.target.value);
  };

  const handleBgColorChange = (event: ChangeEvent<HTMLInputElement>) => {
    setBgColor(event.target.value);
  };

  return (
    <div className="px-4 py-4 w-[330px]  bg-white rounded-lg flex flex-col justify-between border-2 border-gray-200">
      <h1 className="text-[14px] text-[#4A4A4A] font-inter font-semibold">
        Elevate Your Brand Aesthetics with Custom Tracking Page Styles
      </h1>
      <h1 className="text-[13px] text-[#4A4A4A] font-inter font-normal mt-5">
        Immerse your customers in a branded experience by personalizing the
        colors on your tracking page.{" "}
      </h1>

      <div className="flex flex-col gap-3 mt-5">
        <div className="flex flex-col gap-1">
          <h1 className="text-[13px] font-inter font-normal text-[#0d0d0d]">
            Accent Color
          </h1>
          <div className="flex gap-3">
            <input
              value={accentColor}
              onChange={handleAccentColorChange}
              className="border-2 flex-1 rounded-lg border-gray-200 focus:outline-none px-3 py-1"
              type="text"
            />
            <div
              style={{ backgroundColor: "#" + accentColor }}
              className="px-6 p-3 rounded-lg"
            ></div>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <h1 className="text-[13px] font-inter font-normal text-[#0d0d0d]">
            Text Color
          </h1>
          <div className="flex gap-3">
            <input
              value={textColor}
              onChange={handleTextColorChange}
              className="border-2 flex-1 rounded-lg border-gray-200 focus:outline-none px-3 py-1"
              type="text"
            />
            <div
              style={{ backgroundColor: "#" + textColor }}
              className="px-6 p-3 rounded-lg"
            ></div>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <h1 className="text-[13px] font-inter font-normal text-[#0d0d0d]">
            Background Color
          </h1>
          <div className="flex gap-3">
            <input
              value={bgColor}
              onChange={handleBgColorChange}
              className="border-2 flex-1 rounded-lg border-gray-200 focus:outline-none px-3 py-1"
              type="text"
            />
            <div
              style={{ backgroundColor: "#" + bgColor }}
              className="px-6 p-3 rounded-lg"
            ></div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <AppProvider i18n={enTranslations}>
          <div className="flex gap-1.5">
            <Button size="large">Preview</Button>
            <Button size="large" variant="primary">
              Apply Colors
            </Button>
          </div>
        </AppProvider>
      </div>
    </div>
  );
};

export default ColorCard;
