import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  transactions: [
    { id: 1, date: '2024-09-02', description: 'Monthly salary payment', category: 'Salary', amount: 3000, type: 'Income' },
    { id: 2, date: '2024-09-01', description: 'Grocery shopping at Walmart', category: 'Groceries', amount: 150, type: 'Expense' },
    { id: 3, date: '2024-09-03', description: 'Electricity bill for August', category: 'Utilities', amount: 80, type: 'Expense' },
    { id: 4, date: '2024-09-06', description: 'Freelance web development project', category: 'Freelance', amount: 500, type: 'Income' },
    { id: 5, date: '2024-09-05', description: 'Lunch at Subway', category: 'Food & Dining', amount: 20, type: 'Expense' },
    { id: 6, date: '2024-09-04', description: 'Payment for graphic design work', category: 'Freelance', amount: 4000, type: 'Income' },
    { id: 7, date: '2024-09-07', description: 'Monthly rent payment', category: 'Rent', amount: 1000, type: 'Expense' },
    { id: 8, date: '2024-09-08', description: 'Gas bill for August', category: 'Utilities', amount: 50, type: 'Expense' },
    { id: 9, date: '2024-09-10', description: 'Payment for graphic design work', category: 'Freelance', amount: 4500, type: 'Income' },
  ],
  totalIncome: 3900,
  totalExpenses: 1300,
  currentBalance: 2600,
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addTransaction: (state, action) => {
      const amount = Number(action.payload.amount);
      
      if (action.payload.type === 'Income') {
        state.totalIncome += amount;
        state.currentBalance += amount;
        state.transactions.push(action.payload);
        state.transactions.sort((a, b) => new Date(a.date) - new Date(b.date));
      } else if (action.payload.type === 'Expense') {
        if (state.currentBalance - amount < 0) {
          alert('Transaction cannot be added as it would result in a negative balance.');
        } else {
          state.transactions.push(action.payload);
          state.transactions.sort((a, b) => new Date(a.date) - new Date(b.date));
          state.totalExpenses += amount;
          state.currentBalance -= amount;
        }
      }  
    },
    deleteTransaction: (state, action) => {
      const updateTrans = state.transactions.filter((transaction) => transaction.id !== action.payload);
      state.transactions = updateTrans;
    },
    updateTransaction: (state, action) => {
      const { id, date, description, category, type } = action.payload;
      const updatedTransaction = state.transactions.find(transaction => transaction.id === id);

      if (updatedTransaction) {
        updatedTransaction.date = date;
        updatedTransaction.description = description;
        updatedTransaction.category = category;
      }
    },
    updateValue: (state, action) => {
      const { type, newValue } = action.payload;
      
      if (type === 'Income') {
        state.totalIncome = newValue;
      } else if (type === 'Expense') {
        state.totalExpenses = newValue;
      } else if (type === 'Balance') {
        state.currentBalance = newValue;
      }
    },
  },
});

export const { addTransaction, deleteTransaction, updateTransaction , updateValue } = transactionsSlice.actions;
export default transactionsSlice.reducer;
