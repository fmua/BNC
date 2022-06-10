import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//import * as serviceWorker from "./serviceWorker";
import { I18nextProvider } from "react-i18next";
//import i18next from "i18next";
//import common_fr from "./translations/fr/Common.json";
//import common_en from "./translations/en/Common.json";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "./i18n";
//import store from "./app/Store";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
//import { configureStore } from "@reduxjs/toolkit";
import SelectScreenReducer from "./reducers/SelectScreenReducer";
import EquipmentReducer from "./reducers/EquipmentReducer";
import TypeReducer from "./reducers/TypeReducer";
import TokenReducer from "./reducers/TokenReducer";
import NoIncidentReducer from "./reducers/NoIncidentReducer";
//import { express } from "express";
//import { cors } from "cors";

//app.use(
//cors({
// origin: "*",
// })
//);

const rootReducer = combineReducers({
  selectScreen: SelectScreenReducer,
  stateEquipment: EquipmentReducer,
  apiToken: TokenReducer,
  stateType: TypeReducer,
  stateNoIncident: NoIncidentReducer,
});
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
//serviceWorker.unregister();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
