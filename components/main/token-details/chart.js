import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutElement = ({ dataChart }) => {
  const data = {
    labels: ["Bullish", "Bearish"],
    datasets: [
      {
        label: "Boosts",
        data: [dataChart.bullish, dataChart.bearish],
        backgroundColor: ["rgb(22 163 74 )", "rgb(248 113 113)"],
        borderColor: ["#FAF9F6"],
      },
    ],
  };

  const options = {};

  return (
    <div className="w-[100%] p-5">
      <Doughnut data={data} options={options}></Doughnut>
    </div>
  );
};

export default DoughnutElement;
