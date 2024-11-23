import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { useMemo } from 'react';

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
    textAlign: 'right',
  },
  '& .MuiDataGrid-cell--type': {
    textAlign: 'left',
  },
}));




const RecentTransTable = ({ data }) => {

  const columns = useMemo(() => [
    { field: 'date', headerName: 'Date', width: 200 },
    { field: 'description', headerName: 'Description', width: 400 },
    { field: 'category', headerName: 'Category', width: 200 },
    {
      field: 'amount',
      headerName: 'Amount',
      width: 150,
      cellClassName: 'MuiDataGrid-cell--amount',
      renderCell: (params) => (
        <div>${params.value.toLocaleString()}</div>
      ),
    },
    {
      field: 'type',
      headerName: 'Type',
      width: 180,
      cellClassName: 'MuiDataGrid-cell--type',
      renderCell: (params) => (
        <div style={{ color: params.value === 'Income' ? 'green' : 'red' }}>
          {params.value}
        </div>
      ),
    },
  ], []);

  
  const rows = data.map((item, index) => ({ id: index, ...item }));

  return (
    <Box>
      <CustomDataGrid
        rows={rows}
        columns={columns}
        disableColumnFilter
        hideFooter
        style={{ height: 318, width: '100%' , overflowX:'auto'}}
      />
    </Box>
  );
};

export default RecentTransTable;
