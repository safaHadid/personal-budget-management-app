import React, { memo, useMemo } from 'react';
import { Pie } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { Chart as ChartJS, CategoryScale, LinearScale, ArcElement, PointElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, ArcElement, PointElement, Tooltip, Legend);

const PieChartExpensesByCategory = memo(() => {
  const transactions = useSelector((state) => state.transactions.transactions);

  const data = useMemo(() => {
    const expenseCategories = transactions
      .filter(transaction => transaction.type === 'Expense')
      .reduce((acc, curr) => {
        acc[curr.category] = (acc[curr.category] || 0) + Number(curr.amount);
        return acc;
      }, {});

    return {
      labels: Object.keys(expenseCategories),
      datasets: [
        {
          label: 'Expenses by Category',
          data: Object.values(expenseCategories),
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#3651AA'],
        },
      ],
    };
  }, [transactions]);

  if (Object.values(data.datasets[0].data).length === 0) {
    return "No Expenses To Show On The Chart";
  }

  return (
    <div style={{ width: '320px', height: '320px' }}>
      <Pie data={data} options={{ responsive: true }} />
    </div>
  );
});

export default PieChartExpensesByCategory;
