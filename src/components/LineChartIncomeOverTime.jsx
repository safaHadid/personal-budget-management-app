import React, { memo, useMemo } from 'react';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  ArcElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const LineChartIncomeOverTime = memo(() => {
  const transactions = useSelector((state) => state.transactions.transactions);

  const { data, labels } = useMemo(() => {
    const today = dayjs();
    const startDate = today.subtract(50, 'days');
    const incomeByDay = {};

    
    transactions.forEach(transaction => { 
      if (transaction.type === 'Income' && dayjs(transaction.date).isAfter(startDate)) {
        
        const day = dayjs(transaction.date).format('DD MMM');
        incomeByDay[day] = (incomeByDay[day] || 0) + Number(transaction.amount);
      }
    });
    
    

    return {
      labels: Object.keys(incomeByDay),
      data: Object.values(incomeByDay),
    };
  }, [transactions]);

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Income Over Last 30 Days',
        data,
        fill: false,
        backgroundColor: '#36A2EB',
        borderColor: '#36A2EB',
      },
    ],
  };

  return <Line data={chartData} options={{ responsive: true }} style={{ width: '100%', height: '500px' }} />;
})

export default LineChartIncomeOverTime;
