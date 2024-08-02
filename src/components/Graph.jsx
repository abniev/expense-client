import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import Labels from "./Labels";

Chart.register(ArcElement);

const config = {
  data: {
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: [
          "#ff316d",
          "#ffbe00",
          "#00d495",
        ],
        hoverOffset: 4,
        borderRadius: 30,
        spacing: 20,
      },
    ],
  },
  options: {
    cutout: 115,
  },
};

function Graph() {
  return (
    <div className="flex justify-content max-w-xs mx-auto">
      <div className="item">
        <div className="chart relative">
          <Doughnut {...config} />
          <h3 className="mb-4 font-bold title">
            Total
            <span className="block text-3xl text-emerald-400">${0}</span>
          </h3>
        </div>
        <div className="flex flex-col py-10 gap-4"></div>
        {/*Labels*/}
        <Labels />
      </div>
    </div>
  );
}

export default Graph;
