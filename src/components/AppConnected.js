
import { mockApi } from "../actions/appActions";
import { connect } from "react-redux";
import App from "./App";

const stateToTaskInput = (state) => {
  return {
    mockedApi: state
  };
};

const mapDispatchToProps = {
    mockApi
  };

export const AppConnected = connect(stateToTaskInput, mapDispatchToProps)(App);
  
