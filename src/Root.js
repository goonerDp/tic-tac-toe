import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

export default ({ children, initState = {} }) => {
  const store = createStore(reducers, initState, composeWithDevTools());
  return <Provider store={store}>{children}</Provider>;
};
