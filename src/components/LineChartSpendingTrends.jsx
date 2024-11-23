import React, { memo, useMemo } from "react";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import { Chart as ChartJS, CategoryScale, LinearScale, ArcElement, PointElement, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, ArcElement, PointElement, Tooltip, Legend);

const LineChartSpendingTrends = memo(() => {
  const transactions = useSelector((state) => state.transactions.transactions);

  const data = useMemo(() => {
    const today = dayjs();
    const startDate = today.subtract(50, "days");

    const expenseTransactions = transactions.filter(transaction =>
      transaction.type === 'Expense' && dayjs(transaction.date).isAfter(startDate)
    );

    const expenseByDate = expenseTransactions.reduce((acc, transaction) => {
      const day = dayjs(transaction.date).format("DD MMM");
      acc[day] = (acc[day] || 0) + Number(transaction.amount);
      return acc;
    }, {});

    return {
      labels: Object.keys(expenseByDate),
      datasets: [
        {
          label: "Spending Over Last 30 Days",
          data: Object.values(expenseByDate),
          fill: false,
          backgroundColor: "#FF6384",
          borderColor: "#FF6384",
        },
      ],
    };
  }, [transactions]);

  return (
    <Line
      data={data}
      options={{ responsive: true }}
      style={{ width: "100%", height: "700px" }}
    />
  );
});

export default LineChartSpendingTrends;
