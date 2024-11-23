import React, { memo, useMemo } from 'react';
import { Pie } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, ArcElement, PointElement, Tooltip, Legend);


const PieChartIncomeVsExpenses = memo(() => {
  const transactions = useSelector((state) => state.transactions.transactions);


  const totalIncome = useMemo(() => {
    return transactions
      .filter(transaction => transaction.type === 'Income')
      .reduce((acc, curr) => acc + Number(curr.amount), 0);
  }, [transactions]);

  const totalExpenses = useMemo(() => {
    return transactions
      .filter(transaction => transaction.type === 'Expense')
      .reduce((acc, curr) => acc + Number(curr.amount), 0);
  }, [transactions]);

  
  const data = useMemo(() => ({
    labels: ['Expenses', 'Income'],
    datasets: [
      {
        label: 'Expenses to Income',
        data: [totalExpenses, totalIncome],
        backgroundColor: ['#FF6384', '#36A2EB'],
      },
    ],
  }), [totalExpenses, totalIncome]);

  if (totalIncome === 0 && totalExpenses === 0) {
    return "No Expenses Nor Income To Show On The Chart";
  }

  return (
    <div style={{ width: '300px', height: '300px' }}>
      <Pie data={data} options={{ responsive: true }} />
    </div>
  );
}
)

export default PieChartIncomeVsExpenses;
