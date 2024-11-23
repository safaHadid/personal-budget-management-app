import { styled } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React, { useMemo } from 'react'

const CustomDataGrid = styled(DataGrid)(({ theme }) => ({
    '& .MuiDataGrid-cell': {
      borderBottom: `1px solid ${theme.palette.divider}`,
      padding: theme.spacing(1),
      display: 'flex',
      alignItems: 'center',
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
  

function TopExpenseCategories({data}) {
  
  const columns = useMemo(() => [
    { field: 'category', headerName: 'Category', width: 300 },
    {
      field: 'amount',
      headerName: 'Amount',
      width: 300,
      cellClassName: 'MuiDataGrid-cell--amount',
      renderCell: (params) => (
        <div>
          ${params.value.toLocaleString()}
        </div>
      ),
    },
  ], []);

  
  return (
    <div style={{ height: 214, width: '100%' }}>
      <CustomDataGrid
        rows={data}
        columns={columns}
        disableColumnFilter
        hideFooter
      />
    </div>
  )
}

export default TopExpenseCategories