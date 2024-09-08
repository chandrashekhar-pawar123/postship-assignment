import React from "react";
import ColorCard from "./Elements/ColorCard";
import CustomHtmlCard from "./Elements/CustomHtmlCard";
import SupportCard from "./Elements/SupportCard";
import IntegrationCard from "./Elements/IntegrationCard";

type Props = {};

const FunctionalitySection = (props: Props) => {
  return (
    <div className="py-10 pb-16 px-32 bg-[#fffcf9]">
      <h1 className="text-[24px] text-[#4A4A4A] font-inter font-bold">
        Discover the Heart of Our Functionality
      </h1>

      <div className="mt-10 flex gap-5 justify-center">
        <ColorCard />
        <div className="w-[450px] flex flex-col gap-5">
          <IntegrationCard />
          <SupportCard />
        </div>
        <CustomHtmlCard />
      </div>
    </div>
  );
};

export default FunctionalitySection;
