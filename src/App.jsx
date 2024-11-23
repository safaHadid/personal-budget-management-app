import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';

const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const TransactionList = React.lazy(() => import('./pages/TransactionList'));
const Reports = React.lazy(() => import('./pages/Reports'));

function App() {
  return (
    <Router>
      <MainPage />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/transactionlist" element={<TransactionList />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
