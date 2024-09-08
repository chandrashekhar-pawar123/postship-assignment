"use client";
import React from "react";
import { AppProvider, Button } from "@shopify/polaris";
import enTranslations from "@shopify/polaris/locales/en.json";
import { AlertCircle, AlertTriangle } from "lucide-react";

type Props = {};

const WelcomeSection = (props: Props) => {
  return (
    <div className="bg-[url('/bg.png')] py-10 pb-16 px-24">
      <h1 className="text-[24px] text-[#4A4A4A] font-inter font-bold">
        Welcome, John Mathew!!
      </h1>
      <div className="flex gap-3 mt-10">
        <div className="px-5 py-3 max-w-[340px] bg-white rounded-lg border-2 border-[#cfcdcd] flex flex-col justify-between gap-2">
          <h1 className="text-[14px] text-[#4A4A4A] font-inter font-bold">
            Order Sync Successful
          </h1>
          <h1 className="text-[13px] text-[#2e2e2e] font-inter font-normal mb-5">
            Your order details from the last 30 days have been successfully
            synced. Check them out now!
          </h1>
          <AppProvider i18n={enTranslations}>
            <div>
              <Button size="large" variant="primary">
                Explore Your Orders
              </Button>
            </div>
          </AppProvider>
        </div>

        <div className="px-5 py-3 max-w-[340px] bg-[#FFF8DB] rounded-lg border-2 border-[#cfcdcd] flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            {" "}
            <AlertTriangle size={16} color="#4A4A4A" />{" "}
            <h1 className="text-[14px] text-[#5E4200] font-inter font-bold">
              Customize Customer Notification
            </h1>
          </div>
          <h1 className="text-[13px] text-[#5E4200] font-inter font-normal mb-5">
            Tailor Your Email Experience: Set the Sender Email and Choose
            Notification Triggers
          </h1>
          <AppProvider i18n={enTranslations}>
            <div>
              <Button size="large" variant="primary">
                Configure Notifications
              </Button>
            </div>
          </AppProvider>
        </div>

        <div className="px-5 py-3 max-w-[340px] bg-[#EAF4FF] rounded-lg border-2 border-[#cfcdcd] flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            {" "}
            <AlertCircle size={16} color="#4A4A4A" />{" "}
            <h1 className="text-[14px] text-[#4A4A4A] font-inter font-bold">
              Your Tracking Link has been generated
            </h1>
          </div>
          <h1 className="text-[13px] text-[#4A4A4A] font-inter font-normal mb-5">
            Include the <span className="text-[#005BD3] underline">Link</span>{" "}
            to Your Store's Navigation Menu.
          </h1>
          <AppProvider i18n={enTranslations}>
            <div className="flex gap-1.5">
              <Button size="large">Copy Link</Button>
              <Button size="large" variant="primary">
                Go To Navigation Menu
              </Button>
            </div>
          </AppProvider>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
