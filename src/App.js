import React from 'react';
import Heading from './components/Heading';
import Balance from "./components/Balance";
import { IncomeExpense } from "./components/IncomeExpense";
import { History } from "./components/History";
import { AddTransaction } from "./components/AddTransaction";
import './App.css';
import { TransProvider } from "./components/transContext";

function App() {
  return (
    <TransProvider>
      <div className="container">
        <Heading />
        <Balance />
        <IncomeExpense />
        <History />
        <AddTransaction />
      </div>
    </TransProvider>
  );
}

export default App;
