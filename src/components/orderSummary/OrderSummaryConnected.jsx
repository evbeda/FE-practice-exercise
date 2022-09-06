import { connect } from "react-redux";
import { OrderSummary } from "./OrderSummary";
const stateToTaskInput = (state) => {
  return {
    modal: state.modal
  };
};

export const OrderSummaryConnected = connect(stateToTaskInput)(OrderSummary);