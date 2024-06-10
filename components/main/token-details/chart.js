import React from "react";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// import { Bar, Doughnut, Line, Pie } from "react-chartjs-2";

// ChartJS.register(ArcElement, Tooltip, Legend);

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const DoughnutElement = ({ dataChart }) => {
  const data = {
    labels: ["Bullish", "Bearish"],
    datasets: [
      {
        label: "Boosts",
        data: [dataChart.bullish, dataChart.bearish],
        backgroundColor: ["rgb(22 163 74 )", "rgb(248 113 113)"],
        borderColor: ["#FAF9F6"],
        // backgroundColor: "rgba(255, 99, 132, 0.2)",
        // borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {};

  return (
    <div className="w-[100%] p-5">
      {/* <Doughnut data={data} options={options}></Doughnut> */}

      <Radar data={data} />
    </div>
  );
};

export default DoughnutElement;
