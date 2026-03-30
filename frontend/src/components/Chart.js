import React from "react";
import { Pie } from "react-chartjs-2";

const Chart = ({ transactions }) => {
  const income = transactions
    .filter(t => t.type === "income")
    .reduce((a, b) => a + b.amount, 0);

  const expense = transactions
    .filter(t => t.type === "expense")
    .reduce((a, b) => a + b.amount, 0);

  const data = {
    labels: ["Income", "Expense"],
    datasets: [
      {
        data: [income, expense],
      },
    ],
  };

  return <Pie data={data} />;
};

export default Chart;