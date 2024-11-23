import React, { useState, useMemo, useCallback, memo } from "react";
import { useSelector } from "react-redux";
import { exportToExcel } from "./exportToExcel";
import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

const ExportReports = memo(() => {
  const transactions = useSelector((state) => state.transactions.transactions);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reportType, setReportType] = useState("");

  const filteredTransactions = useMemo(() => {
    if (!startDate || !endDate || !reportType) return [];
    
    const start = new Date(startDate);
    const end = new Date(endDate);

    return transactions.filter((transaction) => {
      const transactionDate = new Date(transaction.date);
      return (
        transactionDate >= start &&
        transactionDate <= end &&
        (reportType === "Income & Expense" || transaction.type === reportType)
      );
    }).sort((a, b) => new Date(a.date) - new Date(b.date));
  }, [transactions, startDate, endDate, reportType]);

  const handleExport = useCallback(() => {
    exportToExcel(filteredTransactions, `${reportType} Report`, startDate, endDate);
    setStartDate("");
    setEndDate("");
    setReportType("");
  }, [filteredTransactions, reportType, startDate, endDate]);

  return (
    <Container>
      <Typography variant="h5" sx={{ mt: 5, mb: 3 }}>
        Export Reports
      </Typography>

      <Grid container spacing={2} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Start Date"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="End Date"
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="report-type-label">Report Type</InputLabel>
            <Select
              labelId="report-type-label"
              value={reportType}
              onChange={(e) => setReportType(e.target.value)}
            >
              <MenuItem value="Income">Income</MenuItem>
              <MenuItem value="Expense">Expense</MenuItem>
              <MenuItem value="Income & Expense">Income & Expense</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleExport}
            disabled={!startDate || !endDate || !reportType}
          >
            Export Report
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
});

export default ExportReports;
