import React, { useCallback, useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField } from '@mui/material';

const EditCardDialog = ({ open, onClose, title, value, onSave }) => {
  const [newValue, setNewValue] = useState(value);

  const handleSave = useCallback(() => {
    onSave(newValue);
    onClose();
  }, [newValue, onSave, onClose]);
  

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit {title}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label={`New ${title}`}
          type="number"
          fullWidth
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSave} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditCardDialog;
