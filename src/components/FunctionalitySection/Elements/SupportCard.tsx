"use client";
import React from "react";
import { AppProvider, Button } from "@shopify/polaris";
import enTranslations from "@shopify/polaris/locales/en.json";
import Image from "next/image";

const SupportCard = () => {
  const icons = [
    "paypal.png",
    "star.png",
    "charge.png",
    "network.png",
    "nodes.png",
  ];
  return (
    <div className="bg-white flex flex-col gap-3 rounded-lg px-4 py-4 border-2 border-gray-200">
      <h1 className="text-[14px] text-[#4A4A4A] font-inter font-semibold">
        Explore Our Integrated Ecosystem
      </h1>
      <h1 className="text-[13px] text-[#4A4A4A] font-inter font-normal pr-8 mb-2">
        Discover a variety of popular integrations tailored for your
        convenience.
      </h1>
      <div className="flex gap-5 mb-3">
        {icons.map((icon) => {
          return (
            <Image
              key={icon}
              className="hover:scale-90 cursor-pointer transition-all"
              src={`/icons/${icon}`}
              height={30}
              width={30}
              alt={icon}
              quality={100}
            />
          );
        })}
      </div>
      <AppProvider i18n={enTranslations}>
        <div className="flex gap-1.5">
          <Button size="large" variant="primary">
            Explore Integrations
          </Button>
        </div>
      </AppProvider>
    </div>
  );
};

export default SupportCard;
