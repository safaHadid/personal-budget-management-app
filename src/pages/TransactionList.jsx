import React, { useState, useCallback, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Container } from '@mui/material';
import { addTransaction } from '../redux/transactionsSlice';

const TransactionsTable = lazy(() => import('../components/TransactionsTable'));
const DetailsCard = lazy(() => import('../components/DetailsCard'));
const AddTransactionDialog = lazy(() => import('../components/AddTransactionDialog'));

const TransactionList = () => {
  const [open, setOpen] = useState(false);

  const transactions = useSelector((state) => state.transactions.transactions);
  const currentBalance = useSelector((state) => state.transactions.currentBalance);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddTransaction = useCallback((addedTransaction) => {
    dispatch(addTransaction(addedTransaction));
    handleClose();
  }, [dispatch, handleClose]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Container style={{ marginTop: "100px" }}>
        <Box style={{ maxWidth: 250 }}>
          <DetailsCard
            title="Total Balance"
            value={currentBalance}
            backgroundColor="primary.main"
          />
          <Button
            variant="contained"
            sx={{ backgroundColor: 'primary.main', color: 'white', my: 5, px: 5, py: 2 }}
            onClick={handleClickOpen}
          >
            Add Transaction
          </Button>
        </Box>
        <TransactionsTable transactions={transactions} />
        <AddTransactionDialog
          open={open}
          onClose={handleClose}
          onAddTransaction={handleAddTransaction}
        />
      </Container>
    </Suspense>
  );
};

export default TransactionList;


