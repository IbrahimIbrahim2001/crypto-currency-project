"use client";

import React from "react";
import {
  CategoryScale,
  Chart as ChartJS,
  LinearScale,
  LineElement,
  PointElement,
  TimeScale,
} from "chart.js";
import "chartjs-adapter-date-fns";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  TimeScale
);

export default function CoinChart({ historicalData }) {
  const prices = historicalData.prices.map((price) => ({
    x: new Date(price[0]),
    y: price[1],
  }));

  const data = {
    datasets: [
      {
        data: prices,
        borderColor: "rgb(75, 192, 192)",
        // tension: 0.5,
        fill: false,
        backgroundColor: "transparent",
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: "time",
        time: {
          unit: "day",
        },
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Hide dataset labels
      },
      tooltip: {
        enabled: false, // Hide tooltips
      },
    },
    elements: {
      line: {
        backgroundColor: "transparent", // Ensure the line background is transparent
      },
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },
  };

  return (
    <div className="w-1/2 sm:w-28 md:max-w-36 lg:w-24 lg:max-w-1/2 overflow-hidden">
      <Line data={data} options={options} />
    </div>
  );
}
