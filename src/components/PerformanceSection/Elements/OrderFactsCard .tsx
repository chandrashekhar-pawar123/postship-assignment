"use client";
import React from "react";
import { AppProvider, Button } from "@shopify/polaris";
import enTranslations from "@shopify/polaris/locales/en.json";
type Props = {};

const OrderFactsCard = (props: Props) => {
  const informations = [
    "There are 8 shipments that have been in out for delivery for more than 3 days.",
    "There are 5 shipments in exception right now",
    "The maximum chargebacks are from Miami.",
  ];
  return (
    <div className="flex flex-col gap-4 px-4 py-4 w-[220px] bg-[#956F00] rounded-lg">
      <h1 className="text-[#FFFFFF] font-inter font-semibold">
        Star Facts about your orders!!!
      </h1>
      <div className="flex flex-col gap-3 pr-10">
        {informations.map((info, idx) => {
          return (
            <h1
              className="text-[13px] font-inter font-normal text-white"
              key={idx}
            >
              {info}
            </h1>
          );
        })}
      </div>
      <div>
        <AppProvider i18n={enTranslations}>
          <Button>Check Orders Page</Button>
        </AppProvider>
      </div>
    </div>
  );
};

export default OrderFactsCard;
