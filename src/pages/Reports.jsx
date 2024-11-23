import React, { lazy, Suspense } from "react";
import { Box, Container, Grid, Typography, CircularProgress } from "@mui/material";

const PieChartIncomeVsExpenses = lazy(() => import("../components/PieChartIncomeVsExpenses"));
const LineChartSpendingTrends = lazy(() => import("../components/LineChartSpendingTrends"));
const LineChartIncomeOverTime = lazy(() => import("../components/LineChartIncomeOverTime"));
const PieChartExpensesByCategory = lazy(() => import("../components/PieChartExpensesByCategory"));
const ExportReports = lazy(() => import("../components/ExportReports"));

const Reports = () => {
  return (
    <Container style={{ marginTop: "100px", marginBottom: "100px" }}>
      <Box>
        <Typography variant="h4" gutterBottom>
          Reports
        </Typography>

        <Grid container display="flex" justifyContent="center" mt={4}>
          <Grid container spacing={2} sx={{ justifyContent: "center", marginBottom: "50px" }}>
            <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
              <Suspense fallback={<CircularProgress />}>
                <PieChartExpensesByCategory sx={{ width: { xs: "100%", sm: "90%" } }} />
              </Suspense>
            </Grid>

            <Grid item xs={12} sm={6} sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
              <Suspense fallback={<CircularProgress />}>
                <PieChartIncomeVsExpenses sx={{ width: { xs: "100%", sm: "90%" } }} />
              </Suspense>
            </Grid>
          </Grid>

          <Grid item xs={10} my={5} sx={{ display: "flex", justifyContent: "center", width: "100%", marginBottom: "100px" }}>
            <Suspense fallback={<CircularProgress />}>
              <LineChartSpendingTrends sx={{ width: "100%" }} />
            </Suspense>
          </Grid>
          <Grid item xs={10} sx={{ display: "flex", justifyContent: "center", mt: 3, width: "100%", marginBottom: "100px" }}>
            <Suspense fallback={<CircularProgress />}>
              <LineChartIncomeOverTime sx={{ width: "100%" }} />
            </Suspense>
          </Grid>
        </Grid>

        <Suspense fallback={<CircularProgress />}>
          <ExportReports />
        </Suspense>
      </Box>
    </Container>
  );
};

export default Reports;
