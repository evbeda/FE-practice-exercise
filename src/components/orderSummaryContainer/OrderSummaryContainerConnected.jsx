
import { connect } from "react-redux";
import { OrderSummaryContainer } from "./OrderSummaryContainer";
const stateToTaskInput = (state) => {
  return {
    event: state.modal.event
  };
};

export const OrderSummaryContainerConnected = connect(stateToTaskInput)(OrderSummaryContainer);
  
