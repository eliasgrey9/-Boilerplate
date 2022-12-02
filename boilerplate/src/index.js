import React from "react";
import { createRoot } from "react-dom/client";

/* Import and destructure main from src/component/index.js  */
import Main from "./components/Main";
import { Provider } from "react-redux";
import store from "./store";

import { BrowserRouter as Router } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router>
      <Main />
    </Router>
  </Provider>
);
