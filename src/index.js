import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { reducerEvent } from "./reducer/exReducer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { AppConnected } from "./components/AppConnected";


export const store = createStore(reducerEvent,  applyMiddleware(thunk));

const root = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <AppConnected />
  </Provider>,
  root
);
