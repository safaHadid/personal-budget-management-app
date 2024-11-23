import React, { memo, useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, MenuItem } from '@mui/material';

const categoriesByType = {
  Income: ['Salary', 'Freelance', 'Investments'],
  Expense: ['Groceries', 'Rent', 'Utilities', 'Entertainment'],
};

const EditTransactionDialog = memo(({ open, transaction, onClose, onSave }) => {
  const [formValues, setFormValues] = useState({
    date: '',
    description: '',
    amount: 0,
    type: '',
    category: '',
  });

  useEffect(() => {
    if (transaction) {
      setFormValues({
        date: transaction.date,
        description: transaction.description,
        amount: transaction.amount,
        type: transaction.type,
        category: transaction.category,
      });
    }
  }, [transaction]);

  const filteredCategories = formValues.type ? categoriesByType[formValues.type] : [];

  const handleFieldChange = (field) => (value) => {
    setFormValues((prev) => ({ ...prev, [field]: value }));    
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit Transaction</DialogTitle>
      <DialogContent>
        <TextField
          label="Date"
          type="date"
          fullWidth
          margin="dense"
          value={formValues.date}
          onChange={(e) => handleFieldChange('date')(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          label="Description"
          fullWidth
          margin="dense"
          value={formValues.description}
          onChange={(e) => handleFieldChange('description')(e.target.value)}
        />
        <TextField
          label="Amount"
          fullWidth
          margin="dense"
          value={formValues.amount}
          type="number"
          disabled
        />
        <TextField
          label="Type"
          fullWidth
          margin="dense"
          value={formValues.type}
          disabled
          select
        >
          <MenuItem value="Income">Income</MenuItem>
          <MenuItem value="Expense">Expense</MenuItem>
        </TextField>
        <TextField
          label="Category"
          fullWidth
          margin="dense"
          value={formValues.category || ''}
          onChange={(e) => handleFieldChange('category')(e.target.value)}
          select
        >
          {filteredCategories.map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </TextField>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">Cancel</Button>
        <Button onClick={() => { onSave(formValues);
        }} color="primary">Save</Button>
      </DialogActions>
    </Dialog>
  );
});

export default EditTransactionDialog;
