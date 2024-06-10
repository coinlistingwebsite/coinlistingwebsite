import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const DoughnutElement = ({ dataChart }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Boosts Analysis",
      },
    },
  };

  const labels = ["Boosts"];

  const data = {
    labels,
    datasets: [
      {
        label: "Bullish",
        data: labels.map(() => dataChart.bullish),
        backgroundColor: "rgb(22 163 74 )",
      },
      {
        label: "Bearish",
        data: labels.map(() => dataChart.bearish),
        backgroundColor: "rgb(248 113 113)",
      },
    ],
  };

  return (
    <div className="w-[100%] p-5">
      {/* <Doughnut data={data} options={options}></Doughnut> */}

      <Bar options={options} data={data} />
    </div>
  );
};

export default DoughnutElement;
