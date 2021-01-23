import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import AddTransaction from "./components/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";
import { TransactionList } from "./components/TransactionList";

import firebase from "./firebase";

function App() {
  const messaging = firebase.messaging();

  useEffect(() => {
    console.log("use effect is runnning...");
    messaging
      .requestPermission()
      .then(() => {
        return messaging.getToken();
      })
      .then((token) => {
        // alert(token);
        // prompt("token", token);
        console.log("token", token);
      })
      .catch((err) => console.log("error", err));
  }, [messaging]);

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
