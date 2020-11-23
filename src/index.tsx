import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import rootReducer from "./redux/reducer";
import App from "./pages/App";
import { createStore } from "redux";

const root = document.getElementById("root");
const store = createStore(
  rootReducer
);

store.subscribe(() => store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);


