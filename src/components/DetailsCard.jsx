import { Card, CardContent, Typography, Button } from '@mui/material';
import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import EditCardDialog from './EditCardDialog';
import { updateValue } from '../redux/transactionsSlice';

const DetailsCard = ({ title, value, backgroundColor, edit }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const dispatch = useDispatch(); 

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleSaveNewValue = useCallback((newValue) => {
    let type;
    if (title === 'Total Income') {
      type = 'Income';
    } else if (title === 'Total Expenses') {
      type = 'Expense';
    } else if (title === 'Current Balance') {
      type = 'Balance';
    }
  
    dispatch(updateValue({ type, newValue: Number(newValue) }));
  }, [title, dispatch]);
  

  return (
    <>
      <Card
        sx={{
          marginTop: 4,
          marginBottom: 2,
          minWidth: 250,
          minHeight: 150,
          bgcolor: backgroundColor,
          color: 'common.white',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <Typography gutterBottom sx={{ fontSize: 14 }}>
            {title}
          </Typography>
          <Typography variant="h5" component="div">
            ${value.toLocaleString()}
          </Typography>
          {edit ? (
            <Button sx={{ color: 'white', marginTop: 2 }} onClick={handleOpenDialog}>
              Edit
            </Button>
          ) : null}
        </CardContent>
      </Card>

      <EditCardDialog
        open={openDialog}
        onClose={handleCloseDialog}
        title={title}
        value={value}
        onSave={handleSaveNewValue}
      />
    </>
  );
};

export default DetailsCard;
