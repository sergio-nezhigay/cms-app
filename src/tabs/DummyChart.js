import React from "react";

import "chart.js/auto";
import { Bar } from "react-chartjs-2";

const chartData = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Sales",
      data: [12, 19, 3, 5, 2],
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
    },
  ],
};

const chartOptions = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const DummyChart = () => (
  <div className="row h-50">
    <div className="col-12">
      <Bar data={chartData} options={chartOptions} />
    </div>
  </div>
);

export default DummyChart;
