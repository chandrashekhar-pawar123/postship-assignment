import React from "react";
import TimeSelectors from "./Elements/TimeSelectors";
import ShipmentCard from "./Elements/ShipmentCard";
import OrderFactsCard from "./Elements/OrderFactsCard ";
import ViewsVSOrderCard from "./Elements/ViewsVSOrderCard";

type Props = {};

const PerformanceSection = (props: Props) => {
  return (
    <div className="py-10 pb-16 px-32 bg-[#FFF7EE]">
      <h1 className="text-[24px] text-[#4A4A4A] font-inter font-bold">
        Instant Dive into Your Performance Metrics
      </h1>
      <TimeSelectors />
      <div className="mt-10 flex gap-10 justify-center">
        <ShipmentCard />
        <OrderFactsCard />
        <ViewsVSOrderCard />
      </div>
    </div>
  );
};

export default PerformanceSection;
