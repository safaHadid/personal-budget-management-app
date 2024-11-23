import React, { useState, useMemo, useCallback, memo } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, MenuItem } from '@mui/material';

const categoriesByType = {
  Income: ['Salary', 'Freelance', 'Investments'],
  Expense: ['Groceries', 'Rent', 'Utilities', 'Entertainment'],
};

const AddTransactionDialog = memo(({ open, onClose, onAddTransaction }) => {
  const initialFormData = {
    description: '',
    amount: '',
    type: '',
    category: '',
    date: '', 
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = useCallback((field) => (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: e.target.value,
    }));
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (formData.description && formData.amount && formData.type && formData.category && formData.date) {
      const transactionWithId = {
        ...formData,
        id: Date.now(),
      };
      onAddTransaction(transactionWithId);
      setFormData(initialFormData); 
      onClose(); 
    } else {
      alert('Please fill in all fields');
    }
  }, [formData, onAddTransaction, onClose, initialFormData]);

  const handleClose = useCallback(() => {
    setFormData(initialFormData);
    onClose();
  }, [initialFormData, onClose]);

  const filteredCategories = useMemo(() => {
    return formData.type ? categoriesByType[formData.type] : [];
  }, [formData.type]);

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add a New Transaction</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Fill in the details of the new transaction you want to add.
        </DialogContentText>

        <TextField
          label="Date"
          variant="outlined"
          type="date"
          value={formData.date}
          onChange={handleInputChange('date')}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField
          label="Description"
          variant="outlined"
          value={formData.description}
          onChange={handleInputChange('description')}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Amount"
          variant="outlined"
          value={formData.amount}
          onChange={handleInputChange('amount')}
          fullWidth
          margin="normal"
          type="number"
        />
        <TextField
          label="Type"
          variant="outlined"
          value={formData.type}
          onChange={handleInputChange('type')}
          select
          fullWidth
          margin="normal"
        >
          <MenuItem value="Income">Income</MenuItem>
          <MenuItem value="Expense">Expense</MenuItem>
        </TextField>
        <TextField
          label="Category"
          variant="outlined"
          value={formData.category}
          onChange={handleInputChange('category')}
          select
          fullWidth
          margin="normal"
          disabled={!formData.type} 
        >
          {filteredCategories.map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </TextField>
        
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary" autoFocus>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
});

export default AddTransactionDialog;
