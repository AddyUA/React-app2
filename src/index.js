import reportWebVitals from "./reportWebVitals";
import App from "./App";
import store from "./redux/redux";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import StoreContext from "./StoreContext";

const renderEntireThree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Router>
        <StoreContext.Provider value={store}>
          <App
          // store={store}
          // dispatch={store.dispatch.bind(store)}
          />
        </StoreContext.Provider>
      </Router>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

renderEntireThree(store.getState());

store.subscribe(renderEntireThree);

reportWebVitals();
