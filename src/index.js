import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reportWebVitals from "./reportWebVitals";
import thunk from "redux-thunk";
import { allReducers } from "./redux/reducers/index.js";
import logger from "redux-logger";

const store = createStore(allReducers, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
