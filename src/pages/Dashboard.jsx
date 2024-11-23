import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import DetailsCards from '../components/DetailsCards';
import RecentTransTable from '../components/RecentTransTable';
import TopExpenseCategories from '../components/TopExpenseCategories';
import { Box, Container, Typography } from '@mui/material';

const Dashboard = () => {
  const transactions = useSelector((state) => state.transactions.transactions);

  const sortedTransactions = useMemo(() => {
    return transactions
      .map((transaction) => ({ ...transaction }))
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 5);
  }, [transactions]);

  const topCategories = useMemo(() => {
    const expenses = transactions.filter(
      (transaction) => transaction.type === "Expense"
    );

    const categorySums = expenses.reduce((acc, { category, amount }) => {
      acc[category] = (acc[category] || 0) + Number(amount);
      return acc;
    }, {});

    return Object.entries(categorySums)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([category, amount], index) => ({
        id: index,
        category,
        amount,
        type: "Expense",
      }));
      
      
  }, [transactions]);

  return (
    <Container style={{ marginTop: "80px", marginBottom: "80px" }}>
      <DetailsCards />
      <Box>
        <Typography variant="h5" mt={5} mb={3}>
          Recent Transactions
        </Typography>
        <RecentTransTable data={sortedTransactions} />
      </Box>
      <Box mt={5}>
        <Typography variant="h5" mb={3}>
          Top 3 Categories Of Expenses
        </Typography>
        <TopExpenseCategories data={topCategories} />
      </Box>
    </Container>
  );
};

export default Dashboard;
