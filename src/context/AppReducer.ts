import { actionType, transactionType } from "../utilities/types";

const AppReducer = (state: any, action: actionType) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction: transactionType) => transaction.id !== action.payload
        ),
      };

    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
};

export default AppReducer;
