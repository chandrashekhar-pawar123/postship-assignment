"use client";
import { AppProvider, Button } from "@shopify/polaris";
import enTranslations from "@shopify/polaris/locales/en.json";

import React from "react";
const IntegrationCard = () => {
  return (
    <div className="bg-white flex flex-col gap-3 rounded-lg px-4 py-4 border-2 border-gray-200">
      <h1 className="text-[14px] text-[#4A4A4A] font-inter font-semibold">
        Exclusive Onboarding Support for High-Volume Brands
      </h1>
      <h1 className="text-[13px] text-[#4A4A4A] font-inter font-normal pr-8 mb-2">
        Unlock personalized guidance! Book a one-on-one onboarding call to
        streamline your experience.
      </h1>
      <AppProvider i18n={enTranslations}>
        <div className="flex gap-1.5">
          <Button size="large" variant="primary">
            Schedule A Call
          </Button>
        </div>
      </AppProvider>
    </div>
  );
};

export default IntegrationCard;
