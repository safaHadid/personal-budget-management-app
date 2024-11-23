import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';

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
  '& .MuiDataGrid-footerContainer': {
    backgroundColor: theme.palette.background.paper,
  },
  '& .MuiDataGrid-cell--amount': {
    textAlign: 'left',
  },
  '& .MuiDataGrid-cell--type': {
    textAlign: 'left',
  },
}));

const TransTable = ({ recent = true }) => {
  const transactions = useSelector((state) => state.transactions.transactions);

  const columns = useMemo(() => [
    { field: 'date', headerName: 'Date', width: 150 },
    { field: 'description', headerName: 'Description', width: 330 },
    { field: 'category', headerName: 'Category', width: 180 },
    {
      field: 'amount',
      headerName: 'Amount',
      width: 130,
      cellClassName: 'MuiDataGrid-cell--amount',
      renderCell: (params) => (
        <div>
          ${params.value.toLocaleString()}
        </div>
      ),
    },
    {
      field: 'type',
      headerName: 'Type (Income/Expense)',
      width: 180,
      cellClassName: 'MuiDataGrid-cell--type',
      renderCell: (params) => (
        <div style={{ color: params.value === 'Income' ? 'green' : 'red' }}>
          {params.value}
        </div>
      ),
    },
  ], []);

  const rows = useMemo(() => {
    return recent ? transactions.slice(-5) : transactions;
  }, [transactions, recent]);

  return (
    <div style={{ height: 318, width: '100%' }}>
      <CustomDataGrid
        rows={rows}
        columns={columns}
        disableColumnFilter
        hideFooter
      />
    </div>
  );
};

export default TransTable;
