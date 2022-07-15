import React from "react";
import { Provider } from "react-redux";

import { App } from "./App.js";
import { store } from "./store";

export const AppProvider = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
