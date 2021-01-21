import React, { createContext, useReducer } from "react";
import { transactionType } from "../utilities/types";
import AppReducer from "./AppReducer";

const initialState: any = {
  transactions: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function deleteTransaction(id: number) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction: transactionType) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
