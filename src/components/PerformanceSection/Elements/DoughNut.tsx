// components/PieChart.tsx
"use client";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";

Chart.register(ArcElement);

interface PieChartProps {
  data: number[];
  labels: string[];
}

const DoughNut: React.FC<PieChartProps> = ({ data, labels }) => {
  const chartData = {
    labels,
    datasets: [
      {
        data,
        backgroundColor: [
          "#FFC879",
          "#FFDDB6",
          "#956F00",
          "#E5A500",
          "#5E4200",
        ],
      },
    ],
  };

  return (
    <div className="py-4">
      <Doughnut height={150} width={150} data={chartData} />
    </div>
  );
};

export default DoughNut;
