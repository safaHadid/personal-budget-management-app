import React, { useState, useMemo, useCallback, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, IconButton, TextField, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import dayjs from 'dayjs';
import { deleteTransaction, updateTransaction } from '../redux/transactionsSlice';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import EditTransactionDialog from './EditTransactionDialog';

const CustomDataGrid = styled(DataGrid)(({ theme }) => ({
  '& .MuiDataGrid-cell': {
    borderBottom: `1px solid ${theme.palette.divider}`,
    padding: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
  },
  '& .MuiDataGrid-row:nth-of-type(even)': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const FilterInput = memo(({ label, value, onChange, options }) => (
  <TextField
    label={label}
    value={value}
    onChange={(e) => onChange(e.target.value)}
    select={Boolean(options)}
    fullWidth
    style={{ marginBottom: 20 }}
  >
    <MenuItem value="">
      <em>None</em>
    </MenuItem>
    {options?.map((option) => (
      <MenuItem key={option} value={option}>
        {option}
      </MenuItem>
    ))}
  </TextField>
));

const TransactionsTable = () => {
  const dispatch = useDispatch();
  const transactions = useSelector((state) => state.transactions.transactions);

  const [isDialogOpen, setDialogOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [filter, setFilter] = useState({
    date: '',
    type: '',
    category: '',
  });

  const categoriesByType = {
    Income: ['Salary', 'Freelance'],
    Expense: ['Groceries', 'Utilities', 'Rent', 'Food & Dining'],
  };

  const filteredCategories = filter.type ? categoriesByType[filter.type] : [];

  const filteredRows = useMemo(() => {
    if (!filter.date && !filter.type && !filter.category) return [];
    return transactions.filter(
      (row) =>
        (!filter.date || dayjs(row.date).isSame(filter.date, 'day')) &&
        (!filter.type || row.type === filter.type) &&
        (!filter.category || row.category === filter.category)
    );
  }, [filter, transactions]);

  const handleFilterChange = useCallback((field) => (value) => {
    setFilter((prev) => {
      const updatedFilters = { ...prev, [field]: value };
      if (field === 'type' && value === '') {
        updatedFilters.category = '';
      }
      return updatedFilters;
    });
  }, []);

  const resetFilters = () => {
    setFilter({
      date: '',
      type: '',
      category: '',
    });
  }

  const handleDelete = useCallback((id) => {
    dispatch(deleteTransaction(id));
  }, [dispatch]);

  const handleEditClick = useCallback((transaction) => {
    setSelectedTransaction(transaction);
    setDialogOpen(true);
  }, []);

  const handleDialogClose = useCallback(() => {
    setDialogOpen(false);
    setSelectedTransaction(null);
  }, []);

  const handleSave = useCallback((editedTransaction) => {
    if (selectedTransaction) {
        dispatch(updateTransaction({ ...selectedTransaction, ...editedTransaction }));
        handleDialogClose();
    }
}, [dispatch, selectedTransaction, handleDialogClose]);


  const columns = useMemo(() => [
    { field: 'date', headerName: 'Date', width: 150 },
    { field: 'description', headerName: 'Description', width: 300 },
    { field: 'category', headerName: 'Category', width: 180 },
    {
      field: 'amount',
      headerName: 'Amount',
      width: 130,
      renderCell: (params) => <div>${params.value.toLocaleString()}</div>,
    },
    {
      field: 'type',
      headerName: 'Type',
      width: 180,
      renderCell: (params) => (
        <div style={{ color: params.value === 'Income' ? 'green' : 'red' }}>
          {params.value}
        </div>
      ),
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 120,
      renderCell: (params) => (
        <div style={{ display: 'flex', gap: 5 }}>
          <IconButton color="primary" onClick={() => handleEditClick(params.row)}>
            <EditIcon />
          </IconButton>
          <IconButton color="error" onClick={() => handleDelete(params.row.id)}>
            <DeleteIcon />
          </IconButton>
        </div>
      ),
    },
  ], [handleEditClick, handleDelete]);

  return (
    <div style={{ height: 550, width: '100%' }}>
      <Box sx={{ display: { xs: 'block', sm: 'flex' }, gap: { xs: 2, md: 3 } }}>
        <TextField
          label="Date"
          type="date"
          value={filter.date}
          onChange={(e) => handleFilterChange('date')(e.target.value)}
          fullWidth
          InputLabelProps={{ shrink: true }}
          sx={{ mb: 3 }}
        />
        <FilterInput
          label="Type"
          value={filter.type}
          onChange={handleFilterChange('type')}
          options={['Income', 'Expense']}
        />
        <FilterInput
          label="Category"
          value={filter.category}
          onChange={handleFilterChange('category')}
          options={filteredCategories}
        />
      </Box>

      <Button variant="outlined" color="primary" sx={{ mb: 4 }} onClick={resetFilters}>
        Reset Filters
      </Button>

      {filteredRows.length > 0 ? (
        <CustomDataGrid rows={filteredRows} columns={columns} disableColumnFilter />
      ) : (
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <p>Select Filters To Display Transactions</p>
        </Box>
      )}

      <EditTransactionDialog
        transaction={selectedTransaction}
        open={isDialogOpen}
        onClose={handleDialogClose}
        onSave={handleSave}
      />
    </div>
  );
};

export default TransactionsTable;
