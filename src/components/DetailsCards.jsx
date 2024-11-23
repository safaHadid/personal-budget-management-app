import React, { useMemo } from 'react';
import { Box } from '@mui/material';
import DetailsCard from './DetailsCard';
import { useSelector } from 'react-redux';

const DetailsCards = () => {
  const totalIncome = useSelector((state) => state.transactions.totalIncome);
  const totalExpenses = useSelector((state) => state.transactions.totalExpenses);
  const currentBalance = useSelector((state) => state.transactions.currentBalance);

  return (
    <Box
      sx={{
        display: 'flex',
        gap: 2,
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: {
          xs: 'column',
          sm: 'column', 
          md: 'row',  
        },
      }}
    >
      <DetailsCard
        title="Total Income"
        value={totalIncome}
        backgroundColor="success.main"
        edit="true"
      />
      <DetailsCard
        title="Total Expenses"
        value={totalExpenses}
        backgroundColor="warning.main"
        edit="true"
      />
      <DetailsCard
        title="Current Balance"
        value={currentBalance}
        backgroundColor="primary.main"
        edit="true"
      />
    </Box>
  );
};

export default DetailsCards;
