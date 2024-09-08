"use client";
import { AppProvider, Button } from "@shopify/polaris";
import enTranslations from "@shopify/polaris/locales/en.json";

import React, { ChangeEvent, useState } from "react";

type Props = {};

const CustomHtmlCard = (props: Props) => {
  const [input, setinput] = useState("Value");

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setinput(event.target.value);
  };
  return (
    <div className="px-4 py-4 w-[330px]  bg-white rounded-lg flex flex-col border-2 border-gray-200">
      <h1 className="text-[14px] text-[#4A4A4A] font-inter font-semibold">
        Seamlessly Integrate Custom HTML Elements
      </h1>
      <h1 className="text-[13px] text-[#4A4A4A] font-inter font-normal mt-3">
        Unleash creativity with our Custom HTML feature. Add links, custom
        messages, or any HTML content to elevate the tracking page experience
        for your customers.
      </h1>

      <div className="mt-5 flex flex-col gap-2 mb-10">
        <h1 className="text-[13px] font-inter font-normal text-[#0d0d0d]">
          HTML Link
        </h1>
        <textarea
          className="border-2 rounded-lg border-gray-200 focus:outline-none h-32 px-3 py-2 font-inter text-[#4A4A4A] text-[13px] font-normal resize-none"
          value={input}
          onChange={handleInputChange}
        />
      </div>

      <AppProvider i18n={enTranslations}>
        <div className="flex gap-1.5">
          <Button size="large">Preview</Button>
          <Button size="large" variant="primary">
            Apply changes
          </Button>
        </div>
      </AppProvider>
    </div>
  );
};

export default CustomHtmlCard;
