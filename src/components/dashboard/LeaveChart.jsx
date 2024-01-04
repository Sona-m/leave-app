import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  registerables,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const leaveConfig = {
  type: "doughnut",
  options: {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "80%",
    plugins: {
      legend: {
        display: true,
        position: "right",
      },
    },
  },
};

const LeaveChart = ({ total, used }) => {
  const plugins = [
    {
      beforeDraw: function (chart) {
        var width = chart.width,
          height = chart.height,
          ctx = chart.ctx;
        ctx.restore();
        var formattedTotal = ("0" + total).slice(-2);
        var fontSize = (height / 50).toFixed(2);
        ctx.font = fontSize + "em sans-serif";
        ctx.textBaseline = "top";
        var textX = width / 5;
        var textY = height / 2.5;
        ctx.fillText(formattedTotal, textX, textY);
        ctx.save();
      },
    },
  ];
  return (
    <Doughnut
      data={{
        labels: ["Used", "Remaining"],
        datasets: [
          {
            data: [used, total - used],
            backgroundColor: ["#34b1aa", "#6f42c1"],
            hoverOffset: 4,
          },
        ],
      }}
      options={leaveConfig.options}
      plugins={plugins}
      width={"150px"}
      height={"100%"}
      color="#FFF"
    />
  );
};

export default LeaveChart;
