import React from "react";
import "./App.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import AddTransaction from "./components/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";
import { TransactionList } from "./components/TransactionList";

function App() {
  return (
    <GlobalProvider>
      <div className="content">
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
