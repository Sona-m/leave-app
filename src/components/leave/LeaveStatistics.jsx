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
import { Box } from "@mui/material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {},
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },
  scales: {
    x: {
      stacked: true,
      grid: {
        display: false,
      },
    },
    y: {
      stacked: true,
      grid: {
        display: false,
      },
    },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const casualLeavesData = [1, null, 1, null, 2, null, null, 1, 3, null, 1, null];
const sickLeavesData = [null, 1, 1, 1, 4, null, null, 1, null, 1, 1, null];
const compOffsData = [1, null, 1, 1, 1, 1, null, 1, null, null, 2, null];

export const data = {
  labels,
  datasets: [
    {
      label: "Casual Leaves",
      data: casualLeavesData,
      backgroundColor: "rgb(255, 99, 132)",
      stack: "Stack 1",
    },
    {
      label: "Sick Leaves",
      data: sickLeavesData,
      backgroundColor: "rgb(75, 192, 192)",
      stack: "Stack 1",
    },
    {
      label: "Comp off",
      data: compOffsData,
      backgroundColor: "rgb(53, 162, 235)",
      stack: "Stack 1",
    },
  ],
};

const LeaveStatistics = () => {
  return (
    <Box height={"400px !important"} width={"900px"}>
      <Bar options={options} data={data} />
    </Box>
  );
};

export default LeaveStatistics;
