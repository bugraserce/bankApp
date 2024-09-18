"use client";
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  const data = {
    datasets: [
      {
        label: 'Banks',
        data: [1250, 2500, 3750],
        backgroundColor: ['#34D399', '#10B981', '#059669'], // Green shades
      },
    ],
    labels: ['Bank1', 'Bank2', 'Bank3'],
  };

  return (
    <div>
      <Doughnut data={data} />
    </div>
  );
}

export default DoughnutChart;
